import React, { PureComponent } from 'react';
export declare class DetailComponent extends PureComponent {
    static contextType: React.Context<{
        items: any[];
        gridSize: number;
    }>;
    render(): JSX.Element;
}
