import {applyMiddleware, createStore} from "redux";
import reducer from "../Reducers";
import { save, load } from "redux-localstorage-simple";
import thunk from "redux-thunk";

export const store = createStore(reducer, load(), applyMiddleware(save(), thunk));