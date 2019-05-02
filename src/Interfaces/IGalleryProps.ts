
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
	renderCustomButtons?: (media: IMediaItem, index: number) => JSX.Element;
	renderCustomState?: (media: IMediaItem) => JSX.Element;
	onSelectionChanged: (media: IMediaItem, index: number) => any;
	title?: string;
	detailTitle?: string;
	gridSize: number;
	displaySelectionButtons?: boolean;
	stickyFooter: boolean;
}
