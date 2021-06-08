import React from 'react';
import Navigator from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Welcome from './screens/Welcome/Welcome';
import Login from './screens/LogIn/Login';
// import First from './AppScreens/First';
// import Second from './AppScreens/Second';
// import AccView from './AppScreens/accView';
// import ListAccount from './AppScreens/listAccounts';

const screens = {
    Welcome: {
        screen: Welcome
    },
    Login: {
        screen: Login
    },
    Accounts: {
        screen: AccView
    }
    // Second: {
    //     screen: Second
    // }
}

const HomeStack = createStackNavigator(screens);
const AppContainer = createAppContainer(HomeStack);

export default AppContainer;

