import { applyMiddleware, createStore } from "redux";
import reducerTodos from "./services/reducerTodos";
import { thunk } from "redux-thunk";

export const store=createStore(reducerTodos,applyMiddleware(thunk));