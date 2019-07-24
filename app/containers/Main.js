/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from '../redux/reducer/gunReducer';
import {login,logout} from '../redux/reducer/authReducer'
class Main extends React.Component {
    static navigationOptions = {
        title: '首页',
    };
    _independentView() {
        return (
        <View>
            <Text style={{
                fontSize: 36,
                textAlign: 'center',
                margin: 10,
            }}>
                独立团
        </Text>
            <Text style={{ fontSize: 24 }}>
                现在有机枪{this.props.num}把
        </Text>
            <TouchableOpacity style={{ marginTop: 36 }} onPress={this.props.addGun}>
                <Text style={{ fontSize: 24,alignSelf:'center',marginTop:8}}>申请武器</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.removeGun}>
                <Text style={{ fontSize: 24,alignSelf:'center',marginTop:8}}>上交武器</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.addGunAsync}>
                <Text style={{ fontSize: 24,alignSelf:'center',marginTop:8 }}>拖两天再给武器</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 36 }} onPress={this.props.logout}>
                <Text style={{ fontSize: 24,alignSelf:'center' }}>注销</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{ marginTop: 36 }} onPress={()=>this.props.navigation.navigate('contextScreen')}>
                <Text style={{ fontSize: 24,alignSelf:'center' }}>Context</Text>
            </TouchableOpacity> */}
        </View>
        )
    }
    _loginView() {
        return(
        <View>
            <Text>你没有权限，需要登录才能看</Text>
            <TouchableOpacity onPress={
                    this.props.login
                }>
                <Text style={{ fontSize: 24,alignSelf:'center',marginTop:36}}>登录</Text>
            </TouchableOpacity>
        </View>
        )
    }
    componentWillMount(){
    }
    render() {
        return(
         <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        }}>
           {this.props.isAuth ? this._independentView():this._loginView()}
             </View>
        );
    }
}
// 获取 state 变化
const mapStateToProps = (state) => {
    return {
        num: state.counter,
        isAuth:state.auth.isAuth
    }
}
// // 发送行为
const mapDispatchToProps = ({
    addGun: addGun,
    removeGun: removeGun,
    addGunAsync: addGunAsync,
    login:login,
    logout:logout
});
// const actionCreators = { addGun, removeGun, addGunAsync,login,logout}
// 进行第二层包装,生成的新组件拥有 接受和发送 数据的能力
Main = connect(mapStateToProps, mapDispatchToProps)(Main)
export default Main
