import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Relay } from '../Relay'

class Relays extends Component {
  render() {
    const relaysCount = this.props.relays.length
    let relays = this.props.relays.map((element, index) => {
      return (
        <Relay
          group={this.props.group}
          key={index}
          number={index}
          onClickHandler={this.props.onRelayClick}
          top={-50 * (relaysCount - 1) + 50 * index}
        />
      )
    }, this)

    return (
      <g className="Relays" transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
        {relays}
      </g>
    )
  }
}

export { Relays }

Relays.propTypes = {
  group: PropTypes.string.isRequired,
  heater: PropTypes.object,
  left: PropTypes.number,
  relays: PropTypes.array,
  top: PropTypes.number,
  onRelayClick: PropTypes.func,
}

Relays.defaultProps = {
  group: '',
  heater: null,
  left: 0,
  relays: [],
  top: 0,
  onRelayClick: function() {},
}
