---
id: stickyFooter
title: stickyFooter
sidebar_label: stickyFooter
---

# Usage
footer alanında gösterilen custom componentlerin gösterilmesini açıp kapatır.

<br/>

<div class="img-container">
	<img src="../img/ios_renderStickyFooter.png" height="400"> <img src="../img/android_renderStickyFooter.png" height="400">
</div>

<br/>

```
<RNGallery
	items={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	renderStickyFooter={(height) => this.renderStickyFooter(height)}
	stickyFooter={true}
/>

renderStickyFooter(height) {
	return (
		<Button title={"Upload"} onPress={() => console.log("Pressed", height)} />
	)
}
```
