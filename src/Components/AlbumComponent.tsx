// Global Imports
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, FlatList } from 'react-native';

// Local Imports
import { AlbumStyle } from "@Styles";
import { IAlbumProps, IMediaItem, IGalleryProps, IGalleryState } from "@Interfaces";
import Common from '@Provider';

const { width, height } = Dimensions.get('window');

export class AlbumComponent extends Component<IAlbumProps, {}> {

	static contextType = Common

	public render(): JSX.Element {
		return (
			<Common.Consumer>
				{
					(context: IGalleryProps & IGalleryState) => (
						<FlatList style={AlbumStyle.container} data={context.mediaList}
							numColumns={context.gridSize}
							renderItem={({ item, index }) => this.renderItem(item, index)}
							keyExtractor={(item, index) => index.toString()}
						/>
					)
				}
			</Common.Consumer>
		)
	}

	private renderItem(item: IMediaItem, index: number): JSX.Element {
		const { gridSize, onSelectionChanged } = this.context;
		return (
			<TouchableOpacity onPress={() => onSelectionChanged(item, index)} key={index} style={{ width: width / gridSize, height: width / gridSize }}>
				<Image resizeMode={"cover"} style={{ flex: 1 }} key={index} source={{ uri: item.thumb }} />
			</TouchableOpacity>
		)
	}
}
