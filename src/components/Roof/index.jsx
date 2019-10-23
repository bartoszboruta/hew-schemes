import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Roof extends Component {
  render() {
    return (
      <g className={'Roof'} transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
        <g transform="scale(6.5 5)">
          <polygon
            points="17.9229,6.3889 110.439,41.0803 109.793,44.5488 17.9239,10.1144 "
            style={{ fill: '#C5C6C6' }}
          />
        </g>
      </g>
    )
  }
}

export { Roof }

Roof.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
}

Roof.defaultProps = {
  left: 0,
  top: 0,
}
