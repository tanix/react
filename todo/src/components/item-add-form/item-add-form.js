import React, { Component } from 'react'

import './item-add-form.css'

export default class AddItem extends Component {
  state = {
    value: ''
  };

  onInputChange = (e) => {
    const elValue = e.target.value;

    this.setState(() => {
      return {
        value: elValue
      }
    });
  };

  onInputReset = () => {
    const elValue = ' ';

    this.setState(() => {
      return {
        value: ''
      }
    });
  };

  onSubmitEdit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.value);
    this.onInputReset();
  };

  render() {
    return (
      <form className='mt-4' onSubmit = { this.onSubmitEdit } >
        <input type='text' onChange = { this.onInputChange } value= { this.state.value } />
        <button className='btn btn-outline-secondary ml-2'>Add Item</button>
      </form>
    )
  }
}