---
id: renderCustomState
title: renderCustomState
sidebar_label: renderCustomState
---

# Usage
Ana ekranda listenen görsellerin üzerine gelecek custom overlay component, liste nesnesinin media bilgilerini döndürür

<br/>

<div class="img-container">
	<img src="../img/ios_renderCustomState.png" height="400"> <img src="../img/android_renderCustomState.png" height="400">
</div>

<br/>

```
<RNGallery
	items={list}
	onBack={this.onBack.bind(this)}
	renderCustomState={(media, index) => this.renderCustomState(media)}
/>

renderCustomState(media) {
	if (media.state !== 'Approved') {
		return (
			<View style={{
				alignItems: 'center',
				backgroundColor: 'white',
				bottom: 0,
				justifyContent: 'center',
				left: 0,
				opacity: 0.5,
				position: 'absolute',
				right: 0,
				top: 0,
				zIndex: 1
			}}>
				{media.state === 'Loading' &&
					<ActivityIndicator size={"large"} />
				}
				{media.state !== 'Loading' &&
					<Text style={{ color: media.state === 'Deleted' ? 'red' : 'black' }}>
						{media.state}
					</Text>}
			</View>
		);
	}

	return null;
}

```
