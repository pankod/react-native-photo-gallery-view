import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { BlurImageStyle } from '../Assets/Styles';
export class BlurImage extends PureComponent {
    constructor() {
        super(...arguments);
        this.imageAnimated = new Animated.Value(0);
    }
    onImageLoad() {
        Animated.timing(this.imageAnimated, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Animated.Image, Object.assign({}, this.props, { style: [BlurImageStyle.image, { opacity: this.imageAnimated }], onLoad: this.onImageLoad.bind(this), blurRadius: 1 }))));
    }
}
//# sourceMappingURL=BlurImage.js.map