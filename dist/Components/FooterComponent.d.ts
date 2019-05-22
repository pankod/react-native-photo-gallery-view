import React, { PureComponent } from 'react';
import { IFooterProps } from "../Interfaces";
export declare class FooterComponent extends PureComponent<IFooterProps, {}> {
    static contextType: React.Context<{
        items: any[];
        columns: number;
    }>;
    render(): JSX.Element;
    renderDetailFooter(): JSX.Element;
    renderGalleryFooter(): JSX.Element;
}
