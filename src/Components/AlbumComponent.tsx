// Global Imports
import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, FlatList, Animated } from 'react-native';

// Local Imports
import { BlurImage } from '@Components';
import { AlbumStyle } from "@Styles";
import { IAlbumProps, IMediaItem, IGalleryProps, IGalleryState } from "@Interfaces";
import Common from '@Provider';

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
								extraData={context.selected}
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
			onSelection,
			displaySelectionButtons,
			showImageModal,
			stickyFooter,
			renderCustomState
		} = this.context;
		if (displaySelectionButtons && stickyFooter) {
			return (
				<TouchableOpacity
					onPress={() => onSelection(item, index)} key={index}
					style={
						[
							this.checkedCtrl(item) && AlbumStyle.checkedBorder,
							{ position: "relative", width: width / gridSize, height: width / gridSize, padding: 3 }
						]
					}>

					{this.isChecked(item)}
					<BlurImage resizeMode={"cover"} style={{ flex: 1 }} key={index} source={{ uri: item.thumb }} />
				</TouchableOpacity>
			)
		} else {
			return (
				<TouchableOpacity
					onPress={() => showImageModal(item, index)} key={index}
					style={
						{ width: width / gridSize, height: width / gridSize, padding: 3 }
					}
				>
					{renderCustomState(item, index)}
					<BlurImage resizeMode={"cover"} style={{ flex: 1 }} key={index} source={{ uri: item.thumb }} />
				</TouchableOpacity >
			)
		}
	}

	private checkedCtrl(item: IMediaItem): boolean {
		const { selected } = this.context;

		return selected.indexOf(item.id) > -1
	}

	private isChecked(item: IMediaItem): JSX.Element {
		const { customCheckedView } = this.context;
		if (this.checkedCtrl(item)) {

			if (customCheckedView) {
				return customCheckedView()
			}

			return (
				<View style={AlbumStyle.checkedContainer}>
					<Image
						style={AlbumStyle.checkedImage}
						source={require("../Assets/Images/checked.png")}
					/>
				</View>
			)
		}

		return null;
	}
}
