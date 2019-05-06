// Global Imports
import React, { PureComponent } from 'react'
import { Animated, ActivityIndicator } from 'react-native'

// Local Imports
import { IBlurImageProps, IBlurImageState, IGalleryProps, IGalleryState } from '@Interfaces';
import { BlurImageStyle } from '@Styles';
import Common from '@Provider';

export class BlurImage extends PureComponent<IBlurImageProps, IBlurImageState> {

	public imageAnimated = new Animated.Value(0);

	static contextType = Common;

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	private onImageLoad(): void {
		this.setState({
			loading: false
		}, () => {
			Animated.timing(this.imageAnimated, {
				toValue: 1,
				duration: 500,
				useNativeDriver: true
			}).start();
		});

	}

	public render(): JSX.Element {

		return (
			<Common.Consumer>
				{(context: IGalleryProps & IGalleryState) => (
					<React.Fragment>
						{this.state.loading && <ActivityIndicator style={BlurImageStyle.center} />}
						<Animated.Image
							{...this.props}
							style={[BlurImageStyle.image, { opacity: this.imageAnimated }]}
							onLoad={this.onImageLoad.bind(this)}
							blurRadius={1}
						/>
					</React.Fragment>
				)}
			</Common.Consumer>
		)
	}
}
