import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import Modal from "react-native-modal";

import Style from './Style';
import Header from '../../components/Header';
import List from '../../components/List';
import CancelIcon from '../../assets/Icons/CancelIcon';
import PlusIcon from '../../assets/Icons/PlusIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoScreen = () => {

    const [visible, setVisible] = useState<Boolean>(false)
    const [addTag, setAddTag] = useState<Boolean>(false)
    const [text, setText] = useState<string>('')
    const [tags, setTags] = useState<string>('')
    const [tagList, setTagList] = useState([])
    const [todoList, setTodoList] = useState([])
    const renderColors = ['#B2FFDA', '#D3FAA3', '#FFFF8F', '#c9b8b8', '#00a0c8']

    useEffect(() => {
        getData()
    }, [])

    const storeData = async () => {
        setVisible(false)

        let list = await AsyncStorage.getItem('todoList')
        let data = []
        let index = 1

        if (!list) {
            console.log("list", list)
            data.push({ id: index, title: text, tags: tagList })
            console.log(data)
            await AsyncStorage.setItem('todoList', JSON.stringify(data))
                .then(() => {
                    console.log('saved', data)
                    setText('')
                    setTagList([])
                    getData()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            console.log("list-----", list)
            let jsondata = JSON.parse(list)
            console.log(jsondata.length)
            data.push({ id: jsondata.length + 1, title: text, tags: tagList })
            jsondata.map((item) => {
                data.push(item)
                console.log(data)
            })
            await AsyncStorage.setItem('todoList', JSON.stringify(data))
                .then(() => {
                    console.log('saved', data)
                    setText('')
                    setTagList([])
                    getData()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const getData = async () => {
        let list = await AsyncStorage.getItem('todoList')
        console.log(JSON.parse(list))
        setTodoList(JSON.parse(list))
    }

    const addTags = (tags: string) => {
        setAddTag(false)
        setTagList(prevState => [...prevState, tags])
        setTags('')

    }

    const removeTags = (item: string) => {
        var r = tagList.filter(i => i !== item)
        setTagList(r)
    }

    return (
        <SafeAreaView style={Style.container}>
            <Header onAdd={() => setVisible(true)} onSearch={() => console.log(todoList)} />
            <View style={Style.listContainer}>
                <List data={todoList} />
            </View>
            <Modal isVisible={visible}>
                <View style={Style.content}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end' }}
                        onPress={() => {
                            setVisible(false)
                            setAddTag(false)
                        }}
                    >
                        <CancelIcon height={25} width={25} color={"#D4D7D9"} />
                    </TouchableOpacity>
                    <TextInput
                        style={Style.input}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder="Enter title of ToDo"
                        placeholderTextColor='#A9A9A9'
                    />
                    {tagList
                        ? <FlatList
                            horizontal
                            data={tagList}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={[Style.tagButton, { backgroundColor: renderColors[index] }]}>
                                        <Text>{item}</Text>
                                        <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => removeTags(item)}>
                                            <CancelIcon height={15} width={15} color={'#000'} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                        : null}
                    {addTag
                        ? <View style={Style.tagInput}>
                            <TextInput
                                onChangeText={text => setTags(text)}
                                value={tags}
                                placeholder="Enter a tag"
                                placeholderTextColor='#A9A9A9'
                            />
                            {tags
                                ? <TouchableOpacity onPress={() => addTags(tags)}>
                                    <Text>Add</Text>
                                </TouchableOpacity>
                                : null}
                        </View>
                        : <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 5 }} onPress={() => setAddTag(true)}>
                            <PlusIcon color={'#D4D7D9'} />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity style={Style.addBtn} onPress={() => storeData()}>
                        <Text style={Style.btnText}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default TodoScreen;

