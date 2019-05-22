---
id: renderThumbnailImage
title: renderThumbnailImage
sidebar_label: renderThumbnailImage
---

# Usage
Listeleme ekranında gösterim için custom image component, gösterilen içeriğin bilgisi ve indeksini geri döndürür.

<br/>

<div class="img-container">
	<img src="../img/ios_renderThumbnailImage.png" height="400"> <img src="../img/android_renderThumbnailImage.png" height="400">
</div>

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	renderThumbnailImage={(media, index) =>
		media && <Image
			source={{ uri: media.thumbnail }}
			style={{ flex: 1, borderRadius: 10 }}
		/>
	}
/>

```
