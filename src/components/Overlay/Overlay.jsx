import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Overlay extends Component {
  render() {
    return <g className='Overlay' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
      <rect
        style={{fill:'#ffffff'}}
        width={this.props.width}
        height={this.props.height}
        x='0'
        y='0' />
    </g>
  }
}

export { Overlay }

Overlay.propTypes = {
  height: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
  width: PropTypes.number,
};

Overlay.defaultProps = {
  heigth: 0,
  left: 0,
  top: 0,
  width: 0,
};