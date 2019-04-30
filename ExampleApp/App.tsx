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
import { Platform, StyleSheet, Text, View } from 'react-native';

import RNGallery from 'react-native-photo-gallery-view';


interface Props { }
export default class App extends Component<Props> {
	render() {
		return (
			<RNGallery mediaList={[]} />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});
