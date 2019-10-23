import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Dot extends Component {
  render() {
    return (
      <g className={'Dot'} transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
        <circle cx="4" cy="4" r="4" />
      </g>
    )
  }
}

export { Dot }

Dot.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
}

Dot.defaultProps = {
  left: 0,
  top: 0,
}
