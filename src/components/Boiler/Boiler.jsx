import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Boiler extends Component {
  static getGradients() {
    return <defs>
      <linearGradient
        id='SVGID_6_'
        gradientUnits='userSpaceOnUse'
        x1='0'
        y1='150.73241'
        x2='1'
        y2='150.73241'
        gradientTransform='matrix(34.7335,0,0,38.8715,32.4375,-5817.3652)'>
        <stop
          offset='0'
          style={{ stopColor: '#C4C4C4' }}
          id='stop31' />
        <stop
          offset='0.58'
          style={{ stopColor: '#FEFEFE' }}
          id='stop33' />
        <stop
          offset='1'
          style={{ stopColor: '#C4C4C4' }}
          id='stop35' />
      </linearGradient>
      <clipPath id='SVGID_5_'>
        <use
          height='100%'
          width='100%'
          y='0'
          x='0'
          style={{ overflow: 'visible' }}
          xlinkHref='#SVGID_4_'
          overflow='visible'
          id='use28' />
      </clipPath>
      <linearGradient
        id='SVGID_3_'
        gradientUnits='userSpaceOnUse'
        x1='0.00048828131'
        y1='150.69431'
        x2='1.0005'
        y2='150.69431'
        gradientTransform='matrix(18.0913,0,0,40.0513,40.7656,-5993.6865)'>
        <stop
          offset='0'
          style={{ stopColor: '#BDBDBD' }}
          id='stop10' />
        <stop
          offset='0.27'
          style={{ stopColor: '#E4E4E4' }}
          id='stop12' />
        <stop
          offset='0.72'
          style={{ stopColor: '#F4F4F4' }}
          id='stop14' />
        <stop
          offset='1'
          style={{ stopColor: '#D6D6D6' }}
          id='stop16' />
      </linearGradient>
      <clipPath id='SVGID_2_'>
        <use
          height='100%'
          width='100%'
          y='0'
          x='0'
          style={{ overflow: 'visible' }}
          xlinkHref='#SVGID_1_'
          overflow='visible'
          id='use7' />
      </clipPath>
      <polygon
        id='SVGID_1_'
        points='58.86,59.819 58.86,61.64 40.769,61.64 40.769,59.819 40.769,24.274 40.769,22.021 58.86,22.021 58.86,24.274 ' />
      <polygon
        id='SVGID_4_'
        points='56.974,60.011 42.655,60.011 42.655,57.536 42.655,23.649 56.974,23.649 56.974,57.536 ' />
    </defs>
  }

  render() {
    return <g className='Boiler' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
      {
        Boiler.getGradients()
      }
      <g>
        <polygon
          transform='matrix(5.2999725,0,0,5.2999725,-216.07303,-111.04412)'
          style={{ clipRule: 'evenodd', fill: '#2b2929', fillRule: 'evenodd', strokeWidth: '0.04992164' }}
          points='40.769,62.442 40.769,61.746 40.769,24.98 40.769,21.219 58.86,21.219 58.86,24.98 58.86,61.746 58.86,62.442' />
        <g transform='matrix(5.2999725,0,0,5.2999725,-216.07303,-111.04412)'
          style={{ strokeWidth: '0.04992164' }}>
          <rect
            style={{ fill: 'url(#SVGID_3_)', strokeWidth: '0.04992164' }}
            x='40.769001'
            y='22.021'
            clipPath='url(#SVGID_2_)'
            width='18.091'
            height='39.618999' />
        </g>
        <g
          transform='matrix(5.2999725,0,0,5.2999725,-216.07303,-111.04412)'
          style={{ strokeWidth: '0.04992164' }}>
          <rect
            style={{ fill: 'url(#SVGID_6_)', strokeWidth: '0.04992164' }}
            x='42.654999'
            y='23.649'
            clipPath='url(#SVGID_5_)'
            width='14.319'
            height='36.362' />
        </g>
        <rect
          style={{ clipRule: 'evenodd', fill: '#999999', fillRule: 'evenodd', strokeWidth: '0.26458323' }}
          x='0.0067910166'
          y='5.6663795'
          width='0.82679576'
          height='209.9796' />
        <path
          style={{ clipRule: 'evenodd', fill: '#bfbfbf', fillRule: 'evenodd', strokeWidth: '0.26458323' }}
          d='M 10.51127,14.294807 V 207.01243 H 9.5036905 c 0,-59.05234 -0.0106,-138.143894 -0.02,-192.717623 z' />
        <path
          style={{ clipRule: 'evenodd', fill: '#d9d9d9', fillRule: 'evenodd', strokeWidth: '0.26458323' }}
          d='M 85.37339,14.294807 V 207.01243 h 1.00157 c 0,-59.07358 0.0158,-138.159724 0.02,-192.717623 z' />
        <path
          style={{ clipRule: 'evenodd', fill: '#2b2929', fillRule: 'evenodd', strokeWidth: '0.26458323' }}
          d='M 0.0016,5.6664849 H 95.88326 V 1.2780079 C 95.88326,0.57891186 95.31037,4.8593751e-6 94.60526,4.8593751e-6 H 1.278 C 0.57891,4.8593751e-6 0,0.57690886 0,1.2780079 Z' />
        <path
          style={{ clipRule: 'evenodd', fill: '#2b2929', fillRule: 'evenodd', strokeWidth: '0.26458323' }}
          d='m 0.0016,217.10364 h 95.88166 v 2.8036 c 0,0.4507 -0.36457,0.81127 -0.81527,0.81127 H 0.81328 c -0.4447,0 -0.81128,-0.36057 -0.81128,-0.81127 z' />
      </g>
    </g>
  }
}

export { Boiler }

Boiler.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
};

Boiler.defaultProps = {
  left: 0,
  top: 0,
};