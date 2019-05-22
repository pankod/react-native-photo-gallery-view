---
id: renderBackButton
title: renderBackButton
sidebar_label: renderBackButton
---

# Usage
Üst barda bulunan geri tuşu için custom component eklenebilir

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	renderBackButton={(action) => <Button onPress={() => action()} title={"Back"} />}
/>

```
