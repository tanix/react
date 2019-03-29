import React, { Component } from 'react'

import StarService from '../../services/star-service/star-service'

import './item-list.css'

export default class ItemList extends Component {
	starService = new StarService();

	state = {
		peopleList: {}
	}

	constructor() {
		super();
		this.componentDidMaout();
	}

	componentDidMaout() {		
		this.starService
		.getAllPeople()
		.then((peopleList) => {
			this.setState({peopleList})
		});		
	}

	onClickByName = (id) => {
		console.log("onClickByName");
	}

	getPeopleList = (peopleList) => {
		if(peopleList.length) {
			return peopleList.map(({id, name}) => {
				return(	<li className="list-group-item" key={id} 
					onClick={(e) => this.props.onClickByName(id, e)} >{name}</li>)						
			});
		}
	}

	render() {
		const { peopleList } = this.state;
		const items = this.getPeopleList(peopleList);
	

		return (
			<ul className="item-list list-group">{items}</ul>			
			
		)
	}
}