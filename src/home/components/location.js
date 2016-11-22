import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import locationStyles from '../../assets/components/location.scss';

// import styles from '../assets/home.css'

export default class Location extends React.Component {

    constructor(props) {
      super(props);
    }

    static propTypes = {
      locationData: PropTypes.object.isRequired
    }

    render() {
        let { location, locationDetails, currentWeather} = this.props.locationData;

        return (
          <a className={locationStyles.link} href="#">
            <div className={locationStyles.container}>
              <p>{location}</p>
              <em>{currentWeather.temp_c}c</em>
            </div>
          </a>
        );
    }
}
