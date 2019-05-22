import React, { PureComponent } from 'react';
import { IFooterProps } from "../Interfaces";
export declare class FooterComponent extends PureComponent<IFooterProps, {}> {
    static contextType: React.Context<{
        items: any[];
        gridSize: number;
    }>;
    render(): JSX.Element;
    renderDetailButtons(): JSX.Element;
    renderStickyFooter(): JSX.Element;
}
