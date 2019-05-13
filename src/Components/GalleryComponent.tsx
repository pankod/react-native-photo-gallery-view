// Global Imports
import React, { Component } from "react"
import { View, Dimensions, BackHandler, AppState } from "react-native"

// Local Imports
import { TopBarComponent, AlbumComponent, FooterComponent, DetailComponent, PreviewModal } from "@Components";
import { IGalleryProps, IGalleryState, IMediaItem } from "@Interfaces";
import { GalleryStyle } from "@Styles";
import Common from '@Provider';

const { width, height } = Dimensions.get('window');

export class GalleryComponent extends Component<IGalleryProps, IGalleryState> {

	constructor(props: IGalleryProps) {
		super(props);
		this.state = {
			title: `${props.mediaList.length} Photos`,
			detailTitle: null,
			showingImage: {} as IMediaItem,
			isModalOpen: false,
			showImageModal: this.showImageModal.bind(this),
			showPreview: this.showPreview.bind(this),
			hidePreview: this.hidePreview.bind(this),
			onBackRequest: this.onBackRequest.bind(this),
			onSelection: this.onSelection.bind(this),
			changeImage: this.changeImage.bind(this),
			imageIndex: 0,
			selected: [],
			orientation: 'portrait',
			dynamicSize: {
				width: width / props.gridSize,
				height: width / props.gridSize,
			},
			previewIsOpen: false,
			imagePreview: {} as IMediaItem
		}
		// this.getOrientation = this.getOrientation.bind(this);
		this.backKeyHandler = this.backKeyHandler.bind(this)
		this.unTouch = this.unTouch.bind(this);
	}

	static defaultProps = {
		gridSize: 3,
		stickyFooter: true,
		displaySelectionButtons: false,
		detailImageResizeMode: "contain",
		detailImageResizeMethod: "resize",
		thumbImageResizeMode: "cover",
		thumbImageResizeMethod: "resize"
	}

	public render(): JSX.Element {
		const {
			style
		} = this.props;
		const { isModalOpen, previewIsOpen } = this.state;
		return (
			<Common.Provider value={{ ...this.state, ...this.props }}>
				<View
					onTouchEnd={() => this.unTouch()}
					// onTouchEndCapture={() => console.log("end capture")}
					ref="rootView"
					style={[GalleryStyle.container, style]}
				>
					<TopBarComponent />
					{!isModalOpen && <AlbumComponent />}
					{isModalOpen && <DetailComponent />}
					<FooterComponent />
					{previewIsOpen && <PreviewModal />}
				</View>
			</Common.Provider>
		)
	}

	public showImageModal(media: IMediaItem, index: number): void {
		const { mediaList } = this.props;
		this.setState({
			imageIndex: index,
			detailTitle: `${index + 1} of ${mediaList.length}`,
			showingImage: media,
			isModalOpen: true
		});
	}

	public changeImage(index: number): void {
		const { mediaList } = this.props;
		this.setState({
			imageIndex: index,
			detailTitle: `${index + 1} of ${mediaList.length}`,
			showingImage: mediaList[index],
		});
	}

	public componentWillReceiveProps(nextProps): void {
		if (nextProps.displaySelectionButtons !== this.props.displaySelectionButtons) {
			this.setState({
				selected: []
			})
		}
	}

	public componentDidMount(): void {
		BackHandler.addEventListener("hardwareBackPress", this.backKeyHandler);
	}

	public componentWillUnmount(): void {
		BackHandler.removeEventListener("hardwareBackPress", this.backKeyHandler);
	}

	public backKeyHandler(): boolean {
		this.onBackRequest();
		return true;
	}

	public onBackRequest(): void {
		const { onBack } = this.props;
		const { isModalOpen } = this.state;
		if (onBack && !isModalOpen) {
			onBack();
		}

		if (isModalOpen) {
			this.clearModal();
		}
	}

	public showPreview(item: IMediaItem, index: number): void {
		this.setState({
			imagePreview: item,
			previewIsOpen: true
		});
	}

	public hidePreview(): void {
		this.setState({
			previewIsOpen: false,
			imagePreview: {} as IMediaItem
		});
	}

	public unTouch(): void {
		if (this.state.previewIsOpen) {
			this.hidePreview();
		}
	}

	public clearModal(): void {
		this.setState({
			imageIndex: 0,
			detailTitle: null,
			showingImage: null,
			isModalOpen: false,
			selected: []
		});
	}

	public onSelection(item: IMediaItem, index: number): void {
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
