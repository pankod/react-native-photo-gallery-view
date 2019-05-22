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
        columns: number;
    }>;
    state: {
        loading: boolean;
    };
    componentWillMount(): void;
    onPanResponderRelease(e: any, { vx, dx, vy, dy }: {
        vx: any;
        dx: any;
        vy: any;
        dy: any;
    }): void;
    getDefault(): void;
    getImageByIndex(defaultValue: any, imageIndex: any): void;
    onImageLoadEnd(): void;
    onImageLoadStart(): void;
    customImage(): JSX.Element;
    render(): JSX.Element;
    defaultRender(): JSX.Element;
}
