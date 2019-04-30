// Global Imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Local Imports
import { FooterComponent } from "@Components";
import { AlbumStyle } from "@Styles";
import { IAlbumProps } from "@Interfaces";

export class AlbumComponent extends Component<IAlbumProps, {}> {
	public render(): JSX.Element {
		const {
			customFooterStyle
		} = this.props;
		return (
			<React.Fragment>
				<View style={AlbumStyle.container}>
					<Text>Main</Text>
				</View>
				<FooterComponent customFooterStyle={{ ...customFooterStyle }} />
			</React.Fragment>
		)
	}
}
