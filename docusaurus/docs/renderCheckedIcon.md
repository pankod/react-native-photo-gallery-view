---
id: renderCheckedIcon
title: renderCheckedIcon
sidebar_label: renderCheckedIcon
---

# Usage
Ana ekran çoklu seçim aktifken, seçili görsellerde gösterilecek custom checked component.

<br/>

<div class="img-container">
	<img src="../img/ios_renderCheckedIcon.png" height="400"> <img src="../img/android_renderCheckedIcon.png" height="400">
</div>

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	renderCheckedIcon={() => (
		<View style={{ position: 'absolute', right: 10, top: 10, zIndex: 2 }}>
			<Text>Checked</Text>
		</View>
	)}
/>

```
