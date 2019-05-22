import React, { PureComponent } from 'react';
import Common from '../Provider';
import { BlurImage } from './';
export class DetailComponent extends PureComponent {
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(BlurImage, { style: { margin: 5 }, resizeMethod: context.detailImageResizeMethod, resizeMode: context.detailImageResizeMode, source: { uri: context.showingImage && context.showingImage.original }, thumbnail: { uri: context.showingImage && context.showingImage.thumbnail } }))));
    }
}
DetailComponent.contextType = Common;
//# sourceMappingURL=DetailComponent.js.map