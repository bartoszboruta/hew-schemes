import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Battery extends Component {
  static getGradients() {
    return (
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="battery-gradient"
          x1="89.147301"
          x2="108.321"
          y1="92.3507"
          y2="92.3507"
        >
          <stop offset="0" style={{ stopColor: '#EBECEC' }} />
          <stop offset="0.470588" style={{ stopColor: '#E4E4E4' }} />
          <stop offset="0.509804" style={{ stopColor: '#E9E9EA' }} />
          <stop offset="0.588235" style={{ stopColor: '#F4F4F4' }} />
          <stop offset="1" style={{ stopColor: '#FEFEFE' }} />
        </linearGradient>
      </defs>
    )
  }

  render() {
    const { left, scale, top } = this.props
    return (
      <g
        className="Battery"
        transform={`translate(${left} ${top}) scale(${scale / 100} ${scale / 100})`}
      >
        {Battery.getGradients()}
        <g transform={'translate(-50, -180) scale(3, 3)'}>
          <polygon
            points="33.6671,70.5836 33.6671,70.9955 18.2301,70.9955 18.2301,70.5836 18.2301,62.5406 18.2301,62.0307 33.6671,62.0307 33.6671,62.5406"
            style={{ fill: 'url(#battery-gradient)' }}
          />
          <polygon
            points="18.2306,70.9955 18.2279,62.0307 18.3638,62.0307 18.3638,70.9955"
            style={{ fill: '#999999' }}
          />
          <path
            d="m 18.2301,70.943 h 15.437 v 0.4195 c 0,0.0671 -0.0549,0.1219 -0.1219,0.1219 H 18.3519 c -0.0671,0 -0.1218,-0.0548 -0.1218,-0.1219 z"
            style={{ fill: '#727271' }}
          />
          <polygon
            points="33.6634,70.9955 33.6657,62.0307 33.5335,62.0307 33.5335,70.9955 "
            style={{ fill: '#b3b3b3' }}
          />
          <path
            d="m 18.2301,62.0307 h 15.437 V 61.374 c 0,-0.1053 -0.086,-0.191 -0.191,-0.191 h -15.055 c -0.1052,0 -0.191,0.0857 -0.191,0.191 z"
            style={{ fill: '#727271' }}
          />
          <rect
            height="1.05414"
            rx="0.081600003"
            ry="0.081600003"
            style={{ fill: '#727271' }}
            width="1.47601"
            x="21.101"
            y="60.2159"
          />
          <rect
            height="1.05414"
            rx="0.081600003"
            ry="0.081600003"
            style={{ fill: '#727271' }}
            width="1.47601"
            x="29.1066"
            y="60.2159"
          />
          <g>
            <rect
              height="1.89783"
              rx="0.082800001"
              ry="0.082800001"
              style={{ fill: '#c87f7f' }}
              width="0.529185"
              x="21.5553"
              y="63.6646"
            />
            <rect
              height="2.2931001"
              rx="0.082800001"
              ry="0.082800001"
              style={{ fill: '#c87f7f' }}
              transform="matrix(0,0.827628,-0.827628,0,22.7928,64.3487)"
              width="0.63940001"
              x="0"
              y="0"
            />
          </g>
          <rect
            height="2.2931001"
            rx="0.082800001"
            ry="0.082800001"
            style={{ fill: '#666666' }}
            transform="matrix(0,0.827628,-0.827628,0,30.8357,64.3489)"
            width="0.63940001"
            x="0"
            y="0"
          />
        </g>
      </g>
    )
  }
}

export { Battery }

Battery.propTypes = {
  left: PropTypes.number,
  scale: PropTypes.number,
  top: PropTypes.number,
}

Battery.defaultProps = {
  left: 0,
  scale: 100,
  top: 0,
}
