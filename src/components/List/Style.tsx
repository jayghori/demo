import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: wp(2),
        padding: wp(5),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#D4D7D9',
        // justifyContent: 'space-between'
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 10
    },
    checkTitle: {
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 10,
        textDecorationLine: 'line-through'
    },
    button: {
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 5,
        marginLeft: 2
    },
    subView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});
