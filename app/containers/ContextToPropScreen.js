/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View
} from 'react-native';
class Sidder extends React.Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:24,marginTop:8,alignSelf:'center'}}>侧边栏</Text>
                <Navbar/>
                </View>
        )
    }
}
class Navbar extends React.Component{
    static contextTypes = {
        user:PropTypes.string
    }
     render(){
         return(
         <View>
             <Text style={{fontSize:24,marginTop:8,alignSelf:'center'}}>{this.context.user}导航栏</Text>
             </View>
         )
     }
}

class ContextToPropScreen extends Component {
    static childContextTypes = {
        user:PropTypes.string
    }
  constructor(props){
      super(props);
      this.state={
          user:'蜗牛'
      };
  };
  getChildContext(){
      return this.state
  }
  static navigationOptions = {
    title: 'Context传值',
  };
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:36}}>
          我是{this.state.user}
        </Text>
        <Sidder />
      </View>
    );
  }
}
export default ContextToPropScreen;