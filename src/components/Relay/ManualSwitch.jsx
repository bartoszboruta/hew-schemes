import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ManualSwitch extends Component {
  render() {
    const style = {
      fill: this.props.fill,
      stroke: '#808080',
      strokeWidth: 0.99027383,
      cursor: this.props.clicked ? 'initial' : 'pointer',
    }
    return (
      <g
        className="ManualSwitch"
        onClick={this.props.onClickHandler}
        transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}
      >
        <rect height="13.583728" style={style} width="13.583728" x="0" y="611.30115" />
      </g>
    )
  }
}

export { ManualSwitch }

ManualSwitch.propTypes = {
  clicked: PropTypes.bool,
  fill: PropTypes.string,
  left: PropTypes.number,
  onClickHandler: PropTypes.func,
  top: PropTypes.number,
}

ManualSwitch.defaultProps = {
  clicked: false,
  fill: '#cccccc',
  left: 0,
  onClickHandler: function() {},
  top: 0,
}
