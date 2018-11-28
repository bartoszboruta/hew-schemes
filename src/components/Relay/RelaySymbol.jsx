import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RelaySymbol extends Component {
  render() {
    const style = {
      fill: this.props.fill,
      fillOpacity: 1,
      fillRule: 'evenodd',
      stroke: 'none',
    }
    return (
      <g
        className="RelaySymbol"
        transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}
      >
        <path
          d={
            'm 0,590.94889 22.65748,0 c -0.326687,0.93278 -0.502926,1.92144 -0.502926,2.95308 0,0.82532 0.116059,1.62054 0.322388,2.38568 l -17.1424831,0 0,23.7622 23.7621991,0 0,-17.45628 c 0.63618,0.14185 1.293853,0.22782 1.973019,0.22782 1.18639,0 2.321198,-0.23642 3.361439,-0.66627 l 0,23.22489 -34.431116,0 0,-34.43112 z'
          }
          style={style}
        />
        <path
          d={
            'm 31.06796,589.26126 c -1.28955,0 -2.45015,0.51152 -3.28407,1.34973 l 0,0.009 c -0.83821,0.84251 -1.36263,1.99881 -1.36263,3.28407 0,1.28525 0.52442,2.45015 1.36263,3.29266 l -0.009,0 c 0.84251,0.83821 2.0074,1.35833 3.29266,1.35833 1.28096,0 2.44586,-0.52872 3.28407,-1.35833 0.83821,-0.84251 1.36263,-2.00741 1.36263,-3.29266 0,-1.28526 -0.52012,-2.45016 -1.35404,-3.29267 l -0.004,0.009 c -0.84251,-0.83821 -2.00741,-1.35833 -3.28837,-1.35833'
          }
          style={style}
        />
        <path
          d={
            'm 11.455976,604.94441 c 1.482988,0 2.686573,1.19929 2.686573,2.68657 0,1.48729 -1.203585,2.68658 -2.686573,2.68658 -1.482988,0 -2.686573,-1.19929 -2.686573,-2.68658 0,-1.48728 1.203585,-2.68657 2.686573,-2.68657'
          }
          style={style}
        />
        <path
          d={
            'm 22.97471,604.94441 c 1.48299,0 2.68657,1.19929 2.68657,2.68657 0,1.48729 -1.20358,2.68658 -2.68657,2.68658 -1.48299,0 -2.68657,-1.19929 -2.68657,-2.68658 0,-1.48728 1.20358,-2.68657 2.68657,-2.68657'
          }
          style={style}
        />
        <path
          d={
            'm 17.215128,612.04685 c 0.962872,0 1.740902,0.78233 1.740902,1.7366 0,0.96717 -0.77803,1.7409 -1.740902,1.7409 -0.962868,0 -1.740899,-0.77373 -1.740899,-1.7409 0,-0.95427 0.778031,-1.7366 1.740899,-1.7366'
          }
          style={style}
        />
      </g>
    )
  }
}

export { RelaySymbol }

RelaySymbol.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
}

RelaySymbol.defaultProps = {
  left: 0,
  top: 0,
}
