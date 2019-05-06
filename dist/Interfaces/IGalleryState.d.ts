import { IMediaItem } from './';
export interface IGalleryState {
    title?: string;
    detailTitle?: string;
    showingImage?: IMediaItem;
    isModalOpen: boolean;
    showImageModal: (media: IMediaItem, index: number) => any;
    onSelection: (media: IMediaItem, index: number) => any;
    onBackRequest: () => void;
    changeImage: (index: number) => void;
    imageIndex: number;
    selected: string[];
    orientation?: string;
    dynamicSize?: {
        width: number;
        height: number;
    };
}
