import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import Todo from './Todo';
export default class TodoList extends Component{
    static PropTypes = {
        todos:PropTypes.arrayOf(
         PropTypes.shape({
             id:PropTypes.number.isRequired,
             completed:PropTypes.bool.isRequired,
             text:PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        toggleTodo:PropTypes.func.isRequired
    }
}