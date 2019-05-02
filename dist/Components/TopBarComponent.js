import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { TopBarStyle } from '../Assets/Styles';
import Common from '../Provider';
export class TopBarComponent extends Component {
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(View, { style: [TopBarStyle.container, context.customTopBarStyle] },
            this.backButtonRender(),
            context.isModalOpen ?
                React.createElement(Text, null, context.detailTitle) :
                React.createElement(Text, null, context.title)))));
    }
    backButtonRender() {
        const { customTopBarBackIcon } = this.context;
        if (customTopBarBackIcon) {
            return (React.createElement(TouchableWithoutFeedback, { style: TopBarStyle.backBtnStyle, onPress: () => this.context.onBackRequest() },
                React.createElement(Image, { source: customTopBarBackIcon })));
        }
        return (React.createElement(TouchableWithoutFeedback, { style: TopBarStyle.backBtnStyle, onPress: () => this.context.onBackRequest() },
            React.createElement(Image, { source: require('../Assets/Images/back.png'), style: TopBarStyle.backBtnImageStyle })));
    }
}
TopBarComponent.contextType = Common;
//# sourceMappingURL=TopBarComponent.js.map