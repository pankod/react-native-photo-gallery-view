---
id: onSelectItem
title: onSelectItem
sidebar_label: onSelectItem
---

# Usage
Listeme ekranında çoklu seçim aktifken seçilen nesnelerin bilgilerini ve indeksini geri döndürür.

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	onSelectItem={(media, index) => this.onSelectItem(media, index)}
	enableItemSelection={true}
/>

onSelectItem(media, index) {
	console.log(media, index);
}
```
