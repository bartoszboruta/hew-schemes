import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Support extends Component {
  render() {
    return (
      <g
        className={'Support'}
        transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="SVG_SUPPORT_GRADIENT"
            x1="89.1387"
            x2="108.555"
            xmlns="http://www.w3.org/2000/svg"
            y1="111.561"
            y2="111.732"
          >
            <stop offset="0" style={{ stopColor: '#898989' }} />
            <stop offset="0.541176" style={{ stopColor: '#B2B3B3' }} />
            <stop offset="1" style={{ stopColor: '#898989' }} />
          </linearGradient>
        </defs>
        <g>
          <rect
            height={this.props.height}
            style={{ fill: 'url(#SVG_SUPPORT_GRADIENT)' }}
            width={this.props.width}
            x='0'
            y='0' />
          <rect
            height={this.props.height - 6}
            style={{ fill: '#ffffff' }}
            width={this.props.width - 14}
            x='7'
            y='7' />
        </g>
      </g>
    )
  }
}

export { Support }

Support.propTypes = {
  height: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
  width: PropTypes.number,
}

Support.defaultProps = {
  height: 25,
  left: 0,
  top: 0,
  width: 90,
}