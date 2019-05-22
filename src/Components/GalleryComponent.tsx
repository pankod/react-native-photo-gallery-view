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
			title: `${props.items.length} Photos`,
			detailTitle: null,
			showingImage: {} as IMediaItem,
			isModalOpen: false,
			showImageModal: this.showImageModal.bind(this),
			showPreview: this.showPreview.bind(this),
			hidePreview: this.hidePreview.bind(this),
			onCloseRequest: this.onCloseRequest.bind(this),
			onSelection: this.onSelection.bind(this),
			changeImage: this.changeImage.bind(this),
			imageIndex: 0,
			selected: [],
			orientation: 'portrait',
			dynamicSize: {
				width: width / props.columns,
				height: width / props.columns,
			},
			previewIsOpen: false,
			imagePreview: {} as IMediaItem
		}
		// this.getOrientation = this.getOrientation.bind(this);
		this.backKeyHandler = this.backKeyHandler.bind(this)
	}

	static defaultProps = {
		columns: 3,
		enableItemSelection: false,
		detailImageResizeMode: "contain",
		detailImageResizeMethod: "resize",
		thumbImageResizeMode: "cover",
		thumbImageResizeMethod: "resize"
	}

	public render(): JSX.Element {
		const {
			style,
		} = this.props;
		const { isModalOpen, previewIsOpen } = this.state;
		return (
			<Common.Provider value={{ ...this.state, ...this.props }}>
				<View
					onMoveShouldSetResponderCapture={() => previewIsOpen}
					onTouchEndCapture={() => previewIsOpen && this.hidePreview()}
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
		const { items } = this.props;
		this.setState({
			imageIndex: index,
			detailTitle: `${index + 1} of ${items.length}`,
			showingImage: media,
			isModalOpen: true
		});
	}

	public changeImage(index: number): void {
		const { items } = this.props;
		this.setState({
			imageIndex: index,
			detailTitle: `${index + 1} of ${items.length}`,
			showingImage: items[index],
		});
	}

	public componentWillReceiveProps(nextProps): void {
		if (nextProps.enableItemSelection !== this.props.enableItemSelection) {
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
		this.onCloseRequest();
		return true;
	}

	public onCloseRequest(): void {
		const { onClose } = this.props;
		const { isModalOpen } = this.state;
		if (onClose && !isModalOpen) {
			onClose();
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
		const { onSelectItem } = this.props;
		const { selected } = this.state;

		if (onSelectItem) {
			item.isSelected = true;
			onSelectItem(item, index);
		}

		if (selected.indexOf(item.id) === -1) {
			item.isSelected = true;
			selected.push(item.id);
		} else {
			selected.splice(selected.indexOf(item.id), 1);
		}

		this.setState({
			selected: [...selected]
		});
	}
}
