import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { getWeather, addUserLocation } from '../actions/locationSidebarActions'

import LocationsSidebar from './components/locations-sidebar';

import GenericStyles from '../assets/generic/_generic.all.scss';
import GlobalStyles from '../assets/base/globals.scss';

class HomeContainer extends React.Component {

    constructor(props) {
      super(props);
    }

    componentWillMount() {
      const { getWeather } = this.props;
      getWeather('Brighton');
    }

    render() {
        return (
            <div>
              <LocationsSidebar
                onAddUserLocation={this.props.addUserLocation}
                onGetWeather={this.props.getWeather}
                locations={this.props.weather.locations}
              />
            </div>
        );
    }
}

export default connect((state) => ({
  // State
  weather: state.weather
}), {
  // Actions
  addUserLocation,
  getWeather
})(HomeContainer)
