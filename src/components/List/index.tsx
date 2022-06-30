import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import SquareIcon from '../../assets/Icons/SquareIcon';
import RoundIcon from '../../assets/Icons/RoundIcon';
import RoundCheckIcon from '../../assets/Icons/RoundCheckIcon';
import Style from './Style';

const List = ({ data }: any) => {

    const renderColors = ['#B2FFDA', '#D3FAA3', '#FFFF8F', '#c9b8b8', '#00a0c8']
    const [isCheck, setCheck] = useState<Number>(null)

    const renderItem = ({ item, index }) => {
        return (
            <View style={Style.container}>
                <View style={Style.subContainer}>
                    <View style={Style.subView}>
                        <SquareIcon />
                        <Text style={isCheck === index ? Style.checkTitle : Style.title}>{item.title}</Text>
                    </View>
                    {isCheck === index
                        ? <TouchableOpacity onPress={() => selectItem(data)}>
                            <RoundCheckIcon />
                        </TouchableOpacity>
                        : <TouchableOpacity onPress={() => selectItem(data)}>
                            <RoundIcon />
                        </TouchableOpacity>
                    }
                </View>
                {item.tags
                    ? <View style={Style.bottomContainer}>
                        <FlatList
                            horizontal
                            data={item.tags}
                            renderItem={Button}
                        />
                    </View>
                    : null}
            </View>

        )
    }

    const Button = ({ item, index }) => {
        return (
            <TouchableOpacity style={[Style.button, { backgroundColor: renderColors[index] }]}>
                <Text>{item}</Text>
            </TouchableOpacity>
        )
    }

    const selectItem = (title) => {
    //     let renderData=[...data];
    //     for(let data of renderData){
    //       if(data.title==title){
    //         data.selected=(data.selected==null)?true:!data.selected;
    //         break;
    //       }
    //     }
    // console.log(renderData)
    }
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
        />
    )
};

export default List;
