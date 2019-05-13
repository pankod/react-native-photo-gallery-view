// Global Imports
import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, FlatList, Animated } from 'react-native';

// Local Imports
import { BlurImage } from '@Components';
import { AlbumStyle } from "@Styles";
import { IAlbumProps, IMediaItem, IGalleryProps, IGalleryState } from "@Interfaces";
import Common from '@Provider';

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
								extraData={[context.selected, context.dynamicSize]}
							/>
						</View>
					)
				}
			</Common.Consumer>
		)
	}

	public renderItem(item: IMediaItem, index: number): JSX.Element {
		const {
			onSelection,
			displaySelectionButtons,
			showImageModal,
			stickyFooter,
			renderCustomState,
			dynamicSize,
			customThumbnailImage,
			thumbImageResizeMode,
			thumbImageResizeMethod,
			showPreview,
			hidePreview
		} = this.context;
		if (displaySelectionButtons && stickyFooter) {
			return (
				<TouchableOpacity
					onPress={() => onSelection(item, index)} key={"onSelection"}
					style={
						[
							this.checkedCtrl(item) && AlbumStyle.checkedBorder,
							{ position: "relative", width: dynamicSize.width, height: dynamicSize.height, padding: 3 }
						]
					}>

					{this.isChecked(item)}
					{
						customThumbnailImage ? customThumbnailImage(item, index) : (
							<BlurImage resizeMode={thumbImageResizeMode} resizeMethod={thumbImageResizeMethod} key={index} source={{ uri: item.thumb }} />
						)
					}
				</TouchableOpacity>
			)
		}

		return (
			<TouchableOpacity
				onPress={() => showImageModal(item, index)} key={"showImageModal"}
				onLongPress={() => showPreview(item, index)}
				// onPressOut={() => hidePreview()}
				style={
					{ width: dynamicSize.width, height: dynamicSize.height, padding: 3 }
				}>
				{renderCustomState(item, index)}
				{
					customThumbnailImage ? customThumbnailImage(item, index) : (
						<BlurImage resizeMode={thumbImageResizeMode} resizeMethod={thumbImageResizeMethod} key={index} source={{ uri: item.thumb }} />
					)
				}
			</TouchableOpacity >
		)
	}

	public checkedCtrl(item: IMediaItem): boolean {
		const { selected } = this.context;
		return selected.indexOf(item.id) > -1
	}

	public isChecked(item: IMediaItem): JSX.Element {
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
