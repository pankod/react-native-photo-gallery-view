import { Component } from "react";
import { IGalleryProps, IGalleryState } from "../Interfaces";
export declare class GalleryComponent extends Component<IGalleryProps, IGalleryState> {
    constructor(props: IGalleryProps);
    static defaultProps: {
        gridSize: number;
        stickyFooter: boolean;
        displaySelectionButtons: boolean;
    };
    render(): JSX.Element;
    private showImageModal;
    private onBackRequest;
    private onSelection;
}
