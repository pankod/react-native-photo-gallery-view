import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
export class BlurImage extends PureComponent {
    constructor() {
        super(...arguments);
        this.imageAnimated = new Animated.Value(0);
    }
    onImageLoad() {
        Animated.timing(this.imageAnimated, {
            toValue: 1,
            duration: 500,
        }).start();
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Animated.Image, Object.assign({}, this.props, { style: { flex: 1, opacity: this.imageAnimated }, onLoad: this.onImageLoad.bind(this), blurRadius: 1, onPartialLoad: true }))));
    }
}
//# sourceMappingURL=BlurImage.js.map