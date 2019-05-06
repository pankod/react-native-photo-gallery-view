import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { IBlurImageProps, IBlurImageState } from '../Interfaces';
export declare class BlurImage extends PureComponent<IBlurImageProps, IBlurImageState> {
    imageAnimated: Animated.Value;
    static contextType: React.Context<{
        mediaList: any[];
        gridSize: number;
    }>;
    constructor(props: any);
    private onImageLoad;
    render(): JSX.Element;
}
