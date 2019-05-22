# React Native Photo Gallery View

** yazılacak

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-native-photo-gallery-view.svg)](https://www.npmjs.com/package/react-native-photo-gallery-view)
[![npm downloads per month](https://img.shields.io/npm/dm/react-native-photo-gallery-view.svg)](https://www.npmjs.com/package/react-native-photo-gallery-view)
[![dependencies Status](https://david-dm.org/pankod/react-native-photo-gallery-view/status.svg)](https://david-dm.org/pankod/react-native-photo-gallery-view)
[![dev-dependencies Status](https://david-dm.org/pankod/react-native-photo-gallery-view/dev-status.svg)](https://david-dm.org/pankod/react-native-photo-gallery-view?type=dev)
[![Build Status](https://travis-ci.com/pankod/react-native-photo-gallery-view.svg?branch=master)](https://travis-ci.com/pankod/react-native-photo-gallery-view)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/pankod/react-native-photo-gallery-view/develop.svg?style=flat-square)](https://codecov.io/gh/pankod/react-native-photo-gallery-view/)
[![Maintainability](https://api.codeclimate.com/v1/badges/6c7bbc069e594e25d014/maintainability)](https://codeclimate.com/github/pankod/react-native-photo-gallery-view/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6c7bbc069e594e25d014/test_coverage)](https://codeclimate.com/github/pankod/react-native-photo-gallery-view/test_coverage)
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
import { StyleSheet, SafeAreaView, Text, Button, View, ActivityIndicator, ImageBackground } from 'react-native';
import RNGallery from 'react-native-photo-gallery-view';

const list = require('./data.json'); // browse ExampleApp folder

export default class example extends Component {

	public onClose(): void {
		console.warn('back key pressed...');
	}
	
	public render(): JSX.Element {
		return (
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
				renderGalleryFooter={(height: number) => this.renderGalleryFooter(height)}
				renderDetailFooter={(media: object) => this.renderDetailFooter(media)}
				onSelectionChanged={(media, index) => this.onSelectionChanged(media, index)}
				enableItemSelection={false}
				stickyFooter={true}
				renderThumbnailOverlay={(media, index) => this.renderThumbnailOverlay(media)}
			/>
	);

	public renderThumbnailOverlay(media: object): JSX.Element {
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

	public renderGalleryFooter(height: number, action: Function): JSX.Element {
		return (
			<Button title={"Upload"} onPress={() => console.log("render stick footer 1. element", height)} />
		)
	}

	public renderDetailFooter(media: object, action: Function): JSX.Element {
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
| **items** <br> **required* | `array`  | Array of media items | `"[{caption, id, photo, state, thumb]"` | 
| **enableItemSelection** | `boolean`  | Enable/Disable selection mode | `"false"` | 
| **stickyFooter** | `boolean`  | Enable/Disable for renderGalleryFooter custom component | `"true"` | 
| **topBarStyle**   | `style` | Custom style for top bar |  | 
| **footerStyle**   | `style` | Custom style for footer bar |  | 
| **columns**   | `number` | How many media items showing side by side | `"3"` | 
| **onClose**   | `Function` |  Fired when the back key is pressed | |
| **renderGalleryFooter**   | `Function` | Custom component for selection mode in footer  | `"(footerHeight, backAction) => <View .../>"` |
| **renderDetailFooter**   | `Function` | Custom component for view mode in footer  | `"(media, backAction) => <View .../>"` |
| **renderThumbnailOverlay**   | `Function` | Custom component for viewing each media item overlay in main scene | `"(media, index) => <View .../>"` |
| **renderBackButton**   | `Function` | Custom component for back button in top bar  |  |
| **renderGalleryTitleBar**   | `Function` | Custom component for main scene title in top bar  | `"(totalImages) => <Text>{totalImages} Photos</Text>"` |
| **renderCheckedIcon**   | `Function` | Custom component for selected view when media item selected  |  |
| **renderDetailImage**   | `Function` | Custom component for view media item  | `"(media, index) => <Image .../>"` |
| **renderThumbnailImage**   | `Function` | Custom component for thumbnail media item in main scene | `"(media, index) => <Image .../>"` |
| **customSelectedTitle**   | `Function` | Custom component for main scene title when selected mode in top bar  | `"(totalSelected) => <Text>{totalSelected} selected photos...</Text>"` |
| **renderPreview**   | `Function` | Custom component for preview modal when long press a item  | `"(item) => <Image source={item.original}/>"` |
| **renderDetailTitleBar**   | `Function` | Custom component for detail scene title in top bar  | `"(totalImages, photoIndex) => <Text>{photoIndex} of {totalImages}</Text>"` |
| **onSelectionChanged** <br> **required* | `Function`  | Returns selected item object | `"{caption, id, photo, state, thumb}"` | 


#### Releases

- 1.0.0 - Initial release


