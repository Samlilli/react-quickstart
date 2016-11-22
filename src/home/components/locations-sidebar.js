import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Location from './location';

import locationSidebar from '../../assets/components/location-sidebar.scss'
import buttons from '../../assets/objects/buttons.scss'

// import styles from '../assets/home.css'

export default class LocationsSidebar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        newLocation: ''
      }
    }

    static propTypes = {
      onGetWeather: PropTypes.func.isRequired,
      onAddUserLocation: PropTypes.func.isRequired,
      locations: PropTypes.array
    }

    _handleChange = (e) => {
      this.setState({newLocation: e.target.value});
    }

    _renderLocations = () => {
      var locations = this.props.locations;
      return locations.map((locationData, i) => {
        return (
          <Location
            locationData={locationData}
            key={i}
          />
        )
      })
    }



    // _renderNewLocation = () => {
    //   var locations = this.state.locations
    //   locations.push(
    //     <Location
    //       location={this.state.newLocation}
    //       getWeather={this.props.getWeather}
    //       key={i}
    //     />
    //   )
    //   this.setState({locations: locations})
    // }

    render() {
        return (
          <div className={locationSidebar.container}>
            <div className={locationSidebar.titleBar}>
              <h4 className={locationSidebar.title}>My Locations</h4>
            </div>
            <div className={locationSidebar.addLocationContainer}>
              <input type="text" className={locationSidebar.addLocationInput} placeholder="Add location" value={this.state.newLocation} onChange={this._handleChange} />
              <a href="#" className={locationSidebar.addLocationBtn} onClick={e => this.props.onAddUserLocation(this.state.newLocation)}>+</a>
            </div>
            {this._renderLocations()}
          </div>
        );
    }
}
