import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { IBlurImageProps, IBlurImageState } from '../Interfaces';
export declare class BlurImage extends PureComponent<IBlurImageProps, IBlurImageState> {
    imageAnimated: Animated.Value;
    translateX: Animated.Value;
    translateY: Animated.Value;
    panResponder: any;
    private locationY;
    private locationX;
    private direction;
    static contextType: React.Context<{
        mediaList: any[];
        gridSize: number;
    }>;
    constructor(props: any);
    getDefault(): void;
    onImageLoadEnd(): void;
    onImageLoadStart(): void;
    customImage(): JSX.Element;
    render(): JSX.Element;
}
