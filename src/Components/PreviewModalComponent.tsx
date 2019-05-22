// Global Imports
import React, { PureComponent } from 'react'
import { Text, View, Modal, Image, Animated, ImageBackground, Platform } from 'react-native'

// Local Imports
import Common from '@Provider';
import { IGalleryProps, IGalleryState } from '@Interfaces';
import { PreviewModalStyle } from '@Styles';
import { Animate } from '@Helpers';

export class PreviewModal extends PureComponent {

	static contextType = Common;

	public scale = new Animated.Value(0);
	public opacity = new Animated.Value(0);
	public thumbOpacity = new Animated.Value(1);
	public containOpacity = new Animated.Value(0);

	public componentWillMount(): void {
		Animate.parallel([
			Animate.timing(this.opacity, { toValue: 1, duration: 150 }),
			Animate.spring(this.scale, { toValue: 1, bounciness: 8 })
		]).start();
	}
	public hideThumb(): void {
		Animate.parallel([
			Animate.timing(this.thumbOpacity, { toValue: 0, duration: 100 }),
			Animate.timing(this.containOpacity, { toValue: 1, duration: 200 })
		]).start();
	}

	public renderAnimatedView(): JSX.Element {
		return (
			<Animated.View
				style={[PreviewModalStyle.container, {
					transform: [{
						scale: this.scale.interpolate({
							inputRange: [0, 1],
							outputRange: [0, 1]
						})
					}],
					opacity: this.opacity
				}
				]}>
				<View style={PreviewModalStyle.imagePreview}>
					{
						this.context.renderPreview ?
							this.context.renderPreview(this.context.imagePreview) : this.defaultView()
					}
				</View>
			</Animated.View>
		)
	}

	public defaultView(): JSX.Element {
		return (
			<React.Fragment>
				<Animated.Image
					style={[PreviewModalStyle.thumbPreview, { opacity: this.thumbOpacity }]}
					source={{ uri: this.context.imagePreview.thumbnail }}
					resizeMode={"contain"}
					blurRadius={Platform.OS == 'ios' ? 10 : 5}
				/>
				<Animated.Image
					style={[PreviewModalStyle.containPreview, { opacity: this.containOpacity }]}
					onLoadEnd={() => this.hideThumb()}
					source={{ uri: this.context.imagePreview.original }}
					resizeMode={"contain"}
				/>
			</React.Fragment>
		)
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
						<ImageBackground style={{ flex: 1 }}
							blurRadius={Platform.OS == 'ios' ? 20 : 15}
							// source={{ uri: context.imagePreview.thumbnail }}
							source={require("../Assets/Images/radius-bg.png")}
							resizeMode={"cover"}>
							{this.renderAnimatedView()}
						</ImageBackground>
					</Modal>
				)}
			</Common.Consumer>
		)
	}
}
