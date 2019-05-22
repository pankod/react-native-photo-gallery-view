---
id: renderGalleryFooter
title: renderGalleryFooter
sidebar_label: renderGalleryFooter
---

# Usage
bu alanda verilen component, listeleme ekranında çoklu seçim aktifken footer alanında gösterilir, footer alanının açık olması için stickyFooter ve enableItemSelection propsları true olmalı

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
	enableItemSelection={true}
/>

renderGalleryFooter(height) {
	return (
		<Button title={"Upload"} onPress={() => console.log("Pressed", height)} />
	)
}
```
