import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#434FB7',
    },
    content: {
        backgroundColor: 'white',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    input: {
        height: 40,
        margin: 2,
        width: wp(80),
        borderWidth: 1,
        padding: 10,
        borderColor: '#D4D7D9',
        borderRadius: 5,
        marginTop: 10
    },
    addBtn: {
        height: 30,
        backgroundColor: '#434FB7',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10
    },
    btnText: {
        color: '#fff',
    },
    tagInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 30,
        margin: 2,
        width: wp(80),
        borderWidth: 1,
        borderColor: '#D4D7D9',
        borderRadius: 5,
        marginTop: 10
    },
    tagButton: {
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 5,
        marginLeft: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    listContainer: { 
        backgroundColor: '#fff', 
        height: hp(90), 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
        paddingTop:10
    }
});
