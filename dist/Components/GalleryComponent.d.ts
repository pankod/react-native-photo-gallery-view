import { Component } from "react";
import { IGalleryProps, IGalleryState, IMediaItem } from "../Interfaces";
export declare class GalleryComponent extends Component<IGalleryProps, IGalleryState> {
    constructor(props: IGalleryProps);
    static defaultProps: {
        columns: number;
        enableItemSelection: boolean;
        detailImageResizeMode: string;
        detailImageResizeMethod: string;
        thumbImageResizeMode: string;
        thumbImageResizeMethod: string;
    };
    render(): JSX.Element;
    showImageModal(media: IMediaItem, index: number): void;
    changeImage(index: number): void;
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    backKeyHandler(): boolean;
    onCloseRequest(): void;
    showPreview(item: IMediaItem, index: number): void;
    hidePreview(): void;
    clearModal(): void;
    onSelection(item: IMediaItem, index: number): void;
}
