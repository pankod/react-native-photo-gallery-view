// Global Imports
import React, { Component } from 'react';
import { Animated, View, TouchableWithoutFeedback, Image, Text } from 'react-native';

// Local Imports
import { TopBarStyle } from '@Styles';
import { ITopBarProps, IGalleryState, IGalleryProps } from "@Interfaces";
import Common from '@Provider';
import { Const } from '@Constants';
import { Animate } from '@Helpers';

export class TopBarComponent extends Component<ITopBarProps, {}> {

	static contextType = Common;
	public animatedY = new Animated.Value(Const.ANIMATEDY);

	public render(): JSX.Element {
		return (
			<Common.Consumer>
				{
					(context: IGalleryProps & IGalleryState) => (
						<View style={[TopBarStyle.container, context.topBarStyle]}>
							{this.backButtonRender()}
							<Animated.View style={{ transform: [{ translateX: this.animatedY }] }}>
								{this.titleRender()}
							</Animated.View>
						</View>
					)
				}
			</Common.Consumer>
		)
	}

	public componentDidMount(): void {
		Animate.timing(this.animatedY, {
			toValue: 0,
			duration: 500
		}).start();
	}

	public titleRender(): JSX.Element {
		const { imageIndex, items, isModalOpen, title, detailTitle, renderGalleryTitleBar, renderDetailTitleBar, selected, customSelectedTitle } = this.context;

		if (selected && selected.length > 0) {
			return customSelectedTitle ? customSelectedTitle(selected.length) : <Text>{selected.length} selected</Text>
		}

		return isModalOpen ?
			renderDetailTitleBar ? renderDetailTitleBar(items.length, imageIndex + 1) : <Text>{detailTitle}</Text> :
			renderGalleryTitleBar ? renderGalleryTitleBar(items.length) : <Text>{title}</Text>
	}

	public backButtonRender(): JSX.Element {
		const { renderBackButton } = this.context;
		if (renderBackButton) {
			return renderBackButton(this.context.onCloseRequest)
		}

		return (
			<TouchableWithoutFeedback style={TopBarStyle.backBtnStyle} onPress={() => this.context.onCloseRequest()}>
				<Image source={require('../Assets/Images/back.png')} style={TopBarStyle.backBtnImageStyle} />
			</TouchableWithoutFeedback>
		)
	}
}
