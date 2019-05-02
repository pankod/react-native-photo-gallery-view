import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { AlbumStyle } from "../Assets/Styles";
import Common from '../Provider';
const { width, height } = Dimensions.get('window');
export class AlbumComponent extends Component {
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(FlatList, { style: AlbumStyle.container, data: context.mediaList, numColumns: context.gridSize, renderItem: ({ item, index }) => this.renderItem(item, index), keyExtractor: (item, index) => index.toString() }))));
    }
    renderItem(item, index) {
        const { gridSize, onSelectionChanged } = this.context;
        return (React.createElement(TouchableOpacity, { onPress: () => onSelectionChanged(item, index), key: index, style: { width: width / gridSize, height: width / gridSize } },
            React.createElement(Image, { resizeMode: "cover", style: { flex: 1 }, key: index, source: { uri: item.thumb } })));
    }
}
AlbumComponent.contextType = Common;
//# sourceMappingURL=AlbumComponent.js.map