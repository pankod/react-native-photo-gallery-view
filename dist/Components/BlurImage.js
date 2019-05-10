import React, { PureComponent } from 'react';
import { Animated, ActivityIndicator, PanResponder, Dimensions } from 'react-native';
import { BlurImageStyle } from '../Assets/Styles';
import Common from '../Provider';
export class BlurImage extends PureComponent {
    constructor(props) {
        super(props);
        this.imageAnimated = new Animated.Value(0);
        this.translateX = new Animated.Value(0);
        this.translateY = new Animated.Value(0);
        this.locationY = 0;
        this.locationX = 0;
        this.direction = "left";
        this.state = {
            loading: true
        };
        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderMove: Animated.event([null, { dx: this.translateX }]),
            onPanResponderRelease: (e, { vx, dx, vy, dy }) => {
                let { imageIndex, mediaList } = this.context;
                const screenWidth = Dimensions.get("window").width;
                const screenHeight = Dimensions.get("window").height;
                if (dx === 0 && vx === 0) {
                    return;
                }
                else if (dy > 0) {
                    console.log("down");
                    this.direction = "down";
                }
                else if (dy < 0) {
                    console.log("top");
                    this.direction = "top";
                }
                else if (dx > 0) {
                    if (imageIndex !== 0) {
                        console.log("right");
                        this.direction = "right";
                        if (vx <= 0.8 || dx <= 0.8 * screenWidth) {
                            Animated.timing(this.translateX, {
                                toValue: dx > 0 ? screenWidth : -screenWidth,
                                duration: 250,
                                useNativeDriver: true
                            }).start(() => {
                                this.context.changeImage(--imageIndex);
                                if (this.context.customImageComponent) {
                                    setTimeout(() => {
                                        this.translateX.setValue(0);
                                    }, 1000);
                                }
                            });
                        }
                        else {
                            this.getDefault();
                        }
                    }
                    else {
                        this.getDefault();
                    }
                }
                else {
                    if (imageIndex >= 0 && imageIndex < mediaList.length - 1) {
                        console.log("left");
                        this.direction = "left";
                        if (vx >= 0.8 || dx >= 0.8 * -screenWidth) {
                            Animated.timing(this.translateX, {
                                toValue: dx > 0 ? screenWidth : -screenWidth,
                                duration: 250,
                                useNativeDriver: true
                            }).start(() => {
                                this.context.changeImage(++imageIndex);
                                if (this.context.customImageComponent) {
                                    setTimeout(() => {
                                        this.translateX.setValue(0);
                                    }, 1000);
                                }
                            });
                        }
                        else {
                            this.getDefault();
                        }
                    }
                    else {
                        this.getDefault();
                    }
                }
            },
            onPanResponderEnd: (e, { vx, dx }) => {
                this.locationX = e.nativeEvent.locationX;
                this.locationY = e.nativeEvent.locationY;
            },
            onPanResponderTerminate: (e, { vx, dx }) => {
            }
        });
    }
    getDefault() {
        Animated.spring(this.translateX, {
            toValue: 0,
            bounciness: 5,
            useNativeDriver: true
        }).start();
    }
    onImageLoadEnd() {
        this.setState({
            loading: false
        }, () => {
            if (this.direction === "left") {
                this.translateX.setValue(this.locationX);
            }
            else {
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
    onImageLoadStart() {
        this.setState({ loading: true }, () => {
            Animated.timing(this.imageAnimated, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true
            }).start();
        });
    }
    customImage() {
        return this.context.customImageComponent(this.context.showingImage, this.context.imageIndex);
    }
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(React.Fragment, null,
            this.state.loading && React.createElement(ActivityIndicator, { style: BlurImageStyle.center }),
            React.createElement(Animated.View, Object.assign({ style: [
                    BlurImageStyle.container,
                    {
                        transform: [{ translateX: this.translateX }]
                    }
                ] }, this.panResponder.panHandlers), context.customImageComponent ? this.customImage() : (React.createElement(Animated.Image, Object.assign({}, this.props, { style: [BlurImageStyle.container, {
                        opacity: this.imageAnimated,
                    }], onLoadEnd: this.onImageLoadEnd.bind(this), onLoadStart: this.onImageLoadStart.bind(this) }))))))));
    }
}
BlurImage.contextType = Common;
//# sourceMappingURL=BlurImage.js.map