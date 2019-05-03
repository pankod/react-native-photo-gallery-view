// Global Imports
import React, { PureComponent } from 'react'
import { Animated } from 'react-native'

// Local Imports
import { IBlurImageProps } from '@Interfaces';
import { BlurImageStyle } from '@Styles';

export class BlurImage extends PureComponent<IBlurImageProps> {

	public imageAnimated = new Animated.Value(0);

	private onImageLoad(): void {
		Animated.timing(this.imageAnimated, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true
		}).start();
	}

	render() {
		return (
			<React.Fragment>
				<Animated.Image
					{...this.props}
					style={[BlurImageStyle.image, { opacity: this.imageAnimated }]}
					onLoad={this.onImageLoad.bind(this)}
					blurRadius={1}
				/>
			</React.Fragment>
		)
	}
}
