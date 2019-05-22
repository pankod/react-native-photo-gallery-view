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
	onSelectItem={(item, index) => this.onSelectItem(item, index)}
	enableItemSelection={true}
/>

onSelectItem(item, index) {
	console.log(item, index);
}
```
