import { Component } from "react";
import { IGalleryProps, IGalleryState } from "../Interfaces";
export declare class GalleryComponent extends Component<IGalleryProps, IGalleryState> {
    constructor(props: IGalleryProps);
    static defaultProps: {
        stickyFooter: boolean;
        gridSize: number;
    };
    render(): JSX.Element;
}
