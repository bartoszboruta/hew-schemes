import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Pipe extends Component {

  getColor() {
    switch (this.props.active && this.props.activeColor) {
      case 'hot':
        return '#fd5757';
      case 'cold':
        return '#4444ea';
      default:
        return '#666666';
    }
  }

  getDirection() {
    return this.props.direction === 'reversed' && {
      keyPoints: '1;0',
      keyTimes: '0;1'
    }
  }

  render() {
    return (
      <g className='Pipe' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
        <path
          d={this.props.d}
          id={this.props.id}
          style={{
            fill: 'none',
            stroke: this.getColor(),
            strokeWidth: this.props.strokeWidth
          }}
        />
        {
          !this.props.data.animationsPaused && 
          this.props.active && 
          this.props.anime && 
          this.props.duration && 
            <circle
              cx='0'
              cy='0'
              fill={this.getColor()}
              r='4'
            >
              <animateMotion
                begin={this.props.begin}
                calcMode='linear'
                dur={this.props.duration}
                repeatCount='indefinite'
                rotate='auto'
                {
                ...this.getDirection()
                }
              >
                <mpath xlinkHref={'#' + this.props.id} />
              </animateMotion>
            </circle>
        }
      </g>
    )
  }
}

const mapStateToProps = (state) => {
  const { data } = state;
  return {
    data,
  };
};

const ConnectedPipe = connect(mapStateToProps)(Pipe);
export { ConnectedPipe as Pipe }

Pipe.propTypes = {
  active: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  anime: PropTypes.bool,
  activeColor: PropTypes.string,
  begin: PropTypes.number,
  d: PropTypes.string,
  data: PropTypes.object,
  direction: PropTypes.oneOf(['normal', 'reversed']),
  duration: PropTypes.number,
  left: PropTypes.number,
  strokeWidth: PropTypes.number,
  top: PropTypes.number,
};

Pipe.defaultProps = {
  active: false,
  anime: true,
  activeColor: '',
  begin: 0,
  d: '',
  data: {},
  direction: 'normal',
  duration: 0,
  left: 0,
  strokeWidth: 3,
  top: 0,
};