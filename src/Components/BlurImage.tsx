// Global Imports
import React, { PureComponent } from 'react'
import { Animated, ActivityIndicator, PanResponder, Dimensions, View, InteractionManager } from 'react-native'

// Local Imports
import { IBlurImageProps, IBlurImageState, IGalleryProps, IGalleryState } from '@Interfaces';
import { BlurImageStyle } from '@Styles';
import Common from '@Provider';

export class BlurImage extends PureComponent<IBlurImageProps, IBlurImageState> {

	public imageAnimated = new Animated.Value(0);
	public translateX = new Animated.Value(0);
	public panResponder;
	private locationX: number = 0;
	private direction: string = "left";

	static contextType = Common;

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}

		this.panResponder = PanResponder.create({
			onMoveShouldSetPanResponderCapture: () => true,
			onPanResponderMove: Animated.event([null, { dx: this.translateX }]),
			onPanResponderRelease: (e, { vx, dx }) => {
				let { imageIndex, mediaList } = this.context;
				const screenWidth = Dimensions.get("window").width;

				if (dx === 0 && vx === 0) {
					return
				}
				if (dx > 0) {
					if (imageIndex !== 0) {
						console.log("right")
						this.direction = "right";
						if (vx <= 0.8 || dx <= 0.8 * screenWidth) {
							Animated.timing(this.translateX, {
								toValue: dx > 0 ? screenWidth : -screenWidth,
								duration: 250,
								useNativeDriver: true
							}).start(() => {
								this.context.changeImage(--imageIndex)
								if (this.context.customImageComponent) {
									setTimeout(() => {
										this.translateX.setValue(0);
									}, 1000);
								}
							});
						} else {
							this.getDefault();
						}
					} else {
						this.getDefault();
					}
				} else {
					if (imageIndex >= 0 && imageIndex < mediaList.length - 1) {
						console.log("left")
						this.direction = "left";
						if (vx >= 0.8 || dx >= 0.8 * -screenWidth) {
							Animated.timing(this.translateX, {
								toValue: dx > 0 ? screenWidth : -screenWidth,
								duration: 250,
								useNativeDriver: true
							}).start(() => {
								this.context.changeImage(++imageIndex)
								if (this.context.customImageComponent) {
									setTimeout(() => {
										this.translateX.setValue(0);
									}, 1000);
								}
							});
						} else {
							this.getDefault();
						}
					} else {
						this.getDefault();
					}
				}
			},
			onPanResponderEnd: (e, { vx, dx }) => {
				this.locationX = e.nativeEvent.locationX;
			},
			onPanResponderTerminate: (e, { vx, dx }) => {

			}
		});
	}

	private getDefault(): void {
		Animated.spring(this.translateX, {
			toValue: 0,
			bounciness: 5,
			useNativeDriver: true
		}).start();
	}

	private onImageLoadEnd(): void {
		this.setState({
			loading: false
		}, () => {
			if (this.direction === "left") {
				this.translateX.setValue(this.locationX);
			} else {
				this.translateX.setValue(-this.locationX);
			}
			Animated.parallel([
				Animated.timing(this.translateX, {
					toValue: 0,
					duration: 100,
					useNativeDriver: true
				}),
				Animated.timing(this.imageAnimated, {
					toValue: 1,
					duration: 250,
					useNativeDriver: true
				})
			]).start();
		});

	}

	private onImageLoadStart(): void {
		this.setState({ loading: true }, () => {
			Animated.timing(this.imageAnimated, {
				toValue: 0,
				duration: 250,
				useNativeDriver: true
			}).start();
		});
	}

	private customImage(): JSX.Element {
		return this.context.customImageComponent(this.context.showingImage, this.context.imageIndex)
	}

	public render(): JSX.Element {

		return (
			<Common.Consumer>
				{(context: IGalleryProps & IGalleryState) => (
					<React.Fragment>
						{this.state.loading && <ActivityIndicator style={BlurImageStyle.center} />}
						<Animated.View
							style={[
								BlurImageStyle.container,
								{
									transform: [{ translateX: this.translateX }]
								}
							]}
							{...this.panResponder.panHandlers}
						>
							{
								context.customImageComponent ? this.customImage() : (
									<Animated.Image
										{...this.props}
										style={[BlurImageStyle.container, {
											borderRadius: 10,
											opacity: this.imageAnimated
										}]}
										onLoadEnd={this.onImageLoadEnd.bind(this)}
										onLoadStart={this.onImageLoadStart.bind(this)}
									/>
								)
							}

						</Animated.View>
					</React.Fragment>
				)}
			</Common.Consumer>
		)
	}
}
