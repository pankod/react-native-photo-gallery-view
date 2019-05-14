---
id: customImageComponent
title: customImageComponent
sidebar_label: customImageComponent
---

# Usage
Detay ekranında gösterim için custom image component, gösterilen içeriğin bilgisi ve indeksini geri döndürür.

<br/>

<div class="img-container">
	<img src="../img/ios_customImageComponent.png" height="400"> <img src="../img/android_customImageComponent.png" height="400">
</div>

<br/>

```
<RNGallery
	mediaList={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	customImageComponent={(media, index) =>
		media && <Image
			source={{ uri: media.photo }}
			resizeMode={"cover"}
			style={{ flex: 1, margin: 5, borderRadius: 20 }}
		/>
	}
/>

```
