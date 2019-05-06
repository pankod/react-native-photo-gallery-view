
import { StyleSheet, ImageStyle, ViewStyle } from "react-native";

export const BlurImageStyle = StyleSheet.create({
	image: {
		flex: 1
	} as ImageStyle,
	center: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		top: 0
	} as ViewStyle
});
