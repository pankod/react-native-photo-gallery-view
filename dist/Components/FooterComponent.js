import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { FooterStyle } from "../Assets/Styles";
import Common from '../Provider';
import { Const } from '../Constants';
export class FooterComponent extends PureComponent {
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(View, { style: [FooterStyle.container, context.customFooterStyle] }, context.renderStickyFooter && this.renderStickyFooter()))));
    }
    renderStickyFooter() {
        return (this.context.renderStickyFooter(Const.HEIGHT));
    }
}
FooterComponent.contextType = Common;
//# sourceMappingURL=FooterComponent.js.map