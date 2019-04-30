// Global Imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Local Imports
import { FooterStyle } from "@Styles";
import { IFooterProps } from "@Interfaces";

export class FooterComponent extends Component<IFooterProps, {}> {
	public render(): JSX.Element {
		const { customFooterStyle } = this.props
		return (
			<View style={[FooterStyle.container, customFooterStyle]}>
				<Text> Footer Component </Text>
			</View>
		)
	}
}
