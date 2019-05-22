import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { IAlbumProps, IMediaItem } from "../Interfaces";
export declare class AlbumComponent extends PureComponent<IAlbumProps, {}> {
    static contextType: React.Context<{
        items: any[];
        columns: number;
    }>;
    animatedY: Animated.Value;
    render(): JSX.Element;
    renderItem(item: IMediaItem, index: number): JSX.Element;
    checkedCtrl(item: IMediaItem): boolean;
    isChecked(item: IMediaItem): JSX.Element;
}
