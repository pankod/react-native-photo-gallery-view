import React, { PureComponent } from 'react';
export declare class DetailComponent extends PureComponent {
    static contextType: React.Context<{
        items: any[];
        columns: number;
    }>;
    render(): JSX.Element;
}
