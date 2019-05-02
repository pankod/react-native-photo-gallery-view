import { PureComponent } from 'react';
import { Animated } from 'react-native';
import { IBlurImageProps } from '../Interfaces';
export declare class BlurImage extends PureComponent<IBlurImageProps> {
    imageAnimated: Animated.Value;
    private onImageLoad;
    render(): JSX.Element;
}
