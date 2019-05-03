import { IMediaItem } from '@Interfaces';
import { number } from 'prop-types';

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
