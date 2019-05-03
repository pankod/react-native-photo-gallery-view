import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const AlbumStyle = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },
    captionText: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    modalContainer: {
        backgroundColor: '#000',
        flex: 1,
    }
});
//# sourceMappingURL=AlbumStyle.js.map