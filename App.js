import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import HomeScreen from './screens/HomeScreen';
import KostCewekScreen from './screens/KostCewekScreen';
import KostCowokScreen from './screens/KostCowokScreen';
import unklabvideo from './screens/unklabvideo';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const navigator = createStackNavigator({
  Component: ComponentScreen,
  Cewek: KostCewekScreen,
  Home: HomeScreen,
  Cowok: KostCowokScreen,
  unklab: unklabvideo
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Kost Finder'
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
