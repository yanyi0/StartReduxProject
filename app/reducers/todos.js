import {
    ADD_TODO,
    TOGGLE_TODO,
} from '../actions/types'

const todos = (state = [],action) => {
    let {id,text,type} = action;
    switch(type){
        case ADD_TODO:
            return [

            ];
        case TOGGLE_TODO:
            return state.map(todo => (todo.id === id) ? {...todo,completed:!todo.completed}:todo);
        default:
            return state;
    }
};
export default todos;