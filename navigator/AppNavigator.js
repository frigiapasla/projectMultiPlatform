import React from 'react';
import { StyleSheet, Text, View, createStackNavigator, createAppContainer } from 'react-navigation';

import ComponentScreen from '../screens/ComponentScreen';
import HomeScreen from '../screens/HomeScreen';
import KostCewekScreen from './screens/KostCewekScreen';
import KostCowokScreen from './screens/KostCowokScreen';


const navigator = createStackNavigator({
  Component: ComponentScreen,
  Cewek: KostCewekScreen,
  Home: HomeScreen,
  Cowok: KostCowokScreen

},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerTitle: 'Kost Finder'
    }
});

export default createAppContainer(navigator);