// Global Imports
import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, FlatList, Animated } from 'react-native';

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
								data={context.items}
								numColumns={context.columns}
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
		const { onSelection, enableItemSelection, showImageModal, renderThumbnailOverlay, dynamicSize, renderThumbnailImage, showPreview } = this.context;
		if (enableItemSelection) {
			return (
				<TouchableOpacity
					onPress={() => onSelection(item, index)} key={"onSelection"}
					onLongPress={() => showPreview(item, index)}
					style={[this.checkedCtrl(item) && AlbumStyle.checkedBorder, { position: "relative", width: dynamicSize.width, height: dynamicSize.height, padding: 3 }]}>
					{this.isChecked(item)}
					{renderThumbnailImage ? renderThumbnailImage(item, index) : this.renderImageView(item, index)}
				</TouchableOpacity>
			)
		}

		return (
			<TouchableOpacity
				onPress={() => showImageModal(item, index)} key={"showImageModal"}
				onLongPress={() => showPreview(item, index)}
				style={{ position: "relative", padding: 3, width: dynamicSize.width, height: dynamicSize.height }}>
				{renderThumbnailOverlay && renderThumbnailOverlay(item, index)}
				{renderThumbnailImage ? renderThumbnailImage(item, index) : this.renderImageView(item, index)}
			</TouchableOpacity >
		)
	}

	public renderImageView(item: IMediaItem, index: number): JSX.Element {
		const { dynamicSize, thumbImageResizeMode, thumbImageResizeMethod } = this.context;
		return (
			<BlurImage style={{ width: dynamicSize.width, height: dynamicSize.height }} resizeMode={thumbImageResizeMode} resizeMethod={thumbImageResizeMethod} key={index} source={{ uri: item.thumbnail }} />
		)
	}

	public checkedCtrl(item: IMediaItem): boolean {
		const { selected } = this.context;
		return selected.indexOf(item.id) > -1
	}

	public isChecked(item: IMediaItem): JSX.Element {
		const { renderCheckedIcon } = this.context;
		if (this.checkedCtrl(item)) {

			if (renderCheckedIcon) {
				return renderCheckedIcon()
			}

			return (
				<View style={AlbumStyle.checkedContainer}>
					<BlurImage
						style={AlbumStyle.checkedImage}
						source={require("../Assets/Images/checked.png")}
					/>
				</View>
			)
		}
		return null;
	}
}
