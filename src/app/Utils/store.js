import {applyMiddleware, createStore} from 'redux';
import reducer from '../Reducers';
import {save, load} from 'redux-localstorage-simple';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducer, load(), composeWithDevTools(applyMiddleware(save(), thunk)));