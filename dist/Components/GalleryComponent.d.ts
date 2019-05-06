import { Component } from "react";
import { IGalleryProps, IGalleryState, IMediaItem } from "../Interfaces";
export declare class GalleryComponent extends Component<IGalleryProps, IGalleryState> {
    private xOffset;
    constructor(props: IGalleryProps);
    static defaultProps: {
        gridSize: number;
        stickyFooter: boolean;
        displaySelectionButtons: boolean;
    };
    render(): JSX.Element;
    showImageModal(media: IMediaItem, index: number): void;
    changeImage(index: number): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    backKeyHandler(): boolean;
    onBackRequest(): void;
    private clearModal;
    onSelection(item: IMediaItem, index: number): void;
}
