import React, { Component } from "react";
import { View, Dimensions, BackHandler } from "react-native";
import { TopBarComponent, AlbumComponent, FooterComponent, DetailComponent, PreviewModal } from "./";
import { GalleryStyle } from "../Assets/Styles";
import Common from '../Provider';
const { width, height } = Dimensions.get('window');
export class GalleryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: `${props.items.length} Photos`,
            detailTitle: null,
            showingImage: {},
            isModalOpen: false,
            showImageModal: this.showImageModal.bind(this),
            showPreview: this.showPreview.bind(this),
            hidePreview: this.hidePreview.bind(this),
            onCloseRequest: this.onCloseRequest.bind(this),
            onSelection: this.onSelection.bind(this),
            changeImage: this.changeImage.bind(this),
            imageIndex: 0,
            selected: [],
            orientation: 'portrait',
            dynamicSize: {
                width: width / props.columns,
                height: width / props.columns,
            },
            previewIsOpen: false,
            imagePreview: {}
        };
        this.backKeyHandler = this.backKeyHandler.bind(this);
    }
    render() {
        const { style, } = this.props;
        const { isModalOpen, previewIsOpen } = this.state;
        return (React.createElement(Common.Provider, { value: Object.assign({}, this.state, this.props) },
            React.createElement(View, { onMoveShouldSetResponderCapture: () => previewIsOpen, onTouchEndCapture: () => previewIsOpen && this.hidePreview(), ref: "rootView", style: [GalleryStyle.container, style] },
                React.createElement(TopBarComponent, null),
                !isModalOpen && React.createElement(AlbumComponent, null),
                isModalOpen && React.createElement(DetailComponent, null),
                React.createElement(FooterComponent, null),
                previewIsOpen && React.createElement(PreviewModal, null))));
    }
    showImageModal(media, index) {
        const { items } = this.props;
        this.setState({
            imageIndex: index,
            detailTitle: `${index + 1} of ${items.length}`,
            showingImage: media,
            isModalOpen: true
        });
    }
    changeImage(index) {
        const { items } = this.props;
        this.setState({
            imageIndex: index,
            detailTitle: `${index + 1} of ${items.length}`,
            showingImage: items[index],
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.enableItemSelection !== this.props.enableItemSelection) {
            this.setState({
                selected: []
            });
        }
    }
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backKeyHandler);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backKeyHandler);
    }
    backKeyHandler() {
        this.onCloseRequest();
        return true;
    }
    onCloseRequest() {
        const { onClose } = this.props;
        const { isModalOpen } = this.state;
        if (onClose && !isModalOpen) {
            onClose();
        }
        if (isModalOpen) {
            this.clearModal();
        }
    }
    showPreview(item, index) {
        this.setState({
            imagePreview: item,
            previewIsOpen: true
        });
    }
    hidePreview() {
        this.setState({
            previewIsOpen: false,
            imagePreview: {}
        });
    }
    clearModal() {
        this.setState({
            imageIndex: 0,
            detailTitle: null,
            showingImage: null,
            isModalOpen: false,
            selected: []
        });
    }
    onSelection(item, index) {
        const { onSelectItem } = this.props;
        const { selected } = this.state;
        if (onSelectItem) {
            item.isSelected = true;
            onSelectItem(item, index);
        }
        if (selected.indexOf(item.id) === -1) {
            item.isSelected = true;
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
    columns: 3,
    enableItemSelection: false,
    detailImageResizeMode: "contain",
    detailImageResizeMethod: "auto",
    thumbImageResizeMode: "contain",
    thumbImageResizeMethod: "auto"
};
//# sourceMappingURL=GalleryComponent.js.map