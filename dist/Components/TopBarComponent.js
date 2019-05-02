import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { TopBarStyle } from '../Assets/Styles';
import Common from '../Provider';
export class TopBarComponent extends Component {
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(View, { style: [TopBarStyle.container, context.customTopBarStyle] },
            this.backButtonRender(),
            this.titleRender()))));
    }
    titleRender() {
        const { imageIndex, mediaList, isModalOpen, title, detailTitle, customMainTitle, customDetailTitle } = this.context;
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