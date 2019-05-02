// Global Imports
import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, FlatList, Modal, SafeAreaView } from 'react-native';

// Local Imports
import { AlbumStyle } from "@Styles";
import { IAlbumProps, IMediaItem, IGalleryProps, IGalleryState } from "@Interfaces";
import Common from '@Provider';
import { TopBarComponent, FooterComponent, BlurImage } from '@Components';

const { width, height } = Dimensions.get('window');

export class AlbumComponent extends PureComponent<IAlbumProps, {}> {

	static contextType = Common

	public render(): JSX.Element {
		return (
			<Common.Consumer>
				{
					(context: IGalleryProps & IGalleryState) => (
						<React.Fragment>
							<FlatList style={AlbumStyle.container} data={context.mediaList}
								numColumns={context.gridSize}
								renderItem={({ item, index }) => this.renderItem(item, index)}
								keyExtractor={(item, index) => index.toString()}
							/>
							{context.isModalOpen && this.renderModal()}
						</React.Fragment>
					)
				}
			</Common.Consumer>
		)
	}

	public renderModal(): JSX.Element {
		const { isModalOpen, showingImage } = this.context;
		return (
			<Modal
				supportedOrientations={['portrait', 'landscape']}
				transparent={false}
				visible={isModalOpen}
				animationType={"slide"}>
				<SafeAreaView style={{ flex: 1 }}>
					<TopBarComponent />
					<View style={{ flex: 1, flexDirection: "column" }}>
						{showingImage.caption.length > 0 && <Text numberOfLines={2} style={AlbumStyle.captionText}>{showingImage.caption}</Text>}
						<BlurImage
							resizeMethod={"resize"}
							resizeMode={"contain"}
							source={{ uri: showingImage.photo }}
							thumbnail={{ uri: showingImage.thumb }}
						/>
					</View>
					<FooterComponent />
				</SafeAreaView>
			</Modal>
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
