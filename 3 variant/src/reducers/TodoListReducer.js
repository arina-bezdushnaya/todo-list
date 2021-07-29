import TodoList from "../data.json";
import { UPDATE_TODO_LIST } from '../actions/TodoListActions';


const initialState = {
  todolist: TodoList
};

export default function todoListReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TODO_LIST:

      return {
        ...state,
        todolist: state.todolist.map((todo) => {
          if (todo.id === action.id) {
            return {
            ...todo,
            completed: !todo.completed
            };
          };
          return todo
        })
      
      }
    default:
      return state;
  }
}
