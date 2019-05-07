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
					(context: IGalleryProps & IGalleryState) => [this.renderDetailButtons(), this.renderStickyFooter()]

				}
			</Common.Consumer>
		)
	}

	public renderDetailButtons(): JSX.Element {
		const { renderDetailButtons, isModalOpen, displaySelectionButtons } = this.context;
		if (renderDetailButtons && !displaySelectionButtons && isModalOpen) {
			return (
				<View key={"custom"} style={[FooterStyle.container, this.context.customFooterStyle]}>
					{this.context.renderDetailButtons(this.context.showingImage, this.context.onBackRequest)}
				</View>
			)
		}
		return null;
	}

	public renderStickyFooter(): JSX.Element {
		const { renderStickyFooter, stickyFooter, isModalOpen, displaySelectionButtons } = this.context;
		if (renderStickyFooter && stickyFooter && !isModalOpen && displaySelectionButtons) {
			return (
				<View key={"sticky"} style={[FooterStyle.container, this.context.customFooterStyle]}>
					{this.context.renderStickyFooter(Const.HEIGHT, this.context.onBackRequest)}
				</View>
			)
		}
		return null;
	}
}
