import { combineReducers } from "redux";
import todoListReducer from "./TodoListReducer";



const RootReducer = combineReducers({
  todolist: todoListReducer
});


export default RootReducer;