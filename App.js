import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as firebase from 'firebase';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';

var firebaseConfig = {
  apiKey: 'AIzaSyCY7b5kj68hPR6npvbDvIoWaV4D7WMBIhM',
  authDomain: 'react-lco.firebaseapp.com',
  databaseURL: 'https://react-lco.firebaseio.com',
  projectId: 'react-lco',
  storageBucket: 'react-lco.appspot.com',
  messagingSenderId: '815471400179',
  appId: '1:815471400179:web:2c4d66db1bec64c3fa1386'
};

firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Loading: { screen: LoadingScreen },
    SignIn: { screen: SigninScreen },
    SignUp: { screen: SignupScreen },
    Home: { screen: HomeScreen }
  },
  {
    // Launcher screen
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(MainNavigator);
