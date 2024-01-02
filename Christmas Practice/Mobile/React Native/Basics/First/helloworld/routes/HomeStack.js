import { createAppContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import About from '../screens/About';
import Home from '../screens/Home';

const screens = {
    Home: {
        screen: <Home />
    },
    About: {
        screen: <About />
    }
}

const HomeStack = createNativeStackNavigator(screens)

export default createAppContainer(HomeStack)