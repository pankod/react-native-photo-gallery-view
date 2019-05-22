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
					(context: IGalleryProps & IGalleryState) => [this.renderDetailFooter(), this.renderGalleryFooter()]

				}
			</Common.Consumer>
		)
	}

	public renderDetailFooter(): JSX.Element {
		const { renderDetailFooter, isModalOpen, enableItemSelection } = this.context;
		if (renderDetailFooter && !enableItemSelection && isModalOpen) {
			return (
				<View key={"custom"} style={[FooterStyle.container, this.context.footerStyle]}>
					{this.context.renderDetailFooter(this.context.showingImage, this.context.onCloseRequest)}
				</View>
			)
		}
		return null;
	}

	public renderGalleryFooter(): JSX.Element {
		const { renderGalleryFooter, isModalOpen, enableItemSelection } = this.context;
		if (renderGalleryFooter && enableItemSelection && !isModalOpen) {
			return (
				<View key={"sticky"} style={[FooterStyle.container, this.context.footerStyle]}>
					{this.context.renderGalleryFooter(Const.HEIGHT, this.context.onCloseRequest)}
				</View>
			)
		}
		return null;
	}
}
