import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import LocationsSidebar from './components/locations-sidebar';

import GenericStyles from '../assets/generic/_generic.all.scss'

export default class HomeContainer extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
              <LocationsSidebar/>
            </div>
        );
    }
}
