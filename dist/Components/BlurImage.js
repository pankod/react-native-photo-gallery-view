import React, { PureComponent } from 'react';
import { Animated, ActivityIndicator } from 'react-native';
import { BlurImageStyle } from '../Assets/Styles';
import Common from '../Provider';
export class BlurImage extends PureComponent {
    constructor(props) {
        super(props);
        this.imageAnimated = new Animated.Value(0);
        this.state = {
            loading: true
        };
    }
    onImageLoad() {
        this.setState({
            loading: false
        }, () => {
            Animated.timing(this.imageAnimated, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();
        });
    }
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(React.Fragment, null,
            this.state.loading && React.createElement(ActivityIndicator, { style: BlurImageStyle.center }),
            React.createElement(Animated.Image, Object.assign({}, this.props, { style: [BlurImageStyle.image, { opacity: this.imageAnimated }], onLoad: this.onImageLoad.bind(this), blurRadius: 1 }))))));
    }
}
BlurImage.contextType = Common;
//# sourceMappingURL=BlurImage.js.map