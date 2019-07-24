import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer'

export default () => {
    //根据 reducer 初始化 store
    const store = createStore(reducer,applyMiddleware(thunk));
    return store;
}