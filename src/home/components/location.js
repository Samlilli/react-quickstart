import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import locationStyles from '../../assets/components/location.scss';

// import styles from '../assets/home.css'

export default class Location extends React.Component {

    constructor(props) {
      super(props);
    }

    componentWillMount(){
      // let { refreshWeather, locationData } = this.props;
      // refreshWeather(locationData.location);
    }

    static propTypes = {
      locationData: PropTypes.object.isRequired,
      refreshWeather: PropTypes.func.isRequired
    }

    _applyTemperatureClass = (temp) => {
      if(temp < 0){
        return locationStyles.coldest
      }
      if(temp <= 5){
        return locationStyles.colder
      }
      if(temp <= 10) {
        return locationStyles.cold
      }
      if(temp <= 15) {
        return locationStyles.mild
      }
      if(temp <= 20) {
        return locationStyles.warm
      }
      if(temp <= 25) {
        return locationStyles.warmer
      }
      if(temp <= 30) {
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
