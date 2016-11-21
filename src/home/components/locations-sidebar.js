import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import myButton from '../../assets/objects/buttons.scss'

// import styles from '../assets/home.css'

export default class MyChildComponent extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className={myButton.myButton}>
              <a href="www.google.com">
                Go to Google!
              </a>
            </div>
        );
    }
}
