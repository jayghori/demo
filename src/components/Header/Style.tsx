import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        backgroundColor: '#434FB7',
        height: wp(25),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: wp(3),
    },
    text: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 17
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(15)
    }
});
