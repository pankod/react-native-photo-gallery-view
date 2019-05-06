import React, { Component } from "react";
import { View, Dimensions, BackHandler } from "react-native";
import { TopBarComponent, AlbumComponent, FooterComponent, DetailComponent } from "./";
import { GalleryStyle } from "../Assets/Styles";
import Common from '../Provider';
const { width, height } = Dimensions.get('window');
export class GalleryComponent extends Component {
    constructor(props) {
        super(props);
        this.xOffset = 0;
        this.state = {
            title: `${props.mediaList.length} Photos`,
            detailTitle: null,
            showingImage: {},
            isModalOpen: false,
            showImageModal: this.showImageModal.bind(this),
            onBackRequest: this.onBackRequest.bind(this),
            onSelection: this.onSelection.bind(this),
            imageIndex: 0,
            selected: [],
            orientation: 'portrait',
            dynamicSize: {
                width: width / props.gridSize,
                height: width / props.gridSize,
            }
        };
        this.backKeyHandler = this.backKeyHandler.bind(this);
    }
    render() {
        const { style } = this.props;
        const { isModalOpen } = this.state;
        return (React.createElement(Common.Provider, { value: Object.assign({}, this.state, this.props) },
            React.createElement(View, { ref: "rootView", style: [GalleryStyle.container, style] },
                React.createElement(TopBarComponent, null),
                !isModalOpen && React.createElement(AlbumComponent, null),
                isModalOpen && React.createElement(DetailComponent, null),
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
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backKeyHandler);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backKeyHandler);
    }
    backKeyHandler() {
        this.onBackRequest();
        return true;
    }
    onBackRequest() {
        const { onBack } = this.props;
        const { isModalOpen } = this.state;
        if (onBack && !isModalOpen) {
            onBack();
        }
        if (isModalOpen) {
            this.clearModal();
        }
    }
    clearModal() {
        this.setState({
            imageIndex: 0,
            detailTitle: null,
            showingImage: null,
            isModalOpen: false
        });
    }
    onSelection(item, index) {
        const { onSelectionChanged } = this.props;
        const { selected } = this.state;
        if (onSelectionChanged) {
            onSelectionChanged(item, index);
        }
        if (selected.indexOf(item.id) === -1) {
            selected.push(item.id);
        }
        else {
            selected.splice(selected.indexOf(item.id), 1);
        }
        this.setState({
            selected: [...selected]
        });
    }
}
GalleryComponent.defaultProps = {
    gridSize: 3,
    stickyFooter: true,
    displaySelectionButtons: false
};
//# sourceMappingURL=GalleryComponent.js.map