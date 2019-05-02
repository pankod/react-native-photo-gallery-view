import React, { Component } from "react";
import { View } from "react-native";
import { TopBarComponent, AlbumComponent, FooterComponent } from "./";
import { GalleryStyle } from "../Assets/Styles";
import Common from '../Provider';
export class GalleryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: `${props.mediaList.length} Photos`
        };
    }
    render() {
        const { style, stickyFooter } = this.props;
        return (React.createElement(Common.Provider, { value: Object.assign({}, this.state, this.props) },
            React.createElement(View, { style: [GalleryStyle.container, style] },
                React.createElement(TopBarComponent, null),
                React.createElement(AlbumComponent, null),
                stickyFooter &&
                    React.createElement(FooterComponent, null))));
    }
}
GalleryComponent.defaultProps = {
    stickyFooter: true,
    gridSize: 3,
};
//# sourceMappingURL=GalleryComponent.js.map