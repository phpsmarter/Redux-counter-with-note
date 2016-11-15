/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react'; //通公react 导入的组件
import { AppRegistry } from 'react-native';//通过rn导入的注册组件
import { Provider } from 'react-redux';   //redux的包装组件
import App from './src/containers/App';  //所有的组件打包以后的入口文件，是代码学习的入口
import configureStore from './src/store/configureStore'; //store的配置文件

const store = configureStore();   //实例化store
//经过store注入的组件
class ReduxCounterUniversal extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxCounterUniversal', () => ReduxCounterUniversal);//注册app
