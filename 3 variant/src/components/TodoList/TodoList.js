import React from "react";
import './TodoList.scss';
import { connect } from 'react-redux';
import { updateTodoList } from '../../actions/TodoListActions';


const TodoList = ({todolist, changeState}) => {
  return (
    <ul className="todo-list">
      {todolist.map((item) => (
        <li key={item.id} className="todo-item">
          <label>
            <input type="checkbox" checked={item.completed} onChange={()=>changeState(item.id)} />
            <p>{item.title}</p>
          </label>
        </li>
      ))}
    </ul>

  );
};


export default connect(
  state => ({
    todolist: state.todolist.todolist
  }),
  dispatch => ({
    changeState: (id) => dispatch(updateTodoList(id))
  })
)(TodoList);
