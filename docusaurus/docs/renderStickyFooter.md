---
id: renderStickyFooter
title: renderStickyFooter
sidebar_label: renderStickyFooter
---

# Usage
bu alanda verilen component, listeleme ekranında çoklu seçim aktifken footer alanında gösterilir, footer alanının açık olması için stickyFooter ve displaySelectionButtons propsları true olmalı

<br/>

<div class="img-container">
	<img src="../img/ios_renderStickyFooter.png" height="400"> <img src="../img/android_renderStickyFooter.png" height="400">
</div>

<br/>

```
<RNGallery
	mediaList={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	renderStickyFooter={(height) => this.renderStickyFooter(height)}
	stickyFooter={true}
	displaySelectionButtons={true}
/>

renderStickyFooter(height) {
	return (
		<Button title={"Upload"} onPress={() => console.log("Pressed", height)} />
	)
}
```
