---
id: stickyFooter
title: stickyFooter
sidebar_label: stickyFooter
---

# Usage
footer alanında gösterilen custom componentlerin gösterilmesini açıp kapatır.

<br/>

<div class="img-container">
	<img src="../img/ios_renderGalleryFooter.png" height="400"> <img src="../img/android_renderGalleryFooter.png" height="400">
</div>

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	renderGalleryFooter={(height) => this.renderGalleryFooter(height)}
	stickyFooter={true}
/>

renderGalleryFooter(height) {
	return (
		<Button title={"Upload"} onPress={() => console.log("Pressed", height)} />
	)
}
```
