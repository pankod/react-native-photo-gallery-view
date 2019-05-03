// Global Imports
import React, { Component } from "react"
import { View } from "react-native"

// Local Imports
import { TopBarComponent, AlbumComponent, FooterComponent, DetailComponent } from "@Components";
import { IGalleryProps, IGalleryState, IMediaItem } from "@Interfaces";
import { GalleryStyle } from "@Styles";
import Common from '@Provider';

export class GalleryComponent extends Component<IGalleryProps, IGalleryState> {

	constructor(props: IGalleryProps) {
		super(props);
		this.state = {
			title: `${props.mediaList.length} Photos`,
			detailTitle: null,
			showingImage: {} as IMediaItem,
			isModalOpen: false,
			showImageModal: this.showImageModal.bind(this),
			onBackRequest: this.onBackRequest.bind(this),
			onSelection: this.onSelection.bind(this),
			imageIndex: 0,
			selected: []
		}
	}

	static defaultProps = {
		gridSize: 3,
		stickyFooter: true,
		displaySelectionButtons: false
	}

	public render(): JSX.Element {
		const {
			style
		} = this.props;
		const { isModalOpen } = this.state;
		return (
			<Common.Provider value={{ ...this.state, ...this.props }}>
				<View style={[GalleryStyle.container, style]}>
					<TopBarComponent />
					{!isModalOpen && <AlbumComponent />}
					{isModalOpen && <DetailComponent />}
					<FooterComponent />
				</View>
			</Common.Provider>
		)
	}

	private showImageModal(media: IMediaItem, index: number): void {
		const { mediaList } = this.props;
		this.setState({
			imageIndex: index,
			detailTitle: `${index + 1} of ${mediaList.length}`,
			showingImage: media,
			isModalOpen: true
		});
	}

	private onBackRequest(): void {
		const { onBack } = this.props;
		const { isModalOpen } = this.state;
		if (onBack && !isModalOpen) {
			onBack();
		}

		if (isModalOpen) {
			this.setState({
				imageIndex: 0,
				detailTitle: null,
				showingImage: null,
				isModalOpen: false
			});
		}
	}

	private onSelection(item: IMediaItem, index: number): void {
		const { onSelectionChanged } = this.props;
		const { selected } = this.state;

		if (onSelectionChanged) {
			onSelectionChanged(item, index);
		}

		if (selected.indexOf(item.id) === -1) {
			selected.push(item.id);
		} else {
			selected.splice(selected.indexOf(item.id), 1);
		}

		this.setState({
			selected: [...selected]
		});
	}
}
