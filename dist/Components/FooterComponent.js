import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { FooterStyle } from "../Assets/Styles";
import Common from '../Provider';
import { Const } from '../Constants';
export class FooterComponent extends PureComponent {
    render() {
        return (React.createElement(Common.Consumer, null, (context) => [this.renderCustomButtons(), this.renderStickyFooter()]));
    }
    renderCustomButtons() {
        const { renderCustomButtons, stickyFooter, isModalOpen } = this.context;
        if (renderCustomButtons && !stickyFooter && isModalOpen) {
            return (React.createElement(View, { key: "custom", style: [FooterStyle.container, this.context.customFooterStyle] }, this.context.renderCustomButtons(this.context.showingImage)));
        }
        return null;
    }
    renderStickyFooter() {
        const { renderStickyFooter, stickyFooter, isModalOpen } = this.context;
        if (renderStickyFooter && stickyFooter && !isModalOpen) {
            return (React.createElement(View, { key: "sticky", style: [FooterStyle.container, this.context.customFooterStyle] }, this.context.renderStickyFooter(Const.HEIGHT)));
        }
        return null;
    }
}
FooterComponent.contextType = Common;
//# sourceMappingURL=FooterComponent.js.map