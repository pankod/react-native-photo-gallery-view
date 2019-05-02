import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, FlatList, Modal, SafeAreaView } from 'react-native';
import { AlbumStyle } from "../Assets/Styles";
import Common from '../Provider';
import { TopBarComponent, FooterComponent } from './';
const { width, height } = Dimensions.get('window');
export class AlbumComponent extends PureComponent {
    render() {
        return (React.createElement(Common.Consumer, null, (context) => (React.createElement(React.Fragment, null,
            React.createElement(FlatList, { style: AlbumStyle.container, data: context.mediaList, numColumns: context.gridSize, renderItem: ({ item, index }) => this.renderItem(item, index), keyExtractor: (item, index) => index.toString() }),
            context.isModalOpen && this.renderModal()))));
    }
    renderModal() {
        const { isModalOpen, showingImage } = this.context;
        return (React.createElement(Modal, { supportedOrientations: ['portrait', 'landscape'], transparent: false, visible: isModalOpen, animationType: "slide" },
            React.createElement(SafeAreaView, { style: { flex: 1 } },
                React.createElement(TopBarComponent, null),
                React.createElement(View, { style: { flex: 1, flexDirection: "column" } },
                    showingImage.caption.length > 0 && React.createElement(Text, { numberOfLines: 2, style: AlbumStyle.captionText }, showingImage.caption),
                    React.createElement(Image, { resizeMethod: "resize", resizeMode: "contain", style: { flex: 1 }, source: { uri: showingImage.photo } })),
                React.createElement(FooterComponent, null))));
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