// Global Imports
import React, { Component } from "react"
import { Text, View } from "react-native"

// Local Imports
import { IGalleryProps, IGalleryState } from "@Interfaces";

export class GalleryComponent extends Component<IGalleryProps, IGalleryState> {
	render() {
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		)
	}
}
