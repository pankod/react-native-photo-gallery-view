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

	private list = [{ "caption": "Quaresma oley oley oley", "id": "db1aa2ad-48a2-4882-b6e9-824c0224315f", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/db1/db1aa2ad-48a2-4882-b6e9-824c0224315f.jpg.jpg", "state": "Deleted", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/db1/db1aa2ad-48a2-4882-b6e9-824c0224315f.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "d9b0e2d3-d6cb-4d78-89b9-f35201683906", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/d9b/d9b0e2d3-d6cb-4d78-89b9-f35201683906.jpg.jpg", "state": "Loading", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/d9b/d9b0e2d3-d6cb-4d78-89b9-f35201683906.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "1360bf51-b236-4fa1-9a75-8f0d44218283", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/136/1360bf51-b236-4fa1-9a75-8f0d44218283.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/136/1360bf51-b236-4fa1-9a75-8f0d44218283.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "f0e7702b-e964-4882-89d8-6f1137082900", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/f0e/f0e7702b-e964-4882-89d8-6f1137082900.jpg.jpg", "state": "Deleted", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/f0e/f0e7702b-e964-4882-89d8-6f1137082900.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "6613c9db-903e-4b56-b922-7bebfff7af33", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/661/6613c9db-903e-4b56-b922-7bebfff7af33.jpg.jpg", "state": "Deleted", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/661/6613c9db-903e-4b56-b922-7bebfff7af33.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "c9e45750-db89-4f11-a1af-b498061d63c3", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/c9e/c9e45750-db89-4f11-a1af-b498061d63c3.jpg.jpg", "state": "Deleted", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/c9e/c9e45750-db89-4f11-a1af-b498061d63c3.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "cce10b50-0a24-4dff-9d66-fa01271b818b", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/cce/cce10b50-0a24-4dff-9d66-fa01271b818b.jpg.jpg", "state": "Loading", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/cce/cce10b50-0a24-4dff-9d66-fa01271b818b.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "d6d304f1-790e-43fd-8416-bdce43cc0ee2", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/d6d/d6d304f1-790e-43fd-8416-bdce43cc0ee2.jpg.jpg", "state": "Deleted", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/d6d/d6d304f1-790e-43fd-8416-bdce43cc0ee2.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }, { "caption": "", "id": "66bee9df-40ec-458e-b15f-7be0fb628581", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg", "state": "Approved", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/66b/66bee9df-40ec-458e-b15f-7be0fb628581.jpg.jpg?preset=siberthumb2x" }]

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
					customTopBarBackButton={(action) => <Button onPress={() => action()} title={"Back"} />}
					customMainTitle={(totalImages) => <Text>{totalImages} Photos</Text>}
					customSelectedTitle={(totalSelected) => <Text>{totalSelected} selected photos...</Text>}
					customDetailTitle={(totalImages, photoIndex) => <Text>{photoIndex} of {totalImages}</Text>}
					customCheckedView={() => (
						<View style={{ position: 'absolute', right: 10, top: 10, zIndex: 2 }}>
							<Text>Checked</Text>
						</View>
					)}
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
			<TouchableOpacity style={[styles.btn, styles.yellow]} onPress={() => console.log("render stick footer 1. element", height)}>
				<Text>Upload chosen</Text>
			</TouchableOpacity>
		)
	}

	renderDetailButtons(media: object): JSX.Element {
		return (
			<React.Fragment>
				<TouchableOpacity key={1} style={[styles.btn, styles.green]} onPress={() => console.log(media)}>
					<Text>Delete</Text>
				</TouchableOpacity>
				<TouchableOpacity key={2} style={[styles.btn, styles.yellow]} onPress={() => console.log(media)}>
					<Text>Set as default</Text>
				</TouchableOpacity>
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
