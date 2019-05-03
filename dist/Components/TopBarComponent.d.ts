import React, { Component } from 'react';
import { Animated } from 'react-native';
import { ITopBarProps } from "../Interfaces";
export declare class TopBarComponent extends Component<ITopBarProps, {}> {
    static contextType: React.Context<{
        mediaList: any[];
        gridSize: number;
    }>;
    animatedY: Animated.Value;
    render(): JSX.Element;
    componentDidMount(): void;
    titleRender(): JSX.Element;
    backButtonRender(): JSX.Element;
}
