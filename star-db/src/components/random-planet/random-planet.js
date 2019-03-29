import React, { Component } from 'react'

import './random-planet.css'

import Spinner from '../spinner/spinner'
import ErrorComponent from '../error/error'
import StarService from '../../services/star-service/star-service'

export default class RandomPlanet extends Component {
 	starService = new StarService();

	constructor() {
		super();
		//this.componentDidMount();
		this.updatePlanet();
	}

	state = {
		planet: {},
		loading: true,
		error: false,
	} 

	// componentDidMount = () => {	
	// 	console.log('componentDidMount()');
	// }

	// componentWillUnmount = () => {	
	// 	console.log('componentWillUnmount()');
	// }

	onPlanetLoaded = (planet) => {		
		this.setState({
			planet,
			loading: false,
		})			
	};

	onError = (error) => {	
		console.log(error);		
		this.setState({		
			error: true			
		})		
	};

    updatePlanet = () => {		
    	const id = Math.floor(Math.random()*25 + 2);  

    	this.starService
	    	.getPlanet(id)
	    	.then(this.onPlanetLoaded)
	    	.catch(this.onError);
    }

	render() {
		const { planet, loading, error } = this.state;

		const spinner = loading ? <Spinner /> : <PlanetView planet={ planet } />;
		const showComponent = error ?  <ErrorComponent /> : spinner ;

		return (
			<div>
				<div className='random-planet jumbotron rounded '>
					{ showComponent }	
				</div>
			</div>
		)
	}
}


const PlanetView = ({ planet }) => {
	const { id, name, population, rotationPeriod, diameter } = planet;

	return (
		<React.Fragment>
			<img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
			<div>
				<h4>{ name }</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population</span>
						<span>{ population }</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period</span>
						<span>{ rotationPeriod }</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter</span>
						<span>{ diameter }</span>
					</li>
				</ul>
			</div>		
		</React.Fragment>
	)
}







