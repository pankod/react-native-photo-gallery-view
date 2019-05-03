import { StyleSheet } from "react-native";
import { Const } from "../../Constants";
export const TopBarStyle = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        minHeight: Const.HEIGHT,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        zIndex: 2
    },
    backBtnImageStyle: {
        width: 20,
        height: 20,
    },
    backBtnStyle: {
        flex: 1,
    }
});
//# sourceMappingURL=TopBarStyle.js.map