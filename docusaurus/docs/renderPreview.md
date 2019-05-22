---
id: renderPreview
title: renderPreview
sidebar_label: renderPreview
---

# Usage
Listeme ekranında görsele uzun (longpress) basıldığında instagram tarzı ön izleme popupı çıkar, seçilen görselin bilgilerini geri döndürür.

<br/>

```
<RNGallery
	items={list}
	onClose={this.onClose.bind(this)}
	columns={3}
	renderPreview={(item) => this.renderPreview(item)}
/>

renderPreview(item) {
	return (
		<View style={{ flex: 1, backgroundColor: '#ddd', width: "100%", height: "100%" }}>
			<Image style={{ flex: 1, width: "100%" }} resizeMode={"contain"} source={{ uri: item.original }} />
		</View>
	)
}
```
