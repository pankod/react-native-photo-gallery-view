---
id: customThumbnailImage
title: customThumbnailImage
sidebar_label: customThumbnailImage
---

# Usage
Listeleme ekranında gösterim için custom image component, gösterilen içeriğin bilgisi ve indeksini geri döndürür.

<br/>

<div class="img-container">
	<img src="../img/ios_customThumbnailImage.png" height="400"> <img src="../img/android_customThumbnailImage.png" height="400">
</div>

<br/>

```
<RNGallery
	mediaList={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	customThumbnailImage={(media, index) =>
		media && <Image
			source={{ uri: media.thumb }}
			style={{ flex: 1, borderRadius: 10 }}
		/>
	}
/>

```
