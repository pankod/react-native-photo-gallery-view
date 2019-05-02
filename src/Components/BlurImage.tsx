// Global Imports
import React, { PureComponent } from 'react'
import { Animated, ImageProps } from 'react-native'

// Local Imports
import { IBlurImageProps } from '@Interfaces';

export class BlurImage extends PureComponent<IBlurImageProps> {

	public imageAnimated = new Animated.Value(0);

	private onImageLoad(): void {
		Animated.timing(this.imageAnimated, {
			toValue: 1,
			duration: 500,
		}).start();
	}

	render() {
		return (
			<React.Fragment>
				<Animated.Image
					{...this.props}
					style={{ flex: 1, opacity: this.imageAnimated }}
					onLoad={this.onImageLoad.bind(this)}
					blurRadius={1}
					onPartialLoad={true}
				/>
			</React.Fragment>
		)
	}
}
