---
id: customMainTitle
title: customMainTitle
sidebar_label: customMainTitle
---

# Usage
Listeme ekranında bulunan üst barda sağ alana yazılacak custom component, toplam görsel değerini döndürür.

<br/>

```
<RNGallery
	items={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	customMainTitle={(totalImages) => <Text>{totalImages} Photos</Text>}
/>

```
