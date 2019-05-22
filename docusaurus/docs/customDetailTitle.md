---
id: customDetailTitle
title: customDetailTitle
sidebar_label: customDetailTitle
---

# Usage
Detay görüntüleme ekranında üst barda bulunan sağ alanda bulunan custom component, toplam görsel sayısı ve seçili olan görselin indeksini döndürür.

<br/>

```
<RNGallery
	items={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	customDetailTitle={(totalImages, photoIndex) => <Text>{photoIndex} of {totalImages}</Text>}
/>

```
