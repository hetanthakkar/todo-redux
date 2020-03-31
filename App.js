import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Layout from "./layout/layout";
export const REMOVE = "REMOVE_ITEM";
const DEFAULT_STATE = {
  todos: [],
  completed: 0
};
const reducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      return { ...state, todos: [...state.todos, payload.todo] };
    case "REMOVE_ITEM":
      return {
        ...state,
        todos: state.todos.filter(item => item !== payload.todo)
      };
    case "CHANGE_COMPLETE":
      console.log(state.completed);
      return { ...state, completed: state.completed + 1 };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
