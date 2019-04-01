import React, { Component } from 'react'

import Header from '../header/header'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import PlanetDetails from '../planet-details/planet-details'
import RandomPlanet from '../random-planet/random-planet'
import StarShipDetails from  '../starship-details/starship-details'
import StarService from '../../services/star-service/star-service'

import ErrorComponent from  '../error/error';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

import PeoplePage from '../people-page';

import './app.css'

export default class App extends Component {
	state = {
		showRandomPlanet: true,
		hasError: false
	}

	toggleRandomPlanet = () => {
		this.setState((state) => {
		  return {
		    showRandomPlanet: !state.showRandomPlanet
		  }
		});
	};

	componentDidCatch() {
		this.setState({hasError: true});
	}

	render() {
		if(this.state.hasError) {
			return <ErrorIndicator />
		}

		const planet = this.state.showRandomPlanet ? <RandomPlanet/> :  null;    		
   

		return (
			<div className="main">
				<Header />
				{ planet }

				<div className="row mb2 button-row">
		          <button
		            className="toggle-planet btn btn-warning btn-lg mr-3"
		            onClick={this.toggleRandomPlanet}>
		            Toggle Random Planet
		          </button>
		          <ErrorButton />
        		</div>
        		
				 <PeoplePage />
			</div>
		)
	}
}