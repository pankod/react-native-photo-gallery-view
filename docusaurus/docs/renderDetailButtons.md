---
id: renderDetailButtons
title: renderDetailButtons
sidebar_label: renderDetailButtons
---

# Usage
bu alanda verilen component, detay ekranı footer alanında gösterilir, footer alanının açık olması için stickyFooter propsu true olmalı, 
geri dönüş parametreleri, görüntülenen içerik bilgisi ve back tuşu eventidir.

<br/>

<div class="img-container">
	<img src="../img/ios_renderDetailButtons.png" height="400"> <img src="../img/android_renderDetailButtons.png" height="400">
</div>

<br/>

```
<RNGallery
	mediaList={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	renderDetailButtons={(media, backFn) => this.renderDetailButtons(media, backFn)}
	stickyFooter={true}
/>

renderDetailButtons(media, backFn) {
	return (
		<React.Fragment>
			<Button title={"Delete"} onPress={() => console.log(media)} />
			<Button title={"Back"} onPress={() => backFn()} />
		</React.Fragment>
	)
}
```
