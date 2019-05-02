// Global Imports
import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';

// Local Imports
import { TopBarStyle } from '@Styles';
import { ITopBarProps, IGalleryState, IGalleryProps } from "@Interfaces";
import Common from '@Provider';

export class TopBarComponent extends Component<ITopBarProps, {}> {

	static contextType = Common;

	public render(): JSX.Element {
		return (
			<Common.Consumer>
				{
					(context: IGalleryProps & IGalleryState) => (
						<View style={[TopBarStyle.container, context.customTopBarStyle]}>
							{this.backButtonRender()}
							{this.titleRender()}
						</View>
					)
				}
			</Common.Consumer>
		)
	}

	public titleRender(): JSX.Element {
		const { imageIndex, mediaList, isModalOpen, title, detailTitle, customMainTitle, customDetailTitle } = this.context;

		return isModalOpen ?
			customDetailTitle ? customDetailTitle(mediaList.length, imageIndex + 1) : <Text>{detailTitle}</Text> :
			customMainTitle ? customMainTitle(mediaList.length) : <Text>{title}</Text>

	}

	public backButtonRender(): JSX.Element {
		const { customTopBarBackButton } = this.context;
		if (customTopBarBackButton) {
			return customTopBarBackButton(this.context.onBackRequest)
		}

		return (
			<TouchableWithoutFeedback style={TopBarStyle.backBtnStyle} onPress={() => this.context.onBackRequest()}>
				<Image source={require('../Assets/Images/back.png')} style={TopBarStyle.backBtnImageStyle} />
			</TouchableWithoutFeedback>
		)
	}
}
