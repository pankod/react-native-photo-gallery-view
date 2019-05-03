import { StyleSheet, ViewStyle, TextStyle, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const AlbumStyle = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
	} as ViewStyle,
	captionText: {
		paddingVertical: 10,
		paddingHorizontal: 10
	} as TextStyle,
	modalContainer: {
		backgroundColor: '#000',
		flex: 1,
	} as ViewStyle
});
