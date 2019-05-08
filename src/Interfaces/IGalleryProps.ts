
// Global Imports
import { ViewStyle, ImageResizeMode } from 'react-native';

// Local Imports
import { IMediaItem } from "@Interfaces";
import { ResizeMethod } from '@Enum';

export interface IGalleryProps {
	mediaList: IMediaItem[],
	customTopBarStyle?: ViewStyle,
	customFooterStyle?: ViewStyle,
	onBack?: () => void,
	style?: ViewStyle,
	renderStickyFooter?: (height: number, action: Function) => JSX.Element;
	renderDetailButtons?: (media: IMediaItem, action: Function) => JSX.Element;
	renderCustomState?: (media: IMediaItem, index: number) => JSX.Element;
	onSelectionChanged: (media: IMediaItem, index: number) => any;
	customThumbnailImage?: (media: IMediaItem, index: number) => JSX.Element;
	customImageComponent?: (media: IMediaItem, index: number) => JSX.Element;
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
	detailImageResizeMode?: ImageResizeMode,
	detailImageResizeMethod?: ResizeMethod,
	thumbImageResizeMode?: ImageResizeMode,
	thumbImageResizeMethod?: ResizeMethod
}
