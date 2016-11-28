import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import locationStyles from '../../assets/components/location.scss';

// import styles from '../assets/home.css'

export default class Location extends React.Component {

    constructor(props) {
      super(props);
    }

    componentWillMount(){
      let { refreshWeather, locationData } = this.props;
      refreshWeather(locationData.locationName);
    }

    static propTypes = {
      locationData: PropTypes.object.isRequired,
      refreshWeather: PropTypes.func.isRequired,
      deleteUserLocation: PropTypes.func.isRequired
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
      if(temp >= 30) {
        return locationStyles.warmest
      }
    }

    render() {
        let { locationName, location, current} = this.props.locationData;

        return (
          <a className={locationStyles.link} href="#">
            <div className={locationStyles.container}>
              <p className={locationStyles.title}>{locationName}</p>
              <em className={this._applyTemperatureClass(current.temp_c)}>
                {current.temp_c}<small>&deg;c</small>
              </em>
              <button onClick={e => this.props.deleteUserLocation(locationName)}>Delete</button>
            </div>
          </a>
        );
    }
}
