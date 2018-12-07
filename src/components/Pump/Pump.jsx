import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Label from '../Label'

class Pump extends Component {
  getLabelPosition = () => {
    const { label: { left, top, position } } = this.props
    switch (position) {
      case 'left':
        return {
          left: -15,
          top: 18
        }
      case 'right':
        return {
          left: 31,
          top: 18
        }
      case 'bottom':
        return {
          left: 8,
          top: 40
        }
      case 'top':
        return {
          left: 8,
          top: -4
        }
      default:
        return {
          left,
          top
        }
    }
  }

  getLabelValues = () => {
    const { label: { sign } } = this.props

    return {
      sign,
      ...this.getLabelPosition()
    }
  }

  _getColros = () => {
    const { active, activeColor } = this.props

    if (active && activeColor) {
      if (activeColor === 'hot') {
        return ["#ea9494", "#e82f2f", "#a21d1d", "#e82f2f", "#e60f0f", "#e41515"]
      }
      return ["#9191f5", "#3434f7", "#2525f9", "#6e6eec", "#5050e4", "#4444ea"]
    }
    return ["#ffffff", "#666666", "#999999", "#666666", "#cccccc", "#666666"]
  }

  render() {
    const colors = this._getColros()

    return (
      <g className='Pump' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
        {
          this.props.label && <Label {...this.getLabelValues()} />
        }

        <circle
          style={{ fill: colors[0], fillRule: 'nonzero', strokeWidth: '0.26458332' }}
          cx='12.324'
          cy='11.817003'
          r='11.824' />
        <path
          style={{ fill: colors[1], fillRule: 'nonzero', strokeWidth: '0.00461961' }}
          d='m 12.49848,1.8945714 c -0.15197,0 -0.30352,0.004 -0.45409,0.0127 2.62494,0.11557 4.99458,1.22783 6.73555,2.9688 h 0.003 c 1.84036,1.83901 2.97951,4.38336 2.97951,7.1909196 0,2.80493 -1.13915,5.34783 -2.97951,7.18824 l -0.003,0.003 c -1.74097,1.74097 -4.11061,2.85328 -6.73555,2.9688 0.1507,0.008 0.30224,0.0127 0.45409,0.0127 2.80624,0 5.34783,-1.13914 7.18824,-2.97955 l 0.004,-0.003 c 1.83901,-1.84041 2.97951,-4.38331 2.97951,-7.18825 0,-2.8075596 -1.1405,-5.3518996 -2.97951,-7.1909096 h -0.004 c -1.84041,-1.84037 -4.382,-2.97951 -7.18824,-2.97951 z'
        />
        <path
          style={{ fill: colors[2], fillRule: 'nonzero', strokeWidth: '0.00461961' }}
          d='m 12.57908,4.4149768e-4 c 3.33149,0 6.34999,1.35139990232 8.53287,3.53430990232 l -0.001,0.003 c 2.18558,2.18562 3.53702,5.20412 3.53702,8.5315596 0,3.32883 -1.35144,6.34597 -3.53571,8.53024 v 0.003 c -2.18291,2.18427 -5.20141,3.53567 -8.53291,3.53567 -3.33145,0 -6.34999,-1.3514 -8.53422,-3.53567 v -0.003 c -2.18296,-2.18427 -3.53575,-5.20141 -3.53575,-8.53024 0,-3.3314996 1.35279,-6.3499596 3.53575,-8.5342696 C 6.22936,1.3521314 9.2479,7.3149768e-4 12.57935,7.3149768e-4 Z M 19.54699,5.1011114 c -1.78263,-1.78128 -4.24633,-2.8855 -6.96791,-2.8855 -2.72159,0 -5.18669,1.10422 -6.96792,2.8855 -1.78131,1.78262 -2.88553,4.24632 -2.88553,6.9679096 0,2.72298 1.10291,5.18668 2.88282,6.96931 l 0.003,-0.001 c 1.78123,1.78127 4.24633,2.88549 6.96792,2.88549 2.72023,0 5.18528,-1.10422 6.96791,-2.88549 l 10e-4,0.001 c 1.77996,-1.78263 2.88283,-4.24633 2.88283,-6.96931 0,-2.7242996 -1.10156,-5.1879996 -2.88147,-6.9679096 h -0.003 z'
        />
        <path
          style={{ fill: colors[3], fillRule: 'nonzero', strokeWidth: '0.00461961' }}
          d='m 12.06856,4.4149768e-4 c 0.17991,0 0.36024,0.004000002 0.53871,0.0127000023 -3.11523,0.13716 -5.9255,1.4575199 -7.99158,3.5221999 h -0.004 c -2.18295,2.18432 -3.53566,5.20277 -3.53566,8.5342696 0,3.32883 1.35271,6.34598 3.53566,8.53025 l 0.004,0.003 c 2.06608,2.06604 4.87635,3.38653 7.99158,3.52356 -0.17864,0.008 -0.35855,0.0127 -0.53871,0.0127 -3.32875,0 -6.34589,-1.35139 -8.53021,-3.53566 l -0.004,-0.003 C 1.3514,18.416191 0,15.399041 0,12.070211 0,8.7387114 1.3514,5.7202614 3.53435,3.5359514 h 0.004 c 2.18432,-2.18292 5.20146,-3.5343099 8.53021,-3.5343099 z'
        />
        <path
          style={{ fill: colors[4], fillRule: 'nonzero', strokeWidth: '0.00461961' }}
          d='m 12.5781,0.0022015 c -0.1816,0 -0.36151,0.004 -0.53871,0.0127 3.11387,0.13716 5.9255,1.4575199 7.99153,3.5222499 h 0.004 c 2.18291,2.18427 3.53566,5.20277 3.53566,8.5342596 0,3.32884 -1.35275,6.34594 -3.53566,8.53025 l -0.004,0.003 c -2.06603,2.06612 -4.87766,3.38662 -7.99153,3.52364 0.17737,0.008 0.35728,0.0127 0.53871,0.0127 3.32875,0 6.34458,-1.35143 8.52885,-3.53574 l 0.004,-0.003 c 2.18427,-2.18431 3.53571,-5.20141 3.53571,-8.53024 0,-3.3314996 -1.35144,-6.3499996 -3.53571,-8.5342696 h -0.004 C 18.92268,1.3548414 15.90685,0.0034015 12.5781,0.0034015 Z'
        />

        <g transform='rotate(360)'>
          <path
            style={{ fill: colors[5], fillRule: 'nonzero', strokeWidth: '0.26458454' }}
            d='m 18.692232,15.215338 -6.368366,0 -6.3683662,0 3.184183,-5.5151669 3.1841832,-5.5151669 3.184183,5.5151667 z' />
          {
            !this.props.data.animationsPaused && this.props.active &&
            <animateTransform
              attributeName='transform'
              attributeType='XML'
              dur={this.props.activeDuration}
              repeatCount='indefinite'
              type='rotate'
              from='0 11.911 12'
              to='360 11.911 12'
            />
          }
        </g>
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

const ConnectedPump = connect(mapStateToProps)(Pump);
export { ConnectedPump as Pump }

Pump.propTypes = {
  activeColor: PropTypes.string,
  activeDuration: PropTypes.number,
  data: PropTypes.object,
  left: PropTypes.number,
  top: PropTypes.number,
};

Pump.defaultProps = {
  activeColor: '',
  activeDuration: 2,
  data: {},
  left: 0,
  top: 0,
};