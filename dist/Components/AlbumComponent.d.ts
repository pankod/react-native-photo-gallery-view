import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { IAlbumProps } from "../Interfaces";
export declare class AlbumComponent extends PureComponent<IAlbumProps, {}> {
    static contextType: React.Context<{
        mediaList: any[];
        gridSize: number;
    }>;
    animatedY: Animated.Value;
    render(): JSX.Element;
    private renderItem;
}
