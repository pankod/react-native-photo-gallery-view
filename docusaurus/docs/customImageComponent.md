---
id: renderDetailImage
title: renderDetailImage
sidebar_label: renderDetailImage
---

# Usage
Detay ekranında gösterim için custom image component, gösterilen içeriğin bilgisi ve indeksini geri döndürür.

<br/>

<div class="img-container">
	<img src="../img/ios_renderDetailImage.png" height="400"> <img src="../img/android_renderDetailImage.png" height="400">
</div>

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	renderDetailImage={(media, index) =>
		media && <Image
			source={{ uri: media.original }}
			resizeMode={"cover"}
			style={{ flex: 1, margin: 5, borderRadius: 20 }}
		/>
	}
/>

```
