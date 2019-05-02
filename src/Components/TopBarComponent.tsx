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
							{
								context.isModalOpen ?
									<Text>{context.detailTitle}</Text> :
									<Text>{context.title}</Text>
							}
						</View>
					)
				}
			</Common.Consumer>
		)
	}

	public backButtonRender(): JSX.Element {
		const { customTopBarBackIcon } = this.context;
		if (customTopBarBackIcon) {
			return (
				<TouchableWithoutFeedback style={TopBarStyle.backBtnStyle} onPress={() => this.context.onBackRequest()}>
					<Image source={customTopBarBackIcon} />
				</TouchableWithoutFeedback>
			)
		}

		return (
			<TouchableWithoutFeedback style={TopBarStyle.backBtnStyle} onPress={() => this.context.onBackRequest()}>
				<Image source={require('../Assets/Images/back.png')} style={TopBarStyle.backBtnImageStyle} />
			</TouchableWithoutFeedback>
		)
	}
}
