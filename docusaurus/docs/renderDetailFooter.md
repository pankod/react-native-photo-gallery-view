---
id: renderDetailFooter
title: renderDetailFooter
sidebar_label: renderDetailFooter
---

# Usage
bu alanda verilen component, detay ekranı footer alanında gösterilir, 
geri dönüş parametreleri, görüntülenen içerik bilgisi ve back tuşu eventidir.

<br/>

<div class="img-container">
	<img src="../img/ios_renderDetailFooter.png" height="400"> <img src="../img/android_renderDetailFooter.png" height="400">
</div>

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	renderDetailFooter={(media, backFn) => this.renderDetailFooter(media, backFn)}
/>

renderDetailFooter(media, backFn) {
	return (
		<React.Fragment>
			<Button title={"Delete"} onPress={() => console.log(media)} />
			<Button title={"Back"} onPress={() => backFn()} />
		</React.Fragment>
	)
}
```
