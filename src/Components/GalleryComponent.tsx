// Global Imports
import React, { Component } from "react"
import { View } from "react-native"

// Local Imports
import { TopBarComponent, AlbumComponent, FooterComponent } from "@Components";
import { IGalleryProps, IGalleryState, IMediaItem } from "@Interfaces";
import { GalleryStyle } from "@Styles";
import { Const } from '@Constants';
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
			onBackRequest: this.onBackRequest.bind(this)
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
		return (
			<Common.Provider value={{ ...this.state, ...this.props }}>
				<View style={[GalleryStyle.container, style]}>
					<TopBarComponent />
					<AlbumComponent />
					<FooterComponent />
				</View>
			</Common.Provider>
		)
	}

	private showImageModal(media: IMediaItem, index: number): void {
		const { mediaList } = this.props;
		this.setState({
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
				detailTitle: null,
				showingImage: null,
				isModalOpen: false
			});
		}
	}
}
