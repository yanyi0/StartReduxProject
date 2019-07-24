/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
class Sidder extends React.Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:24,marginTop:8}}>侧边栏</Text>
                <Navbar user={this.props.user}/>
                </View>
        )
    }
}
class Navbar extends React.Component{
     render(){
         return(
         <View>
             <Text style={{fontSize:24,marginTop:8}}>{this.props.user}导航栏</Text>
             </View>
         )
     }
}

class ContextScreen extends Component {
  constructor(props){
      super(props);
      this.state={
          isShowText:true,
          abc : 'ABC'
      };
  };
  static navigationOptions = {
    title: 'Context',
  };
  render() {
      const user = '蜗牛';
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:36}}>
          我是{user}
        </Text>
        <Sidder user={user}/>
      </View>
    );
  }
}
export default ContextScreen;