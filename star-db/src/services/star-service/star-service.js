import React, { Component } from 'react'

import './star-service.css'

export default class StarService extends Component {
	_apiBase = 'https://swapi.co/api/'

	async getResourse (url) {
		const result = await fetch(`${this._apiBase}${url}`);

		if(!result.ok) {
		  throw new Error(`Could not fetch ${url}` + 
		  `, received ${result.status}`);
		}	
		
		return await result.json();
	}

	async getAllPeople() {
		const res = await this.getResourse(`people/`)
		return res.results
	}

	async getPerson(id) {
		const res = await this.getResourse(`people/${id}/`)
		return res.results
	}

	async getAllPlanet() {
		const planet = await this.getResourse(`planets/`)	
		return this.map(this._transformPlanet(planet))
	}

	async getPlanet(id) {
		const planet = await this.getResourse(`planets/${id}/`)			
		return this._transformPlanet(planet)
	}

	_extractId(planet) {
		const idRegExp = /([0-9]*)\/$/;
		const id = planet.url.match(idRegExp)[1]	
		return id
	}

	_transformPlanet(planet) {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
			// name: null,
			// population: null,
			// rotationPeriod: null,
			// diameter: null,
		}
	}
}