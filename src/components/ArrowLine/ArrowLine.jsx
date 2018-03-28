import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArrowLine extends Component {
  getDirection() {
    switch (this.props.direction) {
      case 'left':
        return 'rotate(180,'+ this.props.width / 2 +',0)';
      case 'top':
        return 'rotate(-90,'+ this.props.width / 2 +',0)';
      case 'bottom':
        return 'rotate(90,'+ this.props.width / 2 +',0)';
      default:
        return ''
    }
  }

  render() {
    return <g className='ArrowLine' transform={'translate(' + this.props.left + ' ' + this.props.top + ') ' + this.getDirection()}>
      <path
        style={{fill:'none', fillRule:'evenodd',stroke:'#999999', strokeWidth:this.props.lineWidth, strokeOpacity:1}}
        d={'M 0,0.135 H ' + this.props.width}
      />
      <g transform={'translate(' + ((this.props.width / 2) - 10 )+ ')'}>
        <path
          d={'M 5.0460027e-7,11.733351 0,0.13249944 4.4907404e-7,-11.468352 10.046633,-5.6679264 20.093265,0.13249972 10.046633,5.9329262 Z'}
          style={{opacity:1,fill:'#999999'}}
        />
      </g>
    </g>
  }
}

export { ArrowLine }

ArrowLine.propTypes = {
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  left: PropTypes.number,
  lineWidth: PropTypes.number,
  top: PropTypes.number,
  width: PropTypes.number,
};

ArrowLine.defaultProps = {
  direction: 'right',
  left: 0,
  lineWidth: 1,
  top: 0,
  width: 0,
};