import React, { Component } from 'react';
import { Animated, View, TouchableWithoutFeedback, Image, Text } from 'react-native';
import { TopBarStyle } from '../Assets/Styles';
import Common from '../Provider';
import { Const } from '../Constants';
export class TopBarComponent extends Component {
    constructor() {
        super(...arguments);
        this.animatedY = new Animated.Value(Const.ANIMATEDY);
    }
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(View, { style: [TopBarStyle.container, context.customTopBarStyle] },
            this.backButtonRender(),
            React.createElement(Animated.View, { style: {
                    transform: [{ translateX: this.animatedY }]
                } }, this.titleRender())))));
    }
    componentDidMount() {
        Animated.timing(this.animatedY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }
    titleRender() {
        const { imageIndex, mediaList, isModalOpen, title, detailTitle, customMainTitle, customDetailTitle, selected, customSelectedTitle } = this.context;
        if (selected && selected.length > 0) {
            return customSelectedTitle ? customSelectedTitle(selected.length) : React.createElement(Text, null,
                selected.length,
                " selected");
        }
        return isModalOpen ?
            customDetailTitle ? customDetailTitle(mediaList.length, imageIndex + 1) : React.createElement(Text, null, detailTitle) :
            customMainTitle ? customMainTitle(mediaList.length) : React.createElement(Text, null, title);
    }
    backButtonRender() {
        const { customTopBarBackButton } = this.context;
        if (customTopBarBackButton) {
            return customTopBarBackButton(this.context.onBackRequest);
        }
        return (React.createElement(TouchableWithoutFeedback, { style: TopBarStyle.backBtnStyle, onPress: () => this.context.onBackRequest() },
            React.createElement(Image, { source: require('../Assets/Images/back.png'), style: TopBarStyle.backBtnImageStyle })));
    }
}
TopBarComponent.contextType = Common;
//# sourceMappingURL=TopBarComponent.js.map