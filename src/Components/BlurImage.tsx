// Global Imports
import React, { PureComponent } from 'react'
import { Animated, ActivityIndicator, PanResponder, Dimensions, View, InteractionManager } from 'react-native'

// Local Imports
import { IBlurImageProps, IBlurImageState, IGalleryProps, IGalleryState } from '@Interfaces';
import { BlurImageStyle } from '@Styles';
import Common from '@Provider';
import { Animate } from '@Helpers';

export class BlurImage extends PureComponent<IBlurImageProps, IBlurImageState> {

	public imageAnimated = new Animated.Value(0);
	public translateX = new Animated.Value(0);
	public translateY = new Animated.Value(0);
	public panResponder;
	public locationY: number = 0;
	public locationX: number = 0;
	public direction: string = "left";

	static contextType = Common;

	state = {
		loading: true
	}

	public componentWillMount(): void {
		this.panResponder = PanResponder.create({
			onMoveShouldSetPanResponderCapture: () => true,
			onPanResponderMove: Animated.event([null, { dx: this.translateX }]),
			onPanResponderRelease: this.onPanResponderRelease.bind(this),
			onPanResponderEnd: (e, { vx, dx }) => {
				this.locationX = e.nativeEvent.locationX;
				this.locationY = e.nativeEvent.locationY;
			}
		});
	}

	public onPanResponderRelease(e, { vx, dx, vy, dy }): void {
		let { imageIndex, items } = this.context;
		const screenWidth = Dimensions.get("window").width;
		const screenHeight = Dimensions.get("window").height;
		const defaultValue = {
			toValue: dx > 0 ? screenWidth : -screenWidth,
			duration: 250
		};

		if (dx === 0 && vx === 0) {
			return
		}
		// else if (dy > 0) {
		// 	console.log("down")
		// 	this.direction = "down";
		// } else if (dy < 0) {
		// 	console.log("top")
		// 	this.direction = "top";
		// }
		else if (dx > 0) {
			if (imageIndex !== 0) {
				console.log("right")
				this.direction = "right";
				if (vx <= 0.9 || dx <= 0.9 * screenWidth) {
					this.getImageByIndex(defaultValue, --imageIndex);
				} else {
					this.getDefault();
				}
			} else {
				this.getDefault();
			}
		} else {
			if (imageIndex >= 0 && imageIndex < items.length - 1) {
				console.log("left")
				this.direction = "left";
				if (vx >= 0.9 || dx >= 0.9 * -screenWidth) {
					this.getImageByIndex(defaultValue, ++imageIndex);
				} else {
					this.getDefault();
				}
			} else {
				this.getDefault();
			}
		}
	}

	public getDefault(): void {
		Animate.spring(this.translateX, {
			toValue: 0,
			bounciness: 5,
		}).start();
	}

	public getImageByIndex(defaultValue, imageIndex): void {
		Animate.timing(this.translateX, defaultValue).start(() => {
			this.context.changeImage(imageIndex)
			if (this.context.renderDetailImage) {
				setTimeout(() => {
					this.translateX.setValue(0);
				}, 1000);
			}
		});
	}

	public onImageLoadEnd(): void {
		this.setState({
			loading: false
		}, () => {
			if (this.direction === "left") {
				this.translateX.setValue(this.locationX);
			} else {
				this.translateX.setValue(-this.locationX);
			}
			Animate.parallel([
				Animate.timing(this.translateX, {
					toValue: 0,
					duration: 100
				}),
				Animate.timing(this.imageAnimated, {
					toValue: 1,
					duration: 250
				})
			]).start();
		});

	}

	public onImageLoadStart(): void {
		this.setState({ loading: true }, () => {
			Animate.timing(this.imageAnimated, {
				toValue: 0,
				duration: 250,
			}).start();
		});
	}

	public customImage(): JSX.Element {
		return this.context.renderDetailImage(this.context.showingImage, this.context.imageIndex);
	}

	public render(): JSX.Element {

		return (
			<Common.Consumer>
				{(context: IGalleryProps & IGalleryState) => (
					<React.Fragment>
						{this.state.loading && <ActivityIndicator style={BlurImageStyle.center} />}
						{
							context.renderDetailImage ? this.customImage() : this.defaultRender()
						}
					</React.Fragment>
				)}
			</Common.Consumer>
		)
	}

	public defaultRender(): JSX.Element {
		return (
			<Animated.View
				style={[
					BlurImageStyle.container,
					{
						transform: [{ translateX: this.translateX }]
					}
				]}
				{...this.panResponder.panHandlers}
			>
				<Animated.Image
					{...this.props}
					style={[BlurImageStyle.container, {
						opacity: this.imageAnimated,
					}]}
					onLoadEnd={this.onImageLoadEnd.bind(this)}
					onLoadStart={this.onImageLoadStart.bind(this)}
				/>
			</Animated.View>
		)
	}
}
