---
id: setup
title: Setup
sidebar_label: Setup
---

The following assumes you have node and yarn installed.

## Install
```
$ npm install react-native-photo-gallery-view --save
```

or

```
$ yarn add react-native-photo-gallery-view
```

## Basic configuration

```
import RNGallery from 'react-native-photo-gallery-view';

const list = [];

<RNGallery
	items={list}
	onClose={()=> console.warn('back key pressed...')}
	columns={3}
/>
```

<div class="img-container">
<img src="../img/ios_main.png" height="400"> <img src="../img/android_main.png" height="400">
</div>
