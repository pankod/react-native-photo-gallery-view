import React, { PureComponent } from 'react';
import { Animated, ActivityIndicator, PanResponder, Dimensions } from 'react-native';
import { BlurImageStyle } from '../Assets/Styles';
import Common from '../Provider';
import { Animate } from '../Helpers';
import { Const } from '../Constants';
export class BlurImage extends PureComponent {
    constructor() {
        super(...arguments);
        this.imageAnimated = new Animated.Value(0);
        this.translateX = new Animated.Value(0);
        this.translateY = new Animated.Value(0);
        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderMove: Animated.event([null, { dx: this.translateX }]),
            onPanResponderRelease: this.onPanResponderRelease.bind(this),
            onPanResponderEnd: (e, { vx, dx }) => {
                this.locationX = e.nativeEvent.locationX;
                this.locationY = e.nativeEvent.locationY;
            }
        });
        this.locationY = 0;
        this.locationX = 0;
        this.direction = "left";
        this.state = {
            loading: true
        };
    }
    onPanResponderRelease(e, { vx, dx, vy, dy }) {
        let { imageIndex, items } = this.context;
        const screenWidth = Dimensions.get("window").width;
        const defaultValue = {
            toValue: dx > 0 ? screenWidth : -screenWidth,
            duration: 250
        };
        if (dx === 0 && vx === 0) {
            return;
        }
        else if (dx > 0) {
            if (imageIndex !== 0) {
                this.direction = "right";
                if (vx <= 0.9 || dx <= 0.9 * screenWidth) {
                    this.getImageByIndex(defaultValue, --imageIndex);
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
            if (imageIndex >= 0 && imageIndex < items.length - 1) {
                this.direction = "left";
                if (vx >= 0.9 || dx >= 0.9 * -screenWidth) {
                    this.getImageByIndex(defaultValue, ++imageIndex);
                }
                else {
                    this.getDefault();
                }
            }
            else {
                this.getDefault();
            }
        }
    }
    getDefault() {
        Animate.spring(this.translateX, {
            toValue: 0,
            bounciness: 5,
        }).start();
    }
    getImageByIndex(defaultValue, imageIndex) {
        Animate.timing(this.translateX, defaultValue).start(() => {
            this.context.changeImage(imageIndex);
            if (this.context.renderDetailImage) {
                setTimeout(() => {
                    this.translateX.setValue(0);
                }, 1000);
            }
        });
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
            Animate.parallel([
                Animate.timing(this.translateX, Const.TIMING_OFF),
                Animate.timing(this.imageAnimated, Const.TIMING_ON)
            ]).start();
        });
    }
    onImageLoadStart() {
        this.setState({ loading: true }, () => {
            Animate.timing(this.imageAnimated, Const.TIMING_OFF).start();
        });
    }
    customImage() {
        return this.context.renderDetailImage(this.context.showingImage, this.context.imageIndex);
    }
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(React.Fragment, null,
            this.state.loading && React.createElement(ActivityIndicator, { style: BlurImageStyle.center }),
            context.renderDetailImage ? this.customImage() : this.defaultRender()))));
    }
    defaultRender() {
        return (React.createElement(Animated.View, Object.assign({ style: [
                BlurImageStyle.container,
                {
                    transform: [{ translateX: this.translateX }]
                }
            ] }, this.panResponder.panHandlers),
            React.createElement(Animated.Image, Object.assign({ progressiveRenderingEnabled: true }, this.props, { style: [BlurImageStyle.container, {
                        opacity: this.imageAnimated,
                    }], onLoadEnd: this.onImageLoadEnd.bind(this), onLoadStart: this.onImageLoadStart.bind(this) }))));
    }
}
BlurImage.contextType = Common;
//# sourceMappingURL=BlurImage.js.map