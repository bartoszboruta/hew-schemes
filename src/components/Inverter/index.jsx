import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Inverter extends Component {
  static getGradients() {
    return (
      <defs>
        <linearGradient id="inverter" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#d1d1d1" />
          <stop offset="100%" stopColor="#fff" />
        </linearGradient>
      </defs>
    )
  }

  render() {
    const { left, heightScale, top } = this.props
    return (
      <g className="Inverter" transform={`translate(${left} ${top}) scale(1 ${heightScale / 100})`}>
        {Inverter.getGradients()}
        <path d={'M 4 0 L 4 105 Q 40 130 77 105 L 77 0 L 4 0'} fill="#989898" />
        <path d={'M 0 2 L 0 105 Q 40 130 75 105 L 75 2 L 0 2'} fill="url(#inverter)" />
      </g>
    )
  }
}

export { Inverter }

Inverter.propTypes = {
  left: PropTypes.number,
  heightScale: PropTypes.number,
  top: PropTypes.number,
}

Inverter.defaultProps = {
  left: 0,
  heightScale: 100,
  top: 0,
}
