---
id: renderDetailTitleBar
title: renderDetailTitleBar
sidebar_label: renderDetailTitleBar
---

# Usage
Detay görüntüleme ekranında üst barda bulunan sağ alanda bulunan custom component, toplam görsel sayısı ve seçili olan görselin indeksini döndürür.

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	renderDetailTitleBar={(totalImages, photoIndex) => <Text>{photoIndex} of {totalImages}</Text>}
/>

```
