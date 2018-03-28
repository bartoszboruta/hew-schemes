import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Scheme1,
  Scheme2,
  Scheme3,
  Scheme4,
  Scheme6,
  Scheme7,
  Scheme8,
} from './schemes';

class Solar extends Component {
  schemes = {
    scheme1: Scheme1,
    scheme2: Scheme2,
    scheme3: Scheme3,
    scheme4: Scheme4,
    scheme6: Scheme6,
    scheme7: Scheme7,
    scheme8: Scheme8,
  };

  render() {
    const Scheme = this.schemes['scheme' + this.props.data.p170.value];
    return <Scheme />;
  }
}

const mapStateToProps = state => {
  const { data } = state;
  return {
    data
  };
};

const ConnectedSolar = connect(mapStateToProps)(Solar);
export { ConnectedSolar as Solar };

Solar.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number
};

Solar.defaultProps = {
  data: {},
  height: 0,
  width: 0
};
