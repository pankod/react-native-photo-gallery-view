
// Global Imports
import { ViewStyle } from 'react-native';

// Local Imports
import { IMediaItem } from "@Interfaces";

export interface IGalleryProps {
	mediaList: IMediaItem[],
	customTopBarStyle?: ViewStyle,
	customFooterStyle?: ViewStyle,
	onBack?: () => void,
	style?: ViewStyle,
	renderStickyFooter?: (height: number) => JSX.Element;
	renderDetailButtons?: (media: IMediaItem, index: number) => JSX.Element;
	renderCustomState?: (media: IMediaItem, index: number) => JSX.Element;
	onSelectionChanged: (media: IMediaItem, index: number) => any;
	title?: string;
	detailTitle?: string;
	gridSize: number;
	displaySelectionButtons?: boolean;
	stickyFooter: boolean;
	customTopBarBackButton?: (action: Function) => JSX.Element
	customMainTitle?: (totalImages: number) => JSX.Element
	customDetailTitle?: (totalImages: number, photoIndex: number) => JSX.Element
	customCheckedView?: () => JSX.Element
	customSelectedTitle?: (totalSelected: number) => JSX.Element
}
