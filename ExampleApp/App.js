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

	onBack() {
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
								mediaList={list}
								onBack={this.onBack.bind(this)}
								customTopBarStyle={{
									height: 50
								}}
								customFooterStyle={{
									height: 50
								}}
								gridSize={1}
								renderStickyFooter={(height) => this.renderStickyFooter(height)}
								renderDetailButtons={(media, action) => this.renderDetailButtons(media, action)}
								onSelectionChanged={(media, index) => this.onSelectionChanged(media, index)}
								displaySelectionButtons={false}
								stickyFooter={true}
								// customPreviewComponent={(media) => this.customPreviewComponent(media)}
								// customTopBarBackButton={(action) => <Button onPress={() => action()} title={"Back"} />}
								// customMainTitle={(totalImages) => <Text>{totalImages} Photos</Text>}
								// customSelectedTitle={(totalSelected) => <Text>{totalSelected} selected photos...</Text>}
								// customDetailTitle={(totalImages, photoIndex) => <Text>{photoIndex} of {totalImages}</Text>}
								// customCheckedView={() => (
								// 	<View style={{ position: 'absolute', right: 10, top: 10, zIndex: 2 }}>
								// 		<Text>Checked</Text>
								// 	</View>
								// )}
								// customImageComponent={(media, index) =>
								// 	media && <Animated.Image
								// 		source={{ uri: media.photo }}
								// 		resizeMode={"contain"}
								// 		style={{ flex: 1, margin: 5, borderRadius: 20 }}
								// 	/>
								// }
								// customThumbnailImage={(media, index) =>
								// 	<Image
								// 		source={{ uri: media.thumb }}
								// 		style={{ flex: 1, borderRadius: 50 }}
								// 	/>
								// }
								renderCustomState={(media, index) => this.renderCustomState(media)}

							/>
						</SafeAreaView>
					)
				}
			</Fragment>
		);
	}

	customPreviewComponent(media) {
		return (
			<View style={{ flex: 1, backgroundColor: '#ddd', width: "100%", height: "100%" }}>
				<Image style={{ flex: 1, width: "100%" }} resizeMode={"contain"} source={{ uri: media.photo }} />
			</View>
		)
	}

	renderCustomState(media) {
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

	onSelectionChanged(media, index) {
		console.log(media, index);
	}

	renderStickyFooter(height) {
		return (
			<Button title={"Upload"} onPress={() => console.log("render sticky footer 1. element", height)} />
		)
	}

	renderDetailButtons(media, action) {
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
