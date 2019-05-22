---
id: customPreviewComponent
title: customPreviewComponent
sidebar_label: customPreviewComponent
---

# Usage
Listeme ekranında görsele uzun (longpress) basıldığında instagram tarzı ön izleme popupı çıkar, seçilen görselin bilgilerini geri döndürür.

<br/>

```
<RNGallery
	items={list}
	onBack={this.onBack.bind(this)}
	gridSize={3}
	customPreviewComponent={(media) => this.customPreviewComponent(media)}
/>

customPreviewComponent(media) {
	return (
		<View style={{ flex: 1, backgroundColor: '#ddd', width: "100%", height: "100%" }}>
			<Image style={{ flex: 1, width: "100%" }} resizeMode={"contain"} source={{ uri: media.photo }} />
		</View>
	)
}
```
