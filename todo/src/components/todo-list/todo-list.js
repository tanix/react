import  React from 'react';
import  ToDoItem from '../todo-item/todo-item'

import './todo-list.css'

const ToDoList = ({ todos,
                    onDeleted,
                    onToggleProperty }) => {

  const result = todos.map((item) => {
      const { id, ... itemProp } = item;

      return(<li key={id} className='list-group-item'>
                <ToDoItem
                   { ... itemProp }
                   onDeleted = { () => onDeleted(id) }
                   onToggleProperty = { (value) => onToggleProperty(id, value) } />
            </li>);
  });

  return (
    <ul className='list-group todo-list'> { result } </ul>
  );
};

export default ToDoList;