import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  Split02,
  Split03,
} from './schemes'

class Split extends Component {
  schemes = {
    split02: Split02,
    split03: Split03,
  }

  render() {
    const Scheme = this.schemes[this.getScheme()]
    if (!Scheme) {
      return null
    }

    return <Scheme />
  }

  getScheme() { 
    switch (this.props.data.p100.value) {
        case 45570:
          return 'split03'
        default:
          return 'split02'
      }
  }
}

const mapStateToProps = state => {
  const { data } = state
  return {
    data,
  }
}

const ConnectedSplit = connect(mapStateToProps)(Split)
export { ConnectedSplit as Split }

Split.propTypes = {
  data: PropTypes.object,
}

Split.defaultProps = {
  data: {},
}

