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
    },
    checkedContainer: {
        width: 20,
        height: 20,
        backgroundColor: 'whitesmoke',
        borderRadius: 20,
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkedImage: {
        width: 10,
        height: 10,
    },
    checkedBorder: {
        borderWidth: 0.5,
        borderColor: 'green'
    }
});
//# sourceMappingURL=AlbumStyle.js.map