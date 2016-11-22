import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import locationStyles from '../../assets/components/location.scss';

// import styles from '../assets/home.css'

export default class Location extends React.Component {

    constructor(props) {
      super(props);
    }

    static propTypes = {
      getWeather: PropTypes.func.isRequired,
      location: PropTypes.string.isRequired
    }

    componentWillMount() {
      const { getWeather } = this.props;
      getWeather(location);
    }

    static propTypes = {
      location: PropTypes.string.isRequired
    }

    render() {
        return (
          <a className={locationStyles.link} href="#">
            <div className={locationStyles.container}>
              {this.props.location}
            </div>
          </a>
        );
    }
}
