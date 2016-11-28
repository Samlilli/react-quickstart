import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { getWeather, addUserLocation } from '../actions/locationSidebarActions'
import { resetErrors } from '../actions/errorActions'

import LocationsSidebar from './components/locations-sidebar';

import GenericStyles from '../assets/generic/_generic.all.scss';
import GlobalStyles from '../assets/base/globals.scss';

class HomeContainer extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      let { addUserLocation, getWeather, weather, errors, resetErrors } = this.props;
        return (
            <div>
              <LocationsSidebar
                onAddUserLocation={addUserLocation}
                onGetWeather={getWeather}
                locations={weather.locations}
                errors={errors}
                resetErrors={resetErrors}
              />
            </div>
        );
    }
}

export default connect((state) => ({
  // State
  weather: state.weather,
  errors: state.errors
}), {
  // Actions
  resetErrors,
  addUserLocation,
  getWeather
})(HomeContainer)
