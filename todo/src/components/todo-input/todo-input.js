import React, { Component } from 'react'

import './todo-input.css';

export default class ToDoTextInput extends Component {
  state = {
    term: ''
  };

  onChangeValue = (e) => {
    const _term = e.target.value;
    this.setState({ term: _term });
    this.props.onChangeTerm(_term);
  };

  buttonsArray = [
    { name: 'All', value: 'all' },
    { name: 'done', value: 'done' },
    { name: 'Important', value: 'important' },
  ];

  render() {
    const { filter, setFilterValue } = this.props;

    const buttons = this.buttonsArray.map(({ name, value }) => {
      const isActive = filter === value;
      const claszz = isActive ? 'btn-info' : 'btn-outline-info';


      return (<button type='button'
                      className = {`btn ml-2 ${claszz}`}
                      key = {name}
                      onClick = {() => setFilterValue(value) } > { name }</button>)
    });

    return (
      <div>
        <div className='search-box mb-3'>
          <div className="row">
            <div className="col-sm-12 col-md-9 mb-2">
              <input type='text' className='form-control'
                     value = { this.state.term }                     
                     onChange = { this.onChangeValue } />
            </div>
            <div className="col-sm-12 col-md-3 pull-right text-right">
              { buttons }
            </div>
          </div>
        </div>
        <p> All Items: { this.props.toDoItemWillBeDone }  Done: { this.props.toDoItemDone } </p>
      </div>
    );
  }
}