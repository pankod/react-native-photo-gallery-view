import React, { PureComponent } from 'react';
import { IFooterProps } from "../Interfaces";
export declare class FooterComponent extends PureComponent<IFooterProps, {}> {
    static contextType: React.Context<{
        mediaList: any[];
        gridSize: number;
    }>;
    render(): JSX.Element;
    private renderStickyFooter;
}
