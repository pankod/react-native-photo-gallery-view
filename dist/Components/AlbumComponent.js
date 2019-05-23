import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, FlatList, Animated } from 'react-native';
import { AlbumStyle } from "../Assets/Styles";
import Common from '../Provider';
export class AlbumComponent extends PureComponent {
    constructor() {
        super(...arguments);
        this.animatedY = new Animated.Value(0);
    }
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(View, { style: AlbumStyle.container },
            React.createElement(FlatList, { style: AlbumStyle.container, data: context.items, numColumns: context.columns, renderItem: ({ item, index }) => this.renderItem(item, index), keyExtractor: (item, index) => index.toString(), extraData: [context.selected, context.dynamicSize] })))));
    }
    renderItem(item, index) {
        const { onSelection, enableItemSelection, showImageModal, renderThumbnailOverlay, dynamicSize, renderThumbnailImage, showPreview } = this.context;
        if (enableItemSelection) {
            return (React.createElement(TouchableOpacity, { onPress: () => onSelection(item, index), key: "onSelection", onLongPress: () => showPreview(item, index), style: [this.checkedCtrl(item) && AlbumStyle.checkedBorder, { position: "relative", width: dynamicSize.width, height: dynamicSize.height, padding: 3 }] },
                this.isChecked(item),
                renderThumbnailImage ? renderThumbnailImage(item, index) : this.renderImageView(item, index)));
        }
        return (React.createElement(TouchableOpacity, { onPress: () => showImageModal(item, index), key: "showImageModal", onLongPress: () => showPreview(item, index), style: { width: dynamicSize.width, height: dynamicSize.height, padding: 3 } },
            renderThumbnailOverlay && renderThumbnailOverlay(item, index),
            renderThumbnailImage ? renderThumbnailImage(item, index) : this.renderImageView(item, index)));
    }
    renderImageView(item, index) {
        const { thumbImageResizeMode, thumbImageResizeMethod } = this.context;
        return (React.createElement(Image, { style: { flex: 1 }, resizeMode: thumbImageResizeMode, resizeMethod: thumbImageResizeMethod, key: index, source: { uri: item.thumbnail } }));
    }
    checkedCtrl(item) {
        const { selected } = this.context;
        return selected.indexOf(item.id) > -1;
    }
    isChecked(item) {
        const { renderCheckedIcon } = this.context;
        if (this.checkedCtrl(item)) {
            if (renderCheckedIcon) {
                return renderCheckedIcon();
            }
            return (React.createElement(View, { style: AlbumStyle.checkedContainer },
                React.createElement(Image, { style: AlbumStyle.checkedImage, source: require("../Assets/Images/checked.png") })));
        }
        return null;
    }
}
AlbumComponent.contextType = Common;
//# sourceMappingURL=AlbumComponent.js.map