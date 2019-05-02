
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
	renderStickyFooter: (height: number) => JSX.Element;
	renderCustomState: (media: IMediaItem) => JSX.Element;
	onSelectionChanged: (media: IMediaItem, index: number) => any;
	stickyFooter: boolean;
	title?: string;
	gridSize: number;
}
