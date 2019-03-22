import React, { Component } from 'react'

import Header from '../header/header'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import PlanetDetails from '../planet-details/planet-details'
import RandomPlanet from '../random-planet/random-planet'
import StarShipDetails from  '../starship-details/starship-details'

import './app.css'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<RandomPlanet />

				<div className= "row mb2">
					<div className= "col-md-6">
						<ItemList />
					</div>
					<div className= "col-md-6">
						<PersonDetails />
					</div>
				</div>
			</div>
		)
	}
}