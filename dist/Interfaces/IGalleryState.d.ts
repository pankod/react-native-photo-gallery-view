import { IMediaItem } from './';
export interface IGalleryState {
    title?: string;
    detailTitle?: string;
    showingImage?: IMediaItem;
    isModalOpen: boolean;
    showImageModal: (media: IMediaItem, index: number) => any;
    showPreview: (media: IMediaItem, index: number) => any;
    hidePreview: () => any;
    imagePreview?: IMediaItem;
    previewIsOpen: boolean;
    onSelection: (media: IMediaItem, index: number) => any;
    onCloseRequest: () => void;
    changeImage: (index: number) => void;
    imageIndex: number;
    selected: string[];
    orientation?: string;
    dynamicSize?: {
        width: number;
        height: number;
    };
}
