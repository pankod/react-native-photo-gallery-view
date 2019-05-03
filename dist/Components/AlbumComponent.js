import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, Dimensions, FlatList, Animated } from 'react-native';
import { BlurImage } from './';
import { AlbumStyle } from "../Assets/Styles";
import Common from '../Provider';
const { width, height } = Dimensions.get('window');
export class AlbumComponent extends PureComponent {
    constructor() {
        super(...arguments);
        this.animatedY = new Animated.Value(0);
    }
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(View, { style: AlbumStyle.container },
            React.createElement(FlatList, { style: AlbumStyle.container, data: context.mediaList, numColumns: context.gridSize, renderItem: ({ item, index }) => this.renderItem(item, index), keyExtractor: (item, index) => index.toString(), extraData: context.selected })))));
    }
    renderItem(item, index) {
        const { gridSize, onSelection, displaySelectionButtons, showImageModal, stickyFooter, renderCustomState } = this.context;
        if (displaySelectionButtons && stickyFooter) {
            return (React.createElement(TouchableOpacity, { onPress: () => onSelection(item, index), key: index, style: [
                    this.checkedCtrl(item) && AlbumStyle.checkedBorder,
                    { position: "relative", width: width / gridSize, height: width / gridSize, padding: 3 }
                ] },
                this.isChecked(item),
                React.createElement(BlurImage, { resizeMode: "cover", style: { flex: 1 }, key: index, source: { uri: item.thumb } })));
        }
        else {
            return (React.createElement(TouchableOpacity, { onPress: () => showImageModal(item, index), key: index, style: { width: width / gridSize, height: width / gridSize, padding: 3 } },
                renderCustomState(item, index),
                React.createElement(BlurImage, { resizeMode: "cover", style: { flex: 1 }, key: index, source: { uri: item.thumb } })));
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