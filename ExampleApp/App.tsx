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
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, Button, View, ActivityIndicator } from 'react-native';
import RNGallery from 'react-native-photo-gallery-view';


interface Props { }
export default class App extends Component<Props> {

	private list = [
		{
			"caption": "Galata, Istanbul",
			"id": 1,
			"photo": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
			"state": "Approved",
			"thumb": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
		},
		{
			"caption": "Manhattan skyline",
			"id": 2,
			"photo": "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
			"state": "Approved",
			"thumb": "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
		},
		{
			"caption": "Top of The Rock, New York, United States",
			"id": 3,
			"photo": "https://images.unsplash.com/photo-1499462817897-fe42dfba9131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
			"state": "Loading",
			"thumb": "https://images.unsplash.com/photo-1499462817897-fe42dfba9131?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
		},
		{
			"caption": "7am shot",
			"id": 4,
			"photo": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			"state": "Deleted",
			"thumb": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
		},
	]

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
