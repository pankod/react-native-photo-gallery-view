import React, { PureComponent } from 'react';
import { IAlbumProps } from "../Interfaces";
export declare class AlbumComponent extends PureComponent<IAlbumProps, {}> {
    static contextType: React.Context<{
        mediaList: any[];
        gridSize: number;
    }>;
    render(): JSX.Element;
    renderModal(): JSX.Element;
    private renderItem;
}
