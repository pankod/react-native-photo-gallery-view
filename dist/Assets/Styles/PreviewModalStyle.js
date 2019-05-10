import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const outer = 8;
export const PreviewModalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 3,
    },
    imagePreview: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "rgba(0,0,0,.5)",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        width: width - outer * 2,
        height: width - outer * 2,
        justifyContent: "center",
        alignItems: "center"
    }
});
//# sourceMappingURL=PreviewModalStyle.js.map