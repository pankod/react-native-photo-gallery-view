---
id: customTopBarBackButton
title: customTopBarBackButton
sidebar_label: customTopBarBackButton
---

# Usage
Üst barda bulunan geri tuşu için custom component eklenebilir

<br/>

```
<RNGallery
	mediaList={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	customTopBarBackButton={(action) => <Button onPress={() => action()} title={"Back"} />}
/>

```
