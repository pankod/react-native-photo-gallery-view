import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FooterStyle } from "../Assets/Styles";
export class FooterComponent extends Component {
    render() {
        const { customFooterStyle } = this.props;
        return (React.createElement(View, { style: [FooterStyle.container, customFooterStyle] },
            React.createElement(Text, null, " Footer Component ")));
    }
}
//# sourceMappingURL=FooterComponent.js.map