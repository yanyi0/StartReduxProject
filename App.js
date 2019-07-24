/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//引用外部文件
import {Provider} from 'react-redux';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import Main from './app/containers/Main';
import LoginScreen from './app/containers/LoginScreen';
import contextScreen from './app/containers/ContextScreen';
import ContextToPropScreen from './app/containers/ContextToPropScreen';
import configureStore from './app/redux/store/store';
const store = configureStore();
let RootStack = createStackNavigator({
  mainScreen:Main,
  loginScreen:LoginScreen,
  contextToPropScreen:ContextToPropScreen,
  contextScreen:contextScreen
});
let Navigation = createAppContainer(RootStack);
//调用 store 文件中的 mainReducer常量中保存的方法
export default class App extends Component {
  render() {
    return (//第一层包装，为了让 main 能够拿到 store
      <Provider store={store}>
      <Navigation />
      </Provider>
      )
  };
}

