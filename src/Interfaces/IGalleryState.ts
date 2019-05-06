// Global Imports
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

// Local Imports
import { IMediaItem } from '@Interfaces';

export interface IGalleryState {
	title?: string,
	detailTitle?: string,
	showingImage?: IMediaItem,
	isModalOpen: boolean,
	showImageModal: (media: IMediaItem, index: number) => any,
	onSelection: (media: IMediaItem, index: number) => any,
	onBackRequest: () => void,
	imageIndex: number;
	selected: string[];
	orientation?: string;
	dynamicSize?: { width: number, height: number }
}
