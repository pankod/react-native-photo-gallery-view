import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { IBlurImageProps, IBlurImageState } from '../Interfaces';
export declare class BlurImage extends PureComponent<IBlurImageProps, IBlurImageState> {
    imageAnimated: Animated.Value;
    translateX: Animated.Value;
    translateY: Animated.Value;
    panResponder: any;
    locationY: number;
    locationX: number;
    direction: string;
    static contextType: React.Context<{
        items: any[];
        gridSize: number;
    }>;
    constructor(props: any);
    getDefault(): void;
    onImageLoadEnd(): void;
    onImageLoadStart(): void;
    customImage(): JSX.Element;
    render(): JSX.Element;
}
