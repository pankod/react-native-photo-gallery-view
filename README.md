# React Native Photo Gallery View

** yazılacak

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-native-photo-gallery-view.svg)](https://www.npmjs.com/package/react-native-photo-gallery-view)
[![npm downloads per month](https://img.shields.io/npm/dm/react-native-photo-gallery-view.svg)](https://www.npmjs.com/package/react-native-photo-gallery-view)
[![dependencies Status](https://david-dm.org/pankod/react-native-photo-gallery-view/status.svg)](https://david-dm.org/pankod/react-native-photo-gallery-view)
[![dev-dependencies Status](https://david-dm.org/pankod/react-native-photo-gallery-view/dev-status.svg)](https://david-dm.org/pankod/react-native-photo-gallery-view?type=dev)
[![Build Status](https://travis-ci.com/pankod/react-native-photo-gallery-view.svg?branch=master)](https://travis-ci.com/pankod/react-native-photo-gallery-view)

</div>
<br/>

<div align="center">
 <img src="screenshots/ios.gif" width="200" height="400">
 <img src="screenshots/android.gif" width="200" height="400">
</div>

<br/>


<br/>
<div align="center"> <h3>React Native Photo Gallery View<h3></div>
<div align="center">React Native Module to select and view gallery for photos</div>
<div align="center">
  <sub>Created by <a href="https://www.pankod.com">Pankod</a></sub>
</div>
<br/>



## Stores Supported:
| **Apple App Store**  |   **Google Play**  |  
:--------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | 
| **✓** | **✓** | 
| <img src="https://developer.apple.com/assets/elements/icons/app-store/app-store-128x128_2x.png" height="60" > | <img src="https://elegal.ph/site/wp-content/uploads/2017/08/google-play-icon-logo-favicon-1632434.svg_.jpg" height="60" float="right"> | 






## Getting started
```
$ npm install react-native-photo-gallery-view --save
```

or

```
$ yarn add react-native-photo-gallery-view
```

<!-- ## Usage -->


## Example
```javascript
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, Button, View, ActivityIndicator, Image } from 'react-native';
import RNGallery from 'react-native-photo-gallery-view';

const list = require('./data.json');

export default class example extends Component {

	public onBack(): void {
		console.warn('back key pressed...');
	}
	
	public render(): JSX.Element {
		return (
			<RNGallery
				mediaList={this.list}
				onBack={this.onBack.bind(this)}
				customTopBarStyle={{
					height: 50
				}}
				customFooterStyle={{
					height: 50
				}}
				gridSize={3}
				renderStickyFooter={(height: number) => this.renderStickyFooter(height)}
				renderDetailButtons={(media: object) => this.renderDetailButtons(media)}
				onSelectionChanged={(media, index) => this.onSelectionChanged(media, index)}
				displaySelectionButtons={false}
				stickyFooter={true}
				renderCustomState={(media, index) => this.renderCustomState(media)}
			/>
	);

	public renderCustomState(media: object): JSX.Element {
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

	public onSelectionChanged(media: object, index: number): void {
		console.log(media, index);
	}

	public renderStickyFooter(height: number, action: Function): JSX.Element {
		return (
			<Button title={"Upload"} onPress={() => console.log("render stick footer 1. element", height)} />
		)
	}

	public renderDetailButtons(media: object, action: Function): JSX.Element {
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

```

<br/>

## Options
<br/>

| Properties | Type | Description | Default |
|------------|-------------------------------------|-------------|----------------------------------------------------------------|		
| **mediaList** <br> **required* | `array`  | Array of media items | `"[{caption, id, photo, state, thumb]"` | 
| **displaySelectionButtons** | `boolean`  | Enable/Disable selection mode | `"false"` | 
| **stickyFooter** | `boolean`  | Enable/Disable for renderStickyFooter custom component | `"true"` | 
| **customTopBarStyle**   | `style` | Custom style for top bar |  | 
| **customFooterStyle**   | `style` | Custom style for footer bar |  | 
| **gridSize**   | `number` | How many media items showing side by side | `"3"` | 
| **onBack**   | `Function` |  Fired when the back key is pressed | |
| **renderStickyFooter**   | `Function` | Custom component for selection mode in footer  | `"(footerHeight, backAction) => <View .../>"` |
| **renderDetailButtons**   | `Function` | Custom component for view mode in footer  | `"(media, backAction) => <View .../>"` |
| **renderCustomState**   | `Function` | Custom component for viewing each media item overlay in main scene | `"(media, index) => <View .../>"` |
| **customTopBarBackButton**   | `Function` | Custom component for back button in top bar  |  |
| **customMainTitle**   | `Function` | Custom component for main scene title in top bar  | `"(totalImages) => <Text>{totalImages} Photos</Text>"` |
| **customCheckedView**   | `Function` | Custom component for selected view when media item selected  |  |
| **customImageComponent**   | `Function` | Custom component for view media item  | `"(media, index) => <Image .../>"` |
| **customThumbnailImage**   | `Function` | Custom component for thumbnail media item in main scene | `"(media, index) => <Image .../>"` |
| **customSelectedTitle**   | `Function` | Custom component for main scene title when selected mode in top bar  | `"(totalSelected) => <Text>{totalSelected} selected photos...</Text>"` |
| **customDetailTitle**   | `Function` | Custom component for detail scene title in top bar  | `"(totalImages, photoIndex) => <Text>{photoIndex} of {totalImages}</Text>"` |
| **onSelectionChanged** <br> **required* | `Function`  | Returns selected item object | `"{caption, id, photo, state, thumb}"` | 


#### Releases

- 1.0.0 - Initial release


