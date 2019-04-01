import React, { Component } from 'react'

import StarService from '../../services/star-service/star-service';
import Spinner from '../spinner/spinner';

import './item-list.css'

export default class ItemList extends Component {
	starService = new StarService();

	state = {
		peopleList: {}
	}

	constructor() {
		super();
		this.componentDidMount();
	}

	componentDidMount() {		
		this.starService
		.getAllPeople()
		.then((peopleList) => {
			this.setState({peopleList})
		});		
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

		if(! peopleList.length) {
			return <Spinner />
		}

		const items = this.getPeopleList(peopleList);	

		return (
			<ul className="item-list list-group">{items}</ul>						
		)
	}
}