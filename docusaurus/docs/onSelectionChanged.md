---
id: onSelectionChanged
title: onSelectionChanged
sidebar_label: onSelectionChanged
---

# Usage
Listeme ekranında çoklu seçim aktifken seçilen nesnelerin bilgilerini ve indeksini geri döndürür.

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	onSelectionChanged={(media, index) => this.onSelectionChanged(media, index)}
	stickyFooter={true}
	enableItemSelection={true}
/>

onSelectionChanged(media, index) {
	console.log(media, index);
}
```
