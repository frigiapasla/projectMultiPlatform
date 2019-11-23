import React, {Component} from 'react';
import {CreateDrawerNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import ComponentScreen from './screens/ComponentScreen';
import HomeScreen from './screens/HomeScreen';
import KostCewekScreen from './screens/KostCewekScreen';
import KostCowokScreen from './screens/KostCowokScreen';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {screen: HomeScreen},
    Component: {screen: ComponentScreen},
    Cewek: {screen:KostCewekScreen},
    Cowok: {screen: KostCowokScreen},
},{
    initialRouteName: 'Home',
    drawerWidth: 300,
    drawerPosition: 'left'
}
);

const AppContainer= createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component{
    render(){
        return <AppContainer />;
    }
}