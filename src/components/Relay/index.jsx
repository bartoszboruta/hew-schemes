import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RelaySymbol } from './RelaySymbol'
import { ManualSwitch } from './ManualSwitch'

class Relay extends Component {
  state = {
    clicked: false,
    manual: this.props.manual,
    name: this.props.name,
    value: this.props.value,
  }

  componentWillReceiveProps() {
    if (
      this.state.manual !== this.props.manual ||
      this.state.name !== this.props.name ||
      this.state.value !== this.props.value
    ) {
      return this.setState({
        clicked: false,
        manual: this.props.manual,
        name: this.props.name,
        value: this.props.value,
      })
    }
    this.setState({
      clicked: false,
    })
  }

  onClickHandler() {
    if (!this.state.clicked) {
      this.setState({
        clicked: true,
      })

      this.props.onClickHandler(this.props.number, this.props.group, this.state.manual)
    }
  }

  render() {
    return (
      <g className="Relay" transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
        <RelaySymbol fill={this.state.value ? '#7abf38' : '#cccccc'} />
        <ManualSwitch
          clicked={this.state.clicked}
          fill={this.state.clicked ? '#33353F' : this.state.manual ? '#7abf38' : '#cccccc'}
          left={50}
          onClickHandler={this.onClickHandler.bind(this)}
          top={-10}
        />
        <text
          style={{
            fontSize: 9.64693546,
            fontWeight: 'normal',
            fill: '#cccccc',
            fillrule: 'evenodd',
            fontFamily: 'Arial',
          }}
          x="78"
          y="611.30115"
        >
          {this.state.name}
        </text>
      </g>
    )
  }
}

export { Relay }

Relay.propTypes = {
  clicked: PropTypes.bool,
  left: PropTypes.number,
  manual: PropTypes.number.isRequired,
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func,
  top: PropTypes.number,
  value: PropTypes.number.isRequired,
}

Relay.defaultProps = {
  clicked: false,
  left: 0,
  manual: 0,
  name: 'Obwód',
  onClickHandler: function() {},
  top: 0,
  value: 0,
}
