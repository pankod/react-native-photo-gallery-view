---
id: displaySelectionButtons
title: displaySelectionButtons
sidebar_label: displaySelectionButtons
---

# Usage
Listeme ekranında çoklu seçim modunu aktifleştirir.

<br/>

<div class="img-container">
	<img src="../img/ios_displaySelectionButtons.png" height="400"> <img src="../img/android_displaySelectionButtons.png" height="400">
</div>

<br/>

```
<RNGallery
	items={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	onSelectionChanged={(media, index) => this.onSelectionChanged(media, index)}
	stickyFooter={true}
	displaySelectionButtons={true}
/>

onSelectionChanged(media, index) {
	console.log(media, index);
}
```
