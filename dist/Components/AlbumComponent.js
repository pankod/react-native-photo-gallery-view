import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, Dimensions, FlatList, Animated } from 'react-native';
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
            React.createElement(FlatList, { style: AlbumStyle.container, data: context.mediaList, numColumns: context.gridSize, renderItem: ({ item, index }) => this.renderItem(item, index), keyExtractor: (item, index) => index.toString() })))));
    }
    renderItem(item, index) {
        const { gridSize, onSelectionChanged, displaySelectionButtons, showImageModal, stickyFooter, renderCustomState } = this.context;
        if (displaySelectionButtons && stickyFooter) {
            return (React.createElement(TouchableOpacity, { onPress: () => onSelectionChanged(item, index), key: index, style: { width: width / gridSize, height: width / gridSize, padding: 3 } },
                renderCustomState(item, index),
                React.createElement(Image, { resizeMode: "cover", style: { flex: 1 }, key: index, source: { uri: item.thumb } })));
        }
        else {
            return (React.createElement(TouchableOpacity, { onPress: () => showImageModal(item, index), key: index, style: { width: width / gridSize, height: width / gridSize, padding: 3 } },
                renderCustomState(item, index),
                React.createElement(Image, { resizeMode: "cover", style: { flex: 1 }, key: index, source: { uri: item.thumb } })));
        }
    }
}
AlbumComponent.contextType = Common;
//# sourceMappingURL=AlbumComponent.js.map