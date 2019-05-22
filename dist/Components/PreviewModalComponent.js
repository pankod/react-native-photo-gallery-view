import React, { PureComponent } from 'react';
import { View, Modal, Animated, ImageBackground, Platform } from 'react-native';
import Common from '../Provider';
import { PreviewModalStyle } from '../Assets/Styles';
import { Animate } from '../Helpers';
export class PreviewModal extends PureComponent {
    constructor() {
        super(...arguments);
        this.scale = new Animated.Value(0);
        this.opacity = new Animated.Value(0);
        this.thumbOpacity = new Animated.Value(1);
        this.containOpacity = new Animated.Value(0);
    }
    componentWillMount() {
        Animate.parallel([
            Animate.timing(this.opacity, { toValue: 1, duration: 150 }),
            Animate.spring(this.scale, { toValue: 1, bounciness: 8 })
        ]).start();
    }
    hideThumb() {
        Animate.parallel([
            Animate.timing(this.thumbOpacity, { toValue: 0, duration: 100 }),
            Animate.timing(this.containOpacity, { toValue: 1, duration: 200 })
        ]).start();
    }
    renderAnimatedView() {
        return (React.createElement(Animated.View, { style: [PreviewModalStyle.container, {
                    transform: [{
                            scale: this.scale.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })
                        }],
                    opacity: this.opacity
                }
            ] },
            React.createElement(View, { style: PreviewModalStyle.imagePreview }, this.context.renderPreview ?
                this.context.renderPreview(this.context.imagePreview) : this.defaultView())));
    }
    defaultView() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Animated.Image, { style: [PreviewModalStyle.thumbPreview, { opacity: this.thumbOpacity }], source: { uri: this.context.imagePreview.thumbnail }, resizeMode: "contain", blurRadius: Platform.OS == 'ios' ? 10 : 5 }),
            React.createElement(Animated.Image, { style: [PreviewModalStyle.containPreview, { opacity: this.containOpacity }], onLoadEnd: () => this.hideThumb(), source: { uri: this.context.imagePreview.original }, resizeMode: "contain" })));
    }
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(Modal, { animationType: "none", visible: context.previewIsOpen, transparent: true },
            React.createElement(ImageBackground, { style: { flex: 1 }, blurRadius: Platform.OS == 'ios' ? 20 : 15, source: require("../Assets/Images/radius-bg.png"), resizeMode: "cover" }, this.renderAnimatedView())))));
    }
}
PreviewModal.contextType = Common;
//# sourceMappingURL=PreviewModalComponent.js.map