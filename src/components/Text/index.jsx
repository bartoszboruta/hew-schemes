import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Text extends Component {
  render() {
    return (
      <g className={'Text'} transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
        <text transform="matrix(1,0,0,1,0,10)">
          <tspan
            className="label"
            style={{
              fontSize: 12,
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
          >
            {this.props.text}
          </tspan>
        </text>
      </g>
    )
  }
}

export { Text }

Text.propTypes = {
  left: PropTypes.number,
  text: PropTypes.string,
  top: PropTypes.number,
}

Text.defaultProps = {
  left: 0,
  text: '',
  top: 0,
}
