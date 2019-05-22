import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { FooterStyle } from "../Assets/Styles";
import Common from '../Provider';
import { Const } from '../Constants';
export class FooterComponent extends PureComponent {
    render() {
        return (React.createElement(Common.Consumer, null, (context) => [this.renderDetailFooter(), this.renderGalleryFooter()]));
    }
    renderDetailFooter() {
        const { renderDetailFooter, isModalOpen, enableItemSelection } = this.context;
        if (renderDetailFooter && !enableItemSelection && isModalOpen) {
            return (React.createElement(View, { key: "custom", style: [FooterStyle.container, this.context.footerStyle] }, this.context.renderDetailFooter(this.context.showingImage, this.context.onCloseRequest)));
        }
        return null;
    }
    renderGalleryFooter() {
        const { renderGalleryFooter, isModalOpen, enableItemSelection } = this.context;
        if (renderGalleryFooter && enableItemSelection && !isModalOpen) {
            return (React.createElement(View, { key: "sticky", style: [FooterStyle.container, this.context.footerStyle] }, this.context.renderGalleryFooter(Const.HEIGHT, this.context.onCloseRequest)));
        }
        return null;
    }
}
FooterComponent.contextType = Common;
//# sourceMappingURL=FooterComponent.js.map