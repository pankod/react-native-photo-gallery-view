import React, { PureComponent } from 'react';
import { View, Modal, Image, Animated, ImageBackground, Platform } from 'react-native';
import Common from '../Provider';
import { PreviewModalStyle } from '../Assets/Styles';
export class PreviewModal extends PureComponent {
    constructor() {
        super(...arguments);
        this.scale = new Animated.Value(0);
        this.opacity = new Animated.Value(0);
    }
    componentDidMount() {
        Animated.parallel([
            Animated.spring(this.scale, {
                toValue: 1,
                bounciness: 10,
                useNativeDriver: true
            }),
            Animated.timing(this.opacity, {
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
                }, blurRadius: Platform.OS == 'ios' ? 10 : 5, source: require("../Assets/Images/radius-bg.png"), resizeMode: "cover" },
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
                        (React.createElement(Image, { style: { width: "100%", flex: 1 }, source: { uri: context.imagePreview.photo }, resizeMode: "contain" })))))))));
    }
}
PreviewModal.contextType = Common;
//# sourceMappingURL=PreviewModalComponent.js.map