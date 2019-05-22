import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
export declare class PreviewModal extends PureComponent {
    static contextType: React.Context<{
        items: any[];
        columns: number;
    }>;
    scale: Animated.Value;
    opacity: Animated.Value;
    thumbOpacity: Animated.Value;
    containOpacity: Animated.Value;
    componentWillMount(): void;
    hideThumb(): void;
    renderAnimatedView(): JSX.Element;
    defaultView(): JSX.Element;
    render(): JSX.Element;
}
