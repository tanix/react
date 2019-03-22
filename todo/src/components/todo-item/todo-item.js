import  React, { Component } from 'react';

import './todo-item.css'

export default class ToDoItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleProperty,
      important,
      done } = this.props;

    let classNames = important ? 'important': '';
    classNames = done ? classNames + ' done': classNames;

    return(
      <div>
        <span onClick = { () => onToggleProperty('done') }
              className = { classNames } > { label }</span>
        <button type='button' onClick = { () =>  onToggleProperty('important') }
                className='btn btn-outline-success pull-right fa'>!</button>
        <button type='button'
                onClick = { onDeleted }
                className='btn btn-outline-danger pull-right fa fa-remove' ></button>
      </div>
    )
  };
}

