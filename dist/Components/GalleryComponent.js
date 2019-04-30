import React, { Component } from "react";
import { View } from "react-native";
import { TopBarComponent, AlbumComponent } from "./";
import { GalleryStyle } from "../Assets/Styles";
export class GalleryComponent extends Component {
    render() {
        const { customFooterStyle, customTopBarStyle } = this.props;
        return (React.createElement(View, { style: GalleryStyle.container },
            React.createElement(TopBarComponent, { customTopBarStyle: Object.assign({}, customTopBarStyle) }),
            React.createElement(AlbumComponent, { customFooterStyle: Object.assign({}, customFooterStyle) })));
    }
}
//# sourceMappingURL=GalleryComponent.js.map