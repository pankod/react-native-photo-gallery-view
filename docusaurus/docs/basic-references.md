---
id: basic-references
title: Basic References
sidebar_label: Basic References
---

```
const list = [];

<RNGallery
	items={list}
	onClose={() => console.log("back key pressed.")}
	topBarStyle={{
		height: 50,
		backgroundColor: "#ddd"
	}}
	footerStyle={{
		height: 50,
		backgroundColor: "#ddd"
	}}
	columns={3}
	enableItemSelection={false}
/>
```

## items
Listenecek içerikler array tipinde bu props ile verilecek

## onClose
Geri tuşuna basıldığında çalıştırılacka method buradan tetiklenir.

## topBarStyle
Uygulamanın top bar stilini buradan değiştirebilirsiniz.

## footerStyle
Uygulamanın footer bar stilini buradan değiştirebilirsiniz.

## columns
Grid kolon sayısını buradan belirtebilirsiniz, varsayılan 3

## enableItemSelection
Viewing modedan çıkar ve çoklu seçim ekranı çalışır.
