// Global Imports
import React, { PureComponent } from 'react';
import { View } from 'react-native';

// Local Imports
import { FooterStyle } from "@Styles";
import { IFooterProps, IGalleryProps, IGalleryState } from "@Interfaces";
import Common from '@Provider';
import { Const } from '@Constants';

export class FooterComponent extends PureComponent<IFooterProps, {}> {

	static contextType = Common;

	public render(): JSX.Element {
		return (
			<Common.Consumer>
				{
					(context: IGalleryProps & IGalleryState) => (
						<View style={[FooterStyle.container, context.customFooterStyle]}>
							{context.renderStickyFooter && this.renderStickyFooter()}
						</View>
					)
				}
			</Common.Consumer>
		)
	}

	private renderStickyFooter(): JSX.Element {
		return (
			this.context.renderStickyFooter(Const.HEIGHT)
		)
	}
}
