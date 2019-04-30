// Global Imports
import React, { Component } from "react"
import { View } from "react-native"

// Local Imports
import { TopBarComponent, AlbumComponent } from "@Components";
import { IGalleryProps, IGalleryState } from "@Interfaces";
import { GalleryStyle } from "@Styles";

export class GalleryComponent extends Component<IGalleryProps, IGalleryState> {
	public render(): JSX.Element {
		const {
			customFooterStyle,
			customTopBarStyle
		} = this.props;
		return (
			<View style={GalleryStyle.container}>
				<TopBarComponent customTopBarStyle={{ ...customTopBarStyle }} />
				<AlbumComponent
					customFooterStyle={{ ...customFooterStyle }}
				/>
			</View>
		)
	}
}
