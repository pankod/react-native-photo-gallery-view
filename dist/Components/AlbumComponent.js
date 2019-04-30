import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FooterComponent } from "./";
import { AlbumStyle } from "../Assets/Styles";
export class AlbumComponent extends Component {
    render() {
        const { customFooterStyle } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement(View, { style: AlbumStyle.container },
                React.createElement(Text, null, "Main")),
            React.createElement(FooterComponent, { customFooterStyle: Object.assign({}, customFooterStyle) })));
    }
}
//# sourceMappingURL=AlbumComponent.js.map