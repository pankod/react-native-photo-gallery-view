import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, FlatList, Animated } from 'react-native';
import { BlurImage } from './';
import { AlbumStyle } from "../Assets/Styles";
import Common from '../Provider';
export class AlbumComponent extends PureComponent {
    constructor() {
        super(...arguments);
        this.animatedY = new Animated.Value(0);
    }
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(View, { style: AlbumStyle.container },
            React.createElement(FlatList, { style: AlbumStyle.container, data: context.mediaList, numColumns: context.gridSize, renderItem: ({ item, index }) => this.renderItem(item, index), keyExtractor: (item, index) => index.toString(), extraData: [context.selected, context.dynamicSize] })))));
    }
    renderItem(item, index) {
        const { onSelection, displaySelectionButtons, showImageModal, stickyFooter, renderCustomState, dynamicSize, customThumbnailImage, thumbImageResizeMode, thumbImageResizeMethod } = this.context;
        if (displaySelectionButtons && stickyFooter) {
            return (React.createElement(TouchableOpacity, { onPress: () => onSelection(item, index), key: index, style: [
                    this.checkedCtrl(item) && AlbumStyle.checkedBorder,
                    { position: "relative", width: dynamicSize.width, height: dynamicSize.height, padding: 3 }
                ] },
                this.isChecked(item),
                customThumbnailImage ? customThumbnailImage(item, index) : (React.createElement(BlurImage, { resizeMode: thumbImageResizeMode, resizeMethod: thumbImageResizeMethod, key: index, source: { uri: item.thumb } }))));
        }
        else {
            return (React.createElement(TouchableOpacity, { onPress: () => showImageModal(item, index), key: index, style: { width: dynamicSize.width, height: dynamicSize.height, padding: 3 } },
                renderCustomState(item, index),
                customThumbnailImage ? customThumbnailImage(item, index) : (React.createElement(BlurImage, { resizeMode: thumbImageResizeMode, resizeMethod: thumbImageResizeMethod, key: index, source: { uri: item.thumb } }))));
        }
    }
    checkedCtrl(item) {
        const { selected } = this.context;
        return selected.indexOf(item.id) > -1;
    }
    isChecked(item) {
        const { customCheckedView } = this.context;
        if (this.checkedCtrl(item)) {
            if (customCheckedView) {
                return customCheckedView();
            }
            return (React.createElement(View, { style: AlbumStyle.checkedContainer },
                React.createElement(Image, { style: AlbumStyle.checkedImage, source: require("../Assets/Images/checked.png") })));
        }
        return null;
    }
}
AlbumComponent.contextType = Common;
//# sourceMappingURL=AlbumComponent.js.map