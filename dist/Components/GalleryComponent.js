import React, { Component } from "react";
import { View } from "react-native";
import { TopBarComponent, AlbumComponent, FooterComponent } from "./";
import { GalleryStyle } from "../Assets/Styles";
import Common from '../Provider';
export class GalleryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: `${props.mediaList.length} Photos`,
            detailTitle: null,
            showingImage: {},
            isModalOpen: false,
            showImageModal: this.showImageModal.bind(this),
            onBackRequest: this.onBackRequest.bind(this),
            imageIndex: 0
        };
    }
    render() {
        const { style } = this.props;
        return (React.createElement(Common.Provider, { value: Object.assign({}, this.state, this.props) },
            React.createElement(View, { style: [GalleryStyle.container, style] },
                React.createElement(TopBarComponent, null),
                React.createElement(AlbumComponent, null),
                React.createElement(FooterComponent, null))));
    }
    showImageModal(media, index) {
        const { mediaList } = this.props;
        this.setState({
            imageIndex: index,
            detailTitle: `${index + 1} of ${mediaList.length}`,
            showingImage: media,
            isModalOpen: true
        });
    }
    onBackRequest() {
        const { onBack } = this.props;
        const { isModalOpen } = this.state;
        if (onBack && !isModalOpen) {
            onBack();
        }
        if (isModalOpen) {
            this.setState({
                imageIndex: 0,
                detailTitle: null,
                showingImage: null,
                isModalOpen: false
            });
        }
    }
}
GalleryComponent.defaultProps = {
    gridSize: 3,
    stickyFooter: true,
    displaySelectionButtons: false
};
//# sourceMappingURL=GalleryComponent.js.map