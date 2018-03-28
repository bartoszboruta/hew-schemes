import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Scheme1, Scheme2, Scheme3, Scheme4, Scheme6 } from './schemes';

class Solar extends Component {
  render() {
    return <Scheme6 />
  }
}

export { Solar }

Solar.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

Solar.defaultProps = {
  height: 0,
  width: 0,
};