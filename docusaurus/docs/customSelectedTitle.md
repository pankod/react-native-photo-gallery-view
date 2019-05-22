---
id: customSelectedTitle
title: customSelectedTitle
sidebar_label: customSelectedTitle
---

# Usage
Çoklu seçim aktifken listeme ekranında bulunan üst barda sağ alana yazılacak component, toplam seçilen görsel sayısını döndürür.

<div class="img-container">
	<img src="../img/ios_displaySelectionButtons.png" height="400"> <img src="../img/android_displaySelectionButtons.png" height="400">
</div>

```
<RNGallery
	items={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	customSelectedTitle={(totalSelected) => <Text>{totalSelected} selected photos...</Text>}
/>

```
