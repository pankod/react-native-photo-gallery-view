import React, { Component } from 'react';
import { Animated, View, TouchableWithoutFeedback, Image, Text } from 'react-native';
import { TopBarStyle } from '../Assets/Styles';
import Common from '../Provider';
import { Const } from '../Constants';
import { Animate } from '../Helpers';
export class TopBarComponent extends Component {
    constructor() {
        super(...arguments);
        this.animatedY = new Animated.Value(Const.ANIMATEDY);
    }
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(View, { style: [TopBarStyle.container, context.topBarStyle] },
            this.backButtonRender(),
            React.createElement(Animated.View, { style: { transform: [{ translateX: this.animatedY }] } }, this.titleRender())))));
    }
    componentDidMount() {
        Animate.timing(this.animatedY, {
            toValue: 0,
            duration: 500
        }).start();
    }
    titleRender() {
        const { selected, customSelectedTitle } = this.context;
        if (selected && selected.length > 0) {
            return customSelectedTitle ? customSelectedTitle(selected.length) : React.createElement(Text, null,
                selected.length,
                " selected");
        }
        return this.getTitle();
    }
    getTitle() {
        const { imageIndex, items, isModalOpen, title, detailTitle, renderGalleryTitleBar, renderDetailTitleBar } = this.context;
        if (isModalOpen) {
            return renderDetailTitleBar ? renderDetailTitleBar(items.length, imageIndex + 1) : React.createElement(Text, null, detailTitle);
        }
        return renderGalleryTitleBar ? renderGalleryTitleBar(items.length) : React.createElement(Text, null, title);
    }
    backButtonRender() {
        const { renderBackButton } = this.context;
        if (renderBackButton) {
            return renderBackButton(this.context.onCloseRequest);
        }
        return (React.createElement(TouchableWithoutFeedback, { style: TopBarStyle.backBtnStyle, onPress: () => this.context.onCloseRequest() },
            React.createElement(Image, { source: require('../Assets/Images/back.png'), style: TopBarStyle.backBtnImageStyle })));
    }
}
TopBarComponent.contextType = Common;
//# sourceMappingURL=TopBarComponent.js.map