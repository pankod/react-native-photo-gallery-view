---
id: renderGalleryTitleBar
title: renderGalleryTitleBar
sidebar_label: renderGalleryTitleBar
---

# Usage
Listeme ekranında bulunan üst barda sağ alana yazılacak custom component, toplam görsel değerini döndürür.

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	renderGalleryTitleBar={(totalImages) => <Text>{totalImages} Photos</Text>}
/>

```
