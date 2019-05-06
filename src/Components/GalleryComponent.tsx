// Global Imports
import React, { Component } from "react"
import { View, Dimensions, BackHandler } from "react-native"

// Local Imports
import { TopBarComponent, AlbumComponent, FooterComponent, DetailComponent } from "@Components";
import { IGalleryProps, IGalleryState, IMediaItem } from "@Interfaces";
import { GalleryStyle } from "@Styles";
import Common from '@Provider';

const { width, height } = Dimensions.get('window');

export class GalleryComponent extends Component<IGalleryProps, IGalleryState> {

	private xOffset: number = 0;

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
			changeImage: this.changeImage.bind(this),
			imageIndex: 0,
			selected: [],
			orientation: 'portrait',
			dynamicSize: {
				width: width / props.gridSize,
				height: width / props.gridSize,
			}
		}
		// this.getOrientation = this.getOrientation.bind(this);
		this.backKeyHandler = this.backKeyHandler.bind(this)
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
				<View ref="rootView" style={[GalleryStyle.container, style]}>
					<TopBarComponent />
					{!isModalOpen && <AlbumComponent />}
					{isModalOpen && <DetailComponent />}
					<FooterComponent />
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

	// public componentWillMount(): void {
	// 	this.getOrientation();
	// }

	// public componentDidMount(): void {
	// 	Dimensions.addEventListener("change", this.getOrientation);
	// }

	// public componentWillUnmount(): void {
	// 	Dimensions.removeEventListener("change", this.getOrientation);
	// }

	// private getOrientation(): void {
	// 	if (this.refs.rootView) {
	// 		const { gridSize } = this.props;
	// 		if (Dimensions.get('window').width < Dimensions.get('window').height) {
	// 			this.setState({
	// 				dynamicSize: {
	// 					width: width / gridSize,
	// 					height: width / gridSize,
	// 				}
	// 			});
	// 		}
	// 		else {
	// 			this.setState({
	// 				dynamicSize: {
	// 					width: height / gridSize,
	// 					height: height / gridSize,
	// 				}
	// 			});
	// 		}
	// 	}
	// }

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

	private clearModal(): void {
		this.setState({
			imageIndex: 0,
			detailTitle: null,
			showingImage: null,
			isModalOpen: false
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
