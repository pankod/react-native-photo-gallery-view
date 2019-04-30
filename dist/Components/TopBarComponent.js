import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TopBarStyle } from '../Assets/Styles';
export class TopBarComponent extends Component {
    render() {
        const { customTopBarStyle } = this.props;
        return (React.createElement(View, { style: [TopBarStyle.container, customTopBarStyle] },
            React.createElement(Text, null, " TopBarComponent ")));
    }
}
//# sourceMappingURL=TopBarComponent.js.map