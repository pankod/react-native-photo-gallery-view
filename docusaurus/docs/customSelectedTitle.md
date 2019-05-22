---
id: customSelectedTitle
title: customSelectedTitle
sidebar_label: customSelectedTitle
---

# Usage
Çoklu seçim aktifken listeme ekranında bulunan üst barda sağ alana yazılacak component, toplam seçilen görsel sayısını döndürür.

<div class="img-container">
	<img src="../img/ios_enableItemSelection.png" height="400"> <img src="../img/android_enableItemSelection.png" height="400">
</div>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	customSelectedTitle={(totalSelected) => <Text>{totalSelected} selected photos...</Text>}
/>

```
