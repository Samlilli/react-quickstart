import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import locationStyles from '../../assets/components/location.scss';

// import styles from '../assets/home.css'

export default class Location extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
          <a className={locationStyles.link} href="#">
            <div className={locationStyles.container}>
              Brighton UK
            </div>
          </a>
        );
    }
}
