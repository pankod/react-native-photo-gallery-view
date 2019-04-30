// Global Imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Local Imports
import { TopBarStyle } from '@Styles';
import { ITopBarProps } from "@Interfaces";

export class TopBarComponent extends Component<ITopBarProps, {}> {
	public render(): JSX.Element {
		const { customTopBarStyle } = this.props;
		return (
			<View style={[TopBarStyle.container, customTopBarStyle]}>
				<Text> TopBarComponent </Text>
			</View>
		)
	}
}
