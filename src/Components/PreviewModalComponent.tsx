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

	public componentDidMount(): void {
		Animated.parallel([
			Animated.spring(this.scale, {
				toValue: 1,
				bounciness: 10,
				useNativeDriver: true
			}),
			Animated.timing(this.opacity, {
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
												<Image
													style={{ width: "100%", flex: 1 }}
													source={{ uri: context.imagePreview.photo }}
													resizeMode={"contain"}
												/>
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
