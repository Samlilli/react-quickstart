import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Location from './location';

import locationSidebar from '../../assets/components/location-sidebar.scss'
import buttons from '../../assets/objects/buttons.scss'

// import styles from '../assets/home.css'

export default class LocationsSidebar extends React.Component {

    constructor(props) {
      super(props);
    }

    _renderLocations = () => {
      return <Location />
    }

    render() {
        return (
          <div className={locationSidebar.container}>
            <div className={locationSidebar.options}>
              Locations
              <a href="#" className={buttons.default}>+</a>
            </div>
            {this._renderLocations()}
          </div>
        );
    }
}
