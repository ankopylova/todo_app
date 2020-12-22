import {applyMiddleware, createStore} from "redux";
import reducer from "../Reducers";
import { save, load } from "redux-localstorage-simple";

export const store = createStore(reducer, load(), applyMiddleware(save()));