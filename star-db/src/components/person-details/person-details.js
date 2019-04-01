import React, { Component } from 'react'

import StarService from '../../services/star-service/star-service'
import Spinner from '../spinner/spinner';
import ErrorButton from "../error-button/error-button";

import './person-details.css'

export default class PersonDetails extends Component {

	starService = new StarService();

	state = {
		person: {},
		prevPersonId: null
	}

	componentDidMount = () => {
		this.updatePerson();
	}

	componentDidUpdate = (prevProps) => {
		if(this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}	
	}

	updatePerson() {
		const { personId } = this.props;

		if(!personId) {
			return;
		}

		this.starService
		.getPerson(personId)
		.then((person) => {
			this.setState({	person });
		});
	}

	render() {		
		if(!this.state.person) {
			return <span>Select a person from a list.</span>
		}

		const { id, name, gender, birth_year, eye_color } = this.state.person;
		const { prevPersonId } = this.state;

		if(prevPersonId === id) {
			return <Spinner />
		}

		return (
	      <div className="person-details card">
	        <img className="person-image"
	          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

	        <div className="card-body">
	          <h4>{name}</h4>
	          <ul className="list-group list-group-flush">
	            <li className="list-group-item">
	              <span className="term">Gender</span>
	              <span>{gender}</span>
	            </li>
	            <li className="list-group-item">
	              <span className="term">Birth Year</span>
	              <span>{birth_year}</span>
	            </li>
	            <li className="list-group-item">
	              <span className="term">Eye Color</span>
	              <span>{eye_color}</span>
	            </li>
	          </ul>
	          <div className="mt-5">
	          	<ErrorButton />
	          </div>

	        </div>
	      </div>
		)
	}
}