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

    _applyTemperatureClass = (temp) => {
      if(temp < 0){
        return locationStyles.coldest
      }
      if(temp <= 10){
        return locationStyles.colder
      }
      if(temp <= 15) {
        return locationStyles.cold
      }
      if(temp <= 20) {
        return locationStyles.mild
      }
      if(temp <= 25) {
        return locationStyles.warm
      }
      if(temp <= 30) {
        return locationStyles.warmer
      }
      if(temp <= 35) {
        return locationStyles.warmest
      }
    }

    render() {
        let { location, locationDetails, currentWeather} = this.props.locationData;

        return (
          <a className={locationStyles.link} href="#">
            <div className={locationStyles.container}>
              <p className={locationStyles.title}>{location}</p>
              <em className={this._applyTemperatureClass(currentWeather.temp_c)}>
                {currentWeather.temp_c}<small>&deg;c</small>
              </em>
            </div>
          </a>
        );
    }
}
