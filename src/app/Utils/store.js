import {applyMiddleware, createStore} from 'redux';
import reducer from '../Reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import api from "../../service";


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));
