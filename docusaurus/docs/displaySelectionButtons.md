---
id: enableItemSelection
title: enableItemSelection
sidebar_label: enableItemSelection
---

# Usage
Listeme ekranında çoklu seçim modunu aktifleştirir.

<br/>

<div class="img-container">
	<img src="../img/ios_enableItemSelection.png" height="400"> <img src="../img/android_enableItemSelection.png" height="400">
</div>

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	onSelectionChanged={(media, index) => this.onSelectionChanged(media, index)}
	stickyFooter={true}
	enableItemSelection={true}
/>

onSelectionChanged(media, index) {
	console.log(media, index);
}
```
