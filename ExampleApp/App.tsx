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
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, Button, View, ActivityIndicator, Image } from 'react-native';
import RNGallery from 'react-native-photo-gallery-view';


interface Props { }
export default class App extends Component<Props> {

	private list = require('./data.json');

	onBack(): void {
		console.warn('back key pressed...');
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<RNGallery
					mediaList={this.list}
					onBack={this.onBack.bind(this)}
					customTopBarStyle={{
						height: 50
					}}
					gridSize={3}
					renderStickyFooter={(height: number) => this.renderStickyFooter(height)}
					renderDetailButtons={(media: object) => this.renderDetailButtons(media)}
					onSelectionChanged={(media, index) => this.onSelectionChanged(media, index)}
					displaySelectionButtons={false}
					stickyFooter={true}
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
					// 	<Image
					// 		source={{ uri: media.photo }}
					// 		resizeMode={"contain"}
					// 		style={{ flex: 1, margin: 5, borderRadius: 20 }}
					// 	/>
					// }
					// customThumbnailImage={(media, index) =>
					// 	<Image
					// 		source={{ uri: media.thumb }}
					// 		style={{ flex: 1, borderRadius: 10 }}
					// 	/>
					// }
					renderCustomState={(media, index) => this.renderCustomState(media)}

				/>
			</SafeAreaView>
		);
	}

	renderCustomState(media: object): JSX.Element {
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

	onSelectionChanged(media: object, index: number): void {
		console.log(media, index);
	}

	renderStickyFooter(height: number): JSX.Element {
		return (
			<Button title={"Upload"} onPress={() => console.log("render stick footer 1. element", height)} />
		)
	}

	renderDetailButtons(media: object): JSX.Element {
		return (
			<React.Fragment>
				<Button title={"Delete"} onPress={() => console.log(media)} />
				<Button title={"Set as default"} onPress={() => console.log(media)} />
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
