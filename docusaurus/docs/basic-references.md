---
id: basic-references
title: Basic References
sidebar_label: Basic References
---

```
const list = [];

<RNGallery
	items={list}
	onBack={() => console.log("back key pressed.")}
	customTopBarStyle={{
		height: 50,
		backgroundColor: "#ddd"
	}}
	customFooterStyle={{
		height: 50,
		backgroundColor: "#ddd"
	}}
	gridSize={3}
	displaySelectionButtons={false}
	stickyFooter={true}
/>
```

## items
Listenecek içerikler array tipinde bu props ile verilecek

## onBack
Geri tuşuna basıldığında çalıştırılacka method buradan tetiklenir.

## customTopBarStyle
Uygulamanın top bar stilini buradan değiştirebilirsiniz.

## customFooterStyle
Uygulamanın footer bar stilini buradan değiştirebilirsiniz.

## gridSize
Grid kolon sayısını buradan belirtebilirsiniz, varsayılan 3

## displaySelectionButtons
Viewing modedan çıkar ve çoklu seçim ekranı çalışır.

## stickyFooter
Footer alanında butonları on/off 
