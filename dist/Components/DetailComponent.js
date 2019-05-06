import React, { PureComponent } from 'react';
import Common from '../Provider';
import { BlurImage } from './';
export class DetailComponent extends PureComponent {
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(BlurImage, { style: { margin: 5 }, resizeMethod: "resize", resizeMode: "contain", source: { uri: context.showingImage && context.showingImage.photo }, thumbnail: { uri: context.showingImage && context.showingImage.thumb } }))));
    }
}
DetailComponent.contextType = Common;
//# sourceMappingURL=DetailComponent.js.map