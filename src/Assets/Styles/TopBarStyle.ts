import { StyleSheet, ViewStyle, ImageStyle } from "react-native";

import { Const } from "@Constants";

export const TopBarStyle = StyleSheet.create({
	container: {
		backgroundColor: 'whitesmoke',
		minHeight: Const.HEIGHT,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingHorizontal: 10
	} as ViewStyle,
	backBtnImageStyle: {
		width: 20,
		height: 20,
	} as ImageStyle,
	backBtnStyle: {
		flex: 1,
	} as ViewStyle
});
