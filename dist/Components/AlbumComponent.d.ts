import React, { Component } from 'react';
import { IAlbumProps } from "../Interfaces";
export declare class AlbumComponent extends Component<IAlbumProps, {}> {
    static contextType: React.Context<{
        mediaList: any[];
        gridSize: number;
    }>;
    render(): JSX.Element;
    private renderItem;
}
