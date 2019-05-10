import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
export declare class PreviewModalComponent extends PureComponent {
    static contextType: React.Context<{
        mediaList: any[];
        gridSize: number;
    }>;
    scale: Animated.Value;
    opacity: Animated.Value;
    componentDidMount(): void;
    render(): JSX.Element;
}
