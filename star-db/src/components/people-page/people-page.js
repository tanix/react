import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorBoundory from '../error-boundory/error-boundory';
import Row from '../row/row';
import StarService from '../../services/star-service/star-service';

import './people-page.css';

export default class PeoplePage extends Component {
  starService = new StarService();

  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const peopleItem = (
      <ItemList onClickByName={this.onPersonSelected} 
          getData={this.starService.getAllPeople} >
          {(i) => `${i.name} ${i.gender}`}
      </ItemList>
    );

    const planetsItem = (
      <ItemList getData={this.starService.getAllPlanets}
                renderItem={(item) => (
                    <span>item.name <button>!</button></span>
          )}/>
    );

    const starshipsItem = (
      <ItemList getData={this.starService.getAllStarships}
                renderItem={(item) => item.name}/>
    );

    const personDetails = (
      <ErrorBoundory>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundory>
    );

    return (
      <div>
          <Row right = { peopleItem } left = {personDetails } />      
      </div>     
    );
  }
}
