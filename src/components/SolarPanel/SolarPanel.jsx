import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SolarPanel extends Component {
  static getGradients() {
    return (
      <defs>
        <linearGradient
          gradientTransform="matrix(144.21258,-171.65352,-175.73983,-147.27601,107.44134,230.56054)"
          gradientUnits="userSpaceOnUse"
          id="linearGradient3049-1"
          spreadMethod="pad"
          x1="0.1"
          x2="0.89999998"
          y1="0"
          y2="0"
        >
          <stop offset="0" style={{ stopOpacity: 1, stopColor: '#053a8a' }} />
          <stop offset="1" style={{ stopOpacity: 1, stopColor: '#ef0705' }} />
        </linearGradient>
      </defs>
    )
  }
  render() {
    return (
      <g
        className={'SolarPanel'}
        transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}
      >
        {SolarPanel.getGradients()}
        <path
          d="M 172.09563,1.21296 1.5314961,127.91341 c -0.68255023,0.507 -0.82508968,1.47602 -0.317457,2.15772 l 7.8846782,10.5882 c 0.5072606,0.68169 1.4778657,0.82479 2.1604157,0.31817 L 181.82327,14.27704 c 0.68254,-0.507 0.82509,-1.47602 0.31746,-2.15771 L 174.25604,1.53114 c -0.50763,-0.68171 -1.47897,-0.82481 -2.16041,-0.31818"
          style={{
            fill: 'url(#linearGradient3049-1)',
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 6.72771025,
          }}
        />
        <path
          d="M 179.2144,8.59675 6.3123234,137.03378"
          style={{
            fill: 'none',
            stroke: '#e5e5e5',
            strokeWidth: 0.92584457,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 22.92558479,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M 177.23931,5.10204 4.3376171,133.53758"
          style={{
            fill: 'none',
            stroke: '#e5e5e5',
            strokeWidth: 0.92584457,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 22.92558479,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M 172.01413,1.27317 1.6115103,127.85432 c -0.72571931,0.53859 -0.8786808,1.57227 -0.337552,2.29821 l 7.7655848,10.42763 c 0.5392687,0.7248 1.5738839,0.87683 2.2999759,0.33712 L 181.74288,14.33615 c 0.72609,-0.5386 0.87793,-1.5723 0.33756,-2.2971 L 174.31596,1.61142 c -0.54113,-0.72593 -1.57499,-0.87796 -2.30183,-0.33825 z"
          style={{
            fill: 'none',
            stroke: '#2b2929',
            strokeWidth: 0.9073056,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 22.92558479,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
      </g>
    )
  }
}

export { SolarPanel }

SolarPanel.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
}

SolarPanel.defaultProps = {
  left: 0,
  top: 0,
}
