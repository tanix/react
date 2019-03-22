import  React, { Component } from 'react';
import  ReactDom from 'react-dom'

import ToDoHeader from '../app-todo-header'
import ToDoTextInput from '../todo-input'
import ToDoList from '../todo-list'
import AddItem from '../item-add-form'


import './app.css'


export default class ToDoApp extends Component {
  idx = 100;

  state = {
    todoData : [
      this.createToDoItem('Create a good app'),
      this.createToDoItem('Drink Coffee'),
      this.createToDoItem('Watch a movie'),
      this.createToDoItem('Have a breakfast')
    ],
    term: '',
    filter: 'all',
  };

  createToDoItem (text) {
    return {
      id: this.idx ++,
      label: text,
      important: false,
      done: false
    };
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id == id);

      const newArray = [
        ... todoData.slice(0, index),
        ... todoData.slice(index + 1)
      ];

      return {
        todoData: newArray
      }
    });
  };

  addItem = (text) => {
    const newItem = this.createToDoItem(text);

    this.setState(({ todoData }) => {
      let newArray = [... todoData, newItem ];

      return {
        todoData: newArray
      }
    });
  };

  ToggleProperty = (id, property) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id == id);
      const oldItem = todoData[index];

      const newItem = {
        ... oldItem,
        [property]: !oldItem[property],
      };

      const newArray = [
        ... todoData.slice(0, index),
        newItem,
        ... todoData.slice(index + 1)
      ];

      return {
        todoData: newArray
      }
    });
  };

  onToggleProperty = (id, value) => {
    this.ToggleProperty(id, value);
  };

  setFilterValue = (value) => {
    this.setState({filter: value });
  };

  filterItems = (items ,state) => {
    switch(state)  {
      case 'all':
        return items;
      case 'done':
        return items.filter((el) => el.done);
      case 'important':
        return items.filter((el) => el.important);
      default:
        return items;
    }
  }

  searchItem = (items, term) => {
    if(term.length === 0 ) {
      return items;
    }

    return items.filter((el) => {
      return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1
      }
    );
  };

  changeTerm = (_term) => {
    this.setState({ term: _term });
  };

  render() {
     const { todoData, term, filter } = this.state;
     const isVisibleItems = this.filterItems(this.searchItem(todoData, term), filter);

     const toDoItemDone = todoData.filter((el) => el.done ).length;
     const toDoItemWillBeDone = todoData.length - todoData.filter((el) => el.done ).length;

     return (
      <div className='container'>
        <ToDoHeader />
        <ToDoTextInput toDoItemDone = { toDoItemDone }
                       toDoItemWillBeDone = { toDoItemWillBeDone }
                       setFilterValue = { (value) => this.setFilterValue(value) }
                       onChangeTerm =  {(term) => this.changeTerm(term) } 
                       filter = { filter } />

        <ToDoList todos = { isVisibleItems } 
                  onDeleted = { (id) => this.deleteItem(id)}
                  onToggleProperty = {(id, value) => this.onToggleProperty(id, value)} />

        <AddItem onItemAdded= { (value) => this.addItem(value) } />
      </div>
    )
  }
}