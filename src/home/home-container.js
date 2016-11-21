import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { getWeather } from '../actions/appActions'

import LocationsSidebar from './components/locations-sidebar';

import GenericStyles from '../assets/generic/_generic.all.scss'

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
              <LocationsSidebar/>
            </div>
        );
    }
}

export default connect((state) => ({
  // State
  weather: state.weather
}), {
  // Actions
  getWeather
})(HomeContainer)
