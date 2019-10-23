import React from 'react'
import PropTypes from 'prop-types'

class NetworkOutlet extends React.Component {
  render() {
    const { left, scale, top } = this.props
    return (
      <g transform={`translate(${left} ${top}) scale(${scale / 100} ${scale / 100})`}>
        <g
          id="networkOutlet"
          transform="matrix(4.2985163,0,0,-4.2985163,-2053.4994,1768.1814) translate(0, 60)"
        >
          <g>
            <text id="text4545" transform="matrix(1,0,0,-1,485,301)">
              <tspan
                className="label"
                dy="1.2em"
                id="tspan4547"
                style={{
                  fontSize: 2.76539993,
                  fontVariant: 'normal',
                  fontWeight: 'normal',
                  fontStretch: 'condensed',
                  writingMode: 'lr-tb',
                  fill: '#4d4d4d',
                  fillOpacity: 1,
                  fillRule: 'nonzero',
                  stroke: 'none',
                  fontFamily: 'Myriad Pro',
                }}
                x="0"
              >
                SIEĆ
              </tspan>
              <tspan
                className="label"
                dy="1.2em"
                id="tspan4547"
                style={{
                  fontSize: 2.76539993,
                  fontVariant: 'normal',
                  fontWeight: 'normal',
                  fontStretch: 'condensed',
                  writingMode: 'lr-tb',
                  fill: '#4d4d4d',
                  fillOpacity: 1,
                  fillRule: 'nonzero',
                  stroke: 'none',
                  fontFamily: 'Myriad Pro',
                }}
                x="0"
              >
                ENERGETYCZNA
              </tspan>
            </text>
            <path
              d="m 0,0 0,-26.893 12.043,0 m 0,82.127 L 0,55.234 0,6.79"
              style={{
                fill: 'none',
                stroke: '#b3b3b3',
                strokeWidth: 1.07700002,
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 22.926006,
                strokeOpacity: 1,
                strokeDasharray: 2.154,
                strokeDashoffset: 0,
              }}
              transform="translate(491.6221,293.291)"
            />
          </g>
          <g>
            <path
              d="m 491.6221,350.269 c 1.055,0 1.91,-0.855 1.91,-1.909 0,-1.055 -0.855,-1.91 -1.91,-1.91 -1.055,0 -1.909,0.855 -1.909,1.91 0,1.054 0.854,1.909 1.909,1.909"
              style={{
                fill: '#ffffff',
                fillOpacity: 1,
                fillRule: 'evenodd',
                stroke: 'none',
              }}
            />
            <path
              d="m 492.5723,349.3091 c -0.243,0.243 -0.579,0.393 -0.95,0.393 -0.37,0 -0.706,-0.15 -0.949,-0.393 -0.243,-0.243 -0.393,-0.579 -0.393,-0.949 0,-0.372 0.149,-0.708 0.392,-0.951 l 10e-4,10e-4 c 0.243,-0.243 0.579,-0.393 0.949,-0.393 0.371,0 0.707,0.15 0.95,0.393 l 0.001,-10e-4 c 0.242,0.243 0.392,0.579 0.392,0.951 0,0.37 -0.151,0.706 -0.393,0.949 m -0.95,1.527 c 0.683,0 1.304,-0.277 1.752,-0.725 0.447,-0.448 0.724,-1.068 0.724,-1.751 0,-0.682 -0.277,-1.301 -0.724,-1.749 l 0,-0.003 c -0.448,-0.447 -1.069,-0.725 -1.752,-0.725 -0.684,0 -1.303,0.278 -1.751,0.725 l 0,0.003 c -0.448,0.448 -0.726,1.067 -0.726,1.749 0,0.683 0.279,1.303 0.726,1.751 0.448,0.448 1.067,0.725 1.751,0.725"
              style={{
                fill: '#b3b3b3',
                fillOpacity: 1,
                fillRule: 'nonzero',
                stroke: 'none',
              }}
            />
          </g>
        </g>
      </g>
    )
  }
}

export { NetworkOutlet }

NetworkOutlet.propTypes = {
  left: PropTypes.number,
  scale: PropTypes.number,
  top: PropTypes.number,
}

NetworkOutlet.defaultProps = {
  left: 0,
  scale: 100,
  top: 0,
}
