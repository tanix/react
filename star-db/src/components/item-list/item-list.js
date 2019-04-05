import React, { Component } from 'react'

import Spinner from '../spinner/spinner';

import './item-list.css'

export default class ItemList extends Component {

	state = {
		peopleList: {}
	}

	constructor() {
		super();
	}

	componentDidMount() {	
		const { getData } = this.props;

		getData()
		.then((peopleList) => {
			this.setState({peopleList})
		});		
	}

	getPeopleList = (peopleList) => {		
		if(peopleList.length) {
			return peopleList.map((item) => {
				const { id } = item;
				const label = this.props.children(item)

				return(	<li className="list-group-item" key={id} 
					onClick={(e) => this.props.onClickByName(id, e)} >{label}</li>)						
			});
		}
	}

	render() {
		const { peopleList } = this.state;

		if(! peopleList.length) {
			return <Spinner />
		}

		const items = this.getPeopleList(peopleList);	

		return (
			<ul className="item-list list-group">{items}</ul>						
		)
	}
}