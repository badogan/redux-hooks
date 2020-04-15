import { createStore } from "redux";
import uuid from "uuid/v4";

const initialState = {
  todos: [
    {
      id: uuid(),
      name: "review redux with hooks",
      complete: false
    },
    {
      id: uuid(),
      name: "cook some lunch",
      complete: true
    }
  ]
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension
);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

export const addTodoAction = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const toggleTodoAction = todoId => {
    return {
        type: 'TOGGLE_TODO',
        payload: todoId
    }
}

export const deleteTodoAction = todoId => {
    return {
        type: 'DELETE_TODO',
        payload: todoId
    }
}
