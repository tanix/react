import React, { Component } from 'react'

import './star-service.css'

export default class StarService extends Component {
	_apiBase = 'https://swapi.co/api'

	async getResource (url) {
		const result = await fetch(`${this._apiBase}${url}`);

		if(!result.ok) {
		  throw new Error(`Could not fetch ${url}` + 
		  `, received ${result.status}`);
		}	
		
		return await result.json();
	}

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformPerson);
	}

	getPerson = async (id) => {
		const person = await this.getResource(`/people/${id}/`);
		return this._transformPerson(person);
	}

	getAllPlanets = async () => {
		const res = await this.getResource(`/planets/`);
		return res.results.map(this._transformPlanet);
	}

	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet);
	}

	getAllStarships = async () => {
		const res = await this.getResource(`/starships/`);
		return res.results.map(this._transformStarship);
	}

	getStarship = async (id) => {
		const starship = this.getResource(`/starships/${id}/`);
		return this._transformStarship(starship);
	}

	_extractId(planet) {
		const idRegExp = /([0-9]*)\/$/;
		let id = planet.url.match(idRegExp)[1]	

		return id
	}

	_transformPlanet = (planet) => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
	}

  _transformStarship = (starship) => {
    return {
		id: this._extractId(starship),
		name: starship.name,
		model: starship.model,
		manufacturer: starship.manufacturer,
		costInCredits: starship.costInCredits,
		length: starship.length,
		crew: starship.crew,
		passengers: starship.passengers,
		cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = (person) => {
    return {
		id: this._extractId(person),
		name: person.name,
		gender: person.gender,
		birthYear: person.birthYear,
		eyeColor: person.eyeColor
    }
  }
}









