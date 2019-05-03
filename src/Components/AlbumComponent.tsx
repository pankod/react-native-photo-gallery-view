// Global Imports
import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, FlatList, Animated } from 'react-native';

// Local Imports
import { AlbumStyle } from "@Styles";
import { IAlbumProps, IMediaItem, IGalleryProps, IGalleryState } from "@Interfaces";
import Common from '@Provider';
import { DetailComponent } from '@Components';

const { width, height } = Dimensions.get('window');

export class AlbumComponent extends PureComponent<IAlbumProps, {}> {

	static contextType = Common;
	public animatedY = new Animated.Value(0);

	public render(): JSX.Element {
		return (
			<Common.Consumer>
				{
					(context: IGalleryProps & IGalleryState) => (
						<View style={AlbumStyle.container}>
							<FlatList
								style={AlbumStyle.container}
								data={context.mediaList}
								numColumns={context.gridSize}
								renderItem={({ item, index }) => this.renderItem(item, index)}
								keyExtractor={(item, index) => index.toString()}
							/>
						</View>
					)
				}
			</Common.Consumer>
		)
	}

	private renderItem(item: IMediaItem, index: number): JSX.Element {
		const {
			gridSize,
			onSelectionChanged,
			displaySelectionButtons,
			showImageModal,
			stickyFooter,
			renderCustomState
		} = this.context;
		if (displaySelectionButtons && stickyFooter) {
			return (
				<TouchableOpacity onPress={() => onSelectionChanged(item, index)} key={index} style={{ width: width / gridSize, height: width / gridSize, padding: 3 }}>
					{renderCustomState(item, index)}
					<Image resizeMode={"cover"} style={{ flex: 1 }} key={index} source={{ uri: item.thumb }} />
				</TouchableOpacity>
			)
		} else {
			return (
				<TouchableOpacity onPress={() => showImageModal(item, index)} key={index} style={{ width: width / gridSize, height: width / gridSize, padding: 3 }}>
					{renderCustomState(item, index)}
					<Image resizeMode={"cover"} style={{ flex: 1 }} key={index} source={{ uri: item.thumb }} />
				</TouchableOpacity >
			)
		}
	}
}
