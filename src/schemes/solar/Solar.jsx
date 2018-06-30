import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Scheme1,
  Scheme2,
  Scheme3,
  Scheme4,
  Scheme6,
  Scheme7,
  Scheme8,
  Scheme9,
  Scheme10,
  Scheme11,
  Scheme12,
  Scheme13,
  Scheme14,
  Scheme15,
  Scheme16,
  Scheme17,
} from './schemes'
class Solar extends Component {
  schemes = {
    scheme1: Scheme1,
    scheme2: Scheme2,
    scheme3: Scheme3,
    scheme4: Scheme4,
    scheme6: Scheme6,
    scheme7: Scheme7,
    scheme8: Scheme8,
    scheme9: Scheme9,
    scheme10: Scheme10,
    scheme11: Scheme11,
    scheme12: Scheme12,
    scheme13: Scheme13,
    scheme14: Scheme14,
    scheme15: Scheme15,
    scheme16: Scheme16,
    scheme17: Scheme17,
  }

  render() {
    const Scheme = this.schemes['scheme' + this.props.data.p170.value]
    if (!Scheme) {
      return null
    }

    return <Scheme />
  }
}

const mapStateToProps = state => {
  const { data } = state
  return {
    data,
  }
}

const ConnectedSolar = connect(mapStateToProps)(Solar)
export { ConnectedSolar as Solar }

Solar.propTypes = {
  data: PropTypes.object,
}

Solar.defaultProps = {
  data: {},
  height: 0,
  width: 0,
}
