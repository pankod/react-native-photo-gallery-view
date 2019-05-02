import { IMediaItem } from '@Interfaces';

export interface IGalleryState {
	title?: string,
	detailTitle?: string,
	showingImage?: IMediaItem,
	isModalOpen: boolean,
	showImageModal: (media: IMediaItem, index: number) => any,
	onBackRequest: () => void,
}
