/// <reference types="react" />
import { ViewStyle, ImageResizeMode } from 'react-native';
import { IMediaItem } from "./";
import { ResizeMethod } from '../Enum';
export interface IGalleryProps {
    items: IMediaItem[];
    topBarStyle?: ViewStyle;
    footerStyle?: ViewStyle;
    onClose?: () => void;
    style?: ViewStyle;
    renderGalleryFooter?: (height: number, action: Function) => JSX.Element;
    renderDetailFooter?: (item: IMediaItem, action: Function) => JSX.Element;
    renderThumbnailOverlay?: (media: IMediaItem, index: number) => JSX.Element;
    onSelectItem: (item: IMediaItem, index: number) => any;
    renderThumbnailImage?: (item: IMediaItem, index: number) => JSX.Element;
    renderDetailImage?: (item: IMediaItem, index: number) => JSX.Element;
    renderPreview?: (item: IMediaItem) => JSX.Element;
    title?: string;
    detailTitle?: string;
    columns: number;
    enableItemSelection?: boolean;
    renderBackButton?: (action: Function) => JSX.Element;
    renderGalleryTitleBar?: (totalImages: number) => JSX.Element;
    renderDetailTitleBar?: (totalImages: number, photoIndex: number) => JSX.Element;
    renderCheckedIcon?: () => JSX.Element;
    customSelectedTitle?: (totalSelected: number) => JSX.Element;
    detailImageResizeMode?: ImageResizeMode;
    detailImageResizeMethod?: ResizeMethod;
    thumbImageResizeMode?: ImageResizeMode;
    thumbImageResizeMethod?: ResizeMethod;
}
