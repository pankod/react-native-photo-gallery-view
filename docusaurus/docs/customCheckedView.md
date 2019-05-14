---
id: customCheckedView
title: customCheckedView
sidebar_label: customCheckedView
---

# Usage
Ana ekran çoklu seçim aktifken, seçili görsellerde gösterilecek custom checked component.

<br/>

<div class="img-container">
	<img src="../img/ios_customCheckedView.png" height="400"> <img src="../img/android_customCheckedView.png" height="400">
</div>

<br/>

```
<RNGallery
	mediaList={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	customCheckedView={() => (
		<View style={{ position: 'absolute', right: 10, top: 10, zIndex: 2 }}>
			<Text>Checked</Text>
		</View>
	)}
/>

```
