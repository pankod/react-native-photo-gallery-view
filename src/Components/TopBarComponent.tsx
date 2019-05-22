// Global Imports
import React, { Component } from 'react';
import { Animated, View, TouchableWithoutFeedback, Image, Text } from 'react-native';

// Local Imports
import { TopBarStyle } from '@Styles';
import { ITopBarProps, IGalleryState, IGalleryProps } from "@Interfaces";
import Common from '@Provider';
import { Const } from '@Constants';

export class TopBarComponent extends Component<ITopBarProps, {}> {

	static contextType = Common;
	public animatedY = new Animated.Value(Const.ANIMATEDY);

	public render(): JSX.Element {
		return (
			<Common.Consumer>
				{
					(context: IGalleryProps & IGalleryState) => (
						<View style={[TopBarStyle.container, context.customTopBarStyle]}>
							{this.backButtonRender()}
							<Animated.View style={{
								transform: [{ translateX: this.animatedY }]
							}}>{this.titleRender()}</Animated.View>
						</View>
					)
				}
			</Common.Consumer>
		)
	}

	public componentDidMount(): void {
		Animated.timing(this.animatedY, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true
		}).start();
	}

	public titleRender(): JSX.Element {
		const {
			imageIndex,
			items,
			isModalOpen,
			title,
			detailTitle,
			customMainTitle,
			customDetailTitle,
			selected,
			customSelectedTitle
		} = this.context;

		if (selected && selected.length > 0) {
			return customSelectedTitle ? customSelectedTitle(selected.length) : <Text>{selected.length} selected</Text>
		}

		return isModalOpen ?
			customDetailTitle ? customDetailTitle(items.length, imageIndex + 1) : <Text>{detailTitle}</Text> :
			customMainTitle ? customMainTitle(items.length) : <Text>{title}</Text>
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
