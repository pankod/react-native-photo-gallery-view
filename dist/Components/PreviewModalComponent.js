import React, { PureComponent } from 'react';
import { View, Modal, Animated, ImageBackground, Platform } from 'react-native';
import Common from '../Provider';
import { PreviewModalStyle } from '../Assets/Styles';
export class PreviewModal extends PureComponent {
    constructor() {
        super(...arguments);
        this.scale = new Animated.Value(0);
        this.opacity = new Animated.Value(0);
        this.thumbOpacity = new Animated.Value(1);
        this.containOpacity = new Animated.Value(0);
    }
    componentWillMount() {
        Animated.parallel([
            Animated.spring(this.scale, {
                toValue: 1,
                bounciness: 8,
                useNativeDriver: true
            }),
            Animated.timing(this.opacity, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true
            })
        ]).start();
    }
    hideThumb() {
        Animated.parallel([
            Animated.timing(this.thumbOpacity, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(this.containOpacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            })
        ]).start();
    }
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(Modal, { animationType: "none", visible: context.previewIsOpen, transparent: true },
            React.createElement(ImageBackground, { style: {
                    flex: 1,
                }, blurRadius: Platform.OS == 'ios' ? 20 : 15, source: require("../Assets/Images/radius-bg.png"), resizeMode: "cover" },
                React.createElement(Animated.View, { style: [
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
                    ] },
                    React.createElement(View, { style: PreviewModalStyle.imagePreview }, context.customPreviewComponent ?
                        context.customPreviewComponent(context.imagePreview) :
                        (React.createElement(React.Fragment, null,
                            React.createElement(Animated.Image, { style: [
                                    PreviewModalStyle.thumbPreview,
                                    {
                                        opacity: this.thumbOpacity
                                    }
                                ], source: { uri: context.imagePreview.thumb }, resizeMode: "contain", blurRadius: Platform.OS == 'ios' ? 10 : 5 }),
                            React.createElement(Animated.Image, { style: [
                                    PreviewModalStyle.containPreview,
                                    {
                                        opacity: this.containOpacity
                                    }
                                ], onLoadEnd: () => this.hideThumb(), source: { uri: context.imagePreview.photo }, resizeMode: "contain" }))))))))));
    }
}
PreviewModal.contextType = Common;
//# sourceMappingURL=PreviewModalComponent.js.map