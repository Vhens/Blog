import React, { PureComponent } from 'react';

import img from '../../static/images/noPage.gif';
import './error.scss';

export default class Error extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="error">
         <img src={img} alt="404"/>
      </div>
    );
  }
}