import React, { Component } from 'react';
import { ITopBarProps } from "../Interfaces";
export declare class TopBarComponent extends Component<ITopBarProps, {}> {
    static contextType: React.Context<{
        mediaList: any[];
        gridSize: number;
    }>;
    render(): JSX.Element;
    titleRender(): JSX.Element;
    backButtonRender(): JSX.Element;
}
