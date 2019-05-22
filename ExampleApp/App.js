/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import { Animated, StyleSheet, SafeAreaView, Text, Button, View, ActivityIndicator, ImageBackground, Image } from 'react-native';
import RNGallery from 'react-native-photo-gallery-view';
import { Fragment } from 'react';

console.disableYellowBox = true;

const list = require('./data.json');

export default class App extends Component {

	state = {
		intro: true
	}

	onClose() {
		console.warn('back key pressed...');
	}

	componentDidMount() {
		// for intro :)
		setTimeout(() => {
			this.setState({ intro: false });
		}, 2000);
	}

	render() {
		return (
			<Fragment>
				{this.state.intro ? (
					<ImageBackground style={{
						flex: 1,
						backgroundColor: '#F9D92D',
						top: 0,
						left: 0,
						justifyContent: 'center',
						alignItems: 'center',
						zIndex: 1
					}} resizeMode={'contain'} source={require('./logo.png')}>
					</ImageBackground>
				) : (
						<SafeAreaView style={{ flex: 1 }}>
							<RNGallery
								items={list}
								onClose={this.onClose.bind(this)}
								topBarStyle={{
									height: 50
								}}
								footerStyle={{
									height: 50
								}}
								columns={3}
								renderGalleryFooter={(height) => this.renderGalleryFooter(height)}
								renderDetailFooter={(media, action) => this.renderDetailFooter(media, action)}
								onSelectItem={(media, index) => this.onSelectItem(media, index)}
								enableItemSelection={false}
								renderPreview={(media) => this.renderPreview(media)}
								// renderBackButton={(action) => <Button onPress={() => action()} title={"Back"} />}
								// renderGalleryTitleBar={(totalImages) => <Text>{totalImages} Photos</Text>}
								// customSelectedTitle={(totalSelected) => <Text>{totalSelected} selected photos...</Text>}
								// renderDetailTitleBar={(totalImages, photoIndex) => <Text>{photoIndex} of {totalImages}</Text>}
								// renderCheckedIcon={() => (
								// 	<View style={{ position: 'absolute', right: 10, top: 10, zIndex: 2 }}>
								// 		<Text>Checked</Text>
								// 	</View>
								// )}
								// renderDetailImage={(media, index) =>
								// 	media && <Animated.Image
								// 		source={{ uri: media.original }}
								// 		resizeMode={"contain"}
								// 		style={{ flex: 1, margin: 5, borderRadius: 20 }}
								// 	/>
								// }
								// renderThumbnailImage={(media, index) =>
								// 	<Image
								// 		source={{ uri: media.thumbnail }}
								// 		style={{ flex: 1, borderRadius: 50 }}
								// 	/>
								// }
								renderThumbnailOverlay={(media, index) => this.renderThumbnailOverlay(media)}

							/>
						</SafeAreaView>
					)
				}
			</Fragment>
		);
	}

	renderPreview(media) {
		return (
			<View style={{ flex: 1, backgroundColor: '#ddd', width: "100%", height: "100%" }}>
				<Image style={{ flex: 1, width: "100%" }} resizeMode={"contain"} source={{ uri: media.original }} />
			</View>
		)
	}

	renderThumbnailOverlay(media) {
		if (media.state !== 'Approved') {
			return (
				<View style={{
					alignItems: 'center',
					backgroundColor: 'white',
					bottom: 0,
					justifyContent: 'center',
					left: 0,
					opacity: 0.5,
					position: 'absolute',
					right: 0,
					top: 0,
					zIndex: 1
				}}>
					{media.state === 'Loading' &&
						<ActivityIndicator size={"large"} />
					}
					{media.state !== 'Loading' &&
						<Text style={{ color: media.state === 'Deleted' ? 'red' : 'black' }}>
							{media.state}
						</Text>}
				</View>
			);
		}

		return null;
	}

	onSelectItem(media, index) {
		console.log(media, index);
	}

	renderGalleryFooter(height) {
		return (
			<Button title={"Upload"} onPress={() => console.log("render sticky footer 1. element", height)} />
		)
	}

	renderDetailFooter(media, action) {
		return (
			<React.Fragment>
				<Button title={"Delete"} onPress={() => console.log(media)} />
				<Button title={"Back"} onPress={() => action()} />
			</React.Fragment>
		)
	}
}

const styles = StyleSheet.create({
	btn: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		padding: 5
	},
	green: {
		backgroundColor: 'green'
	},
	yellow: {
		backgroundColor: 'yellow'
	}
});
