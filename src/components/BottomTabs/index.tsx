import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Todoscreen from '../../screens/TodoScreen';
import LinkScreen from '../../screens/LinkScreen';
import TodoIcon from '../../assets/Icons/TodoIcon';
import CalenderIcon from '../../assets/Icons/CalenderIcon';
import RoundedIcon from '../../assets/Icons/RoundedIcon';
import GridIcon from '../../assets/Icons/GridIcon';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="To Do"
            screenOptions={{
                headerShown: false
            }}>

            <Tab.Screen
                name="Link"
                component={LinkScreen}
                options={{
                    tabBarActiveTintColor: '#434FB7',
                    tabBarLabel: 'Link',
                    tabBarIcon: ({ color, size }) => (
                        <RoundedIcon color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="abb"
                component={LinkScreen}
                options={{
                    tabBarActiveTintColor: '#434FB7',
                    tabBarLabel: 'Link',
                    tabBarIcon: ({ color, size }) => (
                        <CalenderIcon color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="To Do"
                component={Todoscreen}
                options={{
                    tabBarActiveTintColor: '#434FB7',
                    tabBarLabel: 'To Do',
                    tabBarIcon: ({ color, size }) => (
                        <TodoIcon color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="vvcv"
                component={LinkScreen}
                options={{
                    tabBarActiveTintColor: '#434FB7',
                    tabBarLabel: 'Link',
                    tabBarIcon: ({ color, size }) => (
                        <GridIcon color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
