// Global Imports
import React, { PureComponent } from 'react'
import { Text, View, Modal, Image, Animated, ImageBackground, Platform } from 'react-native'

// Local Imports
import Common from '@Provider';
import { IGalleryProps, IGalleryState } from '@Interfaces';
import { PreviewModalStyle } from '@Styles';

export class PreviewModal extends PureComponent {

	static contextType = Common;

	public scale = new Animated.Value(0);
	public opacity = new Animated.Value(0);
	public thumbOpacity = new Animated.Value(1);
	public containOpacity = new Animated.Value(0);

	public componentWillMount(): void {
		Animated.parallel([
			Animated.spring(this.scale, {
				toValue: 1,
				bounciness: 8,
				useNativeDriver: true
			}),
			Animated.timing(this.opacity, {
				toValue: 1,
				duration: 250,
				useNativeDriver: true
			})
		]).start();
	}
	public hideThumb(): void {
		Animated.parallel([
			Animated.timing(this.thumbOpacity, {
				toValue: 0,
				duration: 100,
				useNativeDriver: true
			}),
			Animated.timing(this.containOpacity, {
				toValue: 1,
				duration: 500,
				useNativeDriver: true
			})
		]).start();
	}

	public render(): JSX.Element {
		return (
			<Common.Consumer>
				{(context: IGalleryProps & IGalleryState) => (
					<Modal
						animationType={"none"}
						visible={context.previewIsOpen}
						transparent={true}
					>
						<ImageBackground style={{
							flex: 1,
						}}
							blurRadius={Platform.OS == 'ios' ? 20 : 15}
							// source={{ uri: context.imagePreview.thumb }}
							source={require("../Assets/Images/radius-bg.png")}
							resizeMode={"cover"}
						>
							<Animated.View
								style={[
									PreviewModalStyle.container,
									{
										transform: [
											{
												scale: this.scale.interpolate({
													inputRange: [0, 1],
													outputRange: [0, 1]
												})
											}
										],
										opacity: this.opacity
									}
								]}>
								<View style={PreviewModalStyle.imagePreview}>
									{
										context.customPreviewComponent ?
											context.customPreviewComponent(context.imagePreview) :
											(
												<React.Fragment>
													<Animated.Image
														style={[
															PreviewModalStyle.thumbPreview,
															{
																opacity: this.thumbOpacity
															}
														]}
														source={{ uri: context.imagePreview.thumb }}
														resizeMode={"contain"}
														blurRadius={Platform.OS == 'ios' ? 10 : 5}
													/>
													<Animated.Image
														style={[
															PreviewModalStyle.containPreview,
															{
																opacity: this.containOpacity
															}
														]}
														onLoadEnd={() => this.hideThumb()}
														source={{ uri: context.imagePreview.photo }}
														resizeMode={"contain"}
													/>
												</React.Fragment>
											)
									}
								</View>
							</Animated.View>
						</ImageBackground>
					</Modal>
				)}
			</Common.Consumer>
		)
	}
}
