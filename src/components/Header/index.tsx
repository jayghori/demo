import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SearchIcon from '../../assets/Icons/SearchIcon';
import AddIcon from '../../assets/Icons/AddIcon';
import Style from './Style';

const Header = ({ onSearch, onAdd }: any) => {
    return (
        <View style={Style.container}>
            <Text style={Style.text}>To Do</Text>
            <View style={Style.subContainer}>
                <TouchableOpacity onPress={onSearch}>
                    <SearchIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={onAdd}>
                    <AddIcon color={"white"}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

