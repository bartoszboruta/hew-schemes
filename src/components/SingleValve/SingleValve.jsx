import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleValve extends Component {
  static getGradients() {
    return <defs>
      <linearGradient
        id='linearGradient4595'
        spreadMethod='pad'
        gradientTransform='matrix(8.978761,0,0,-18.497906,0,19.593931)'
        gradientUnits='userSpaceOnUse'
        y2='0'
        x2='1'
        y1='0'
        x1='0'>
        <stop
          offset='0'
          style={{ stopOpacity: 1, stopColor: '#ff0000' }} />
        <stop
          offset='1'
          style={{ stopOpacity: 1, stopColor: '#990202' }} />
      </linearGradient>
      <linearGradient
        id='linearGradient4573'
        spreadMethod='pad'
        gradientTransform='matrix(-6.4622745,0,0,7.2749828,18.920536,8.0534058e-5)'
        gradientUnits='userSpaceOnUse'
        y2='0'
        x2='1'
        y1='0'
        x1='0'>
        <stop
          offset='0'
          style={{ stopOpacity: 1, stopColor: '#898989' }} />
        <stop
          offset='0.5'
          style={{ stopOpacity: 1, stopColor: '#d9dada' }} />
        <stop
          offset='1'
          style={{ stopOpacity: 1, stopColor: '#898989' }} />
      </linearGradient>
      <linearGradient
        id='linearGradient4553'
        spreadMethod='pad'
        gradientTransform='matrix(-6.4622745,0,0,7.2749828,18.920536,13.414941)'
        gradientUnits='userSpaceOnUse'
        y2='0'
        x2='1'
        y1='0'
        x1='0'>
        <stop
          offset='0'
          style={{ stopOpacity: 1, stopColor: '#898989' }} />
        <stop
          offset='0.5'
          style={{ stopOpacity: 1, stopColor: '#d9dada' }} />
        <stop
          offset='1'
          style={{ stopOpacity: 1, stopColor: '#898989' }} />
      </linearGradient>
      <linearGradient
        id='linearGradient4533'
        spreadMethod='pad'
        gradientTransform='matrix(0,7.009153,15.079396,0,10.630119,6.8385605)'
        gradientUnits='userSpaceOnUse'
        y2='0'
        x2='1'
        y1='0'
        x1='0'>
        <stop
          offset='0'
          style={{ stopOpacity: 1, stopColor: '#898989' }} />
        <stop
          offset='0.5'
          style={{ stopOpacity: 1, stopColor: '#d9dada' }} />
        <stop
          offset='1'
          style={{ stopOpacity: 1, stopColor: '#898989' }} />
      </linearGradient>
    </defs>
  }

  getDirection() {
    switch (this.props.direction) {
      case 'right':
        return 'rotate(180,9.4587305,10.345041)';
      case 'top':
        return 'rotate(90,9.4587305,10.345041)';
      case 'bottom':
        return 'rotate(-90,9.4587305,10.345041)';
      default:
        return ''
    }
  }

  render() {
    return <g className='SingleValve' transform={'translate(' + this.props.left + ' ' + this.props.top + ') ' + this.getDirection()}>
      {
        SingleValve.getGradients()
      }
      <rect
        style={{opacity:1,fill:'#ffffff'}}
        width='10.377041'
        height='20.386082'
        x='10'
        y='0' />
      <path
        d='m 18.478722,8.8973305 v 2.8954205 c 0,1.13103 -0.480935,2.05492 -1.068899,2.05492 H 10.630119 V 6.8427905 h 6.779704 c 0.587964,0 1.068899,0.92389 1.068899,2.05454'
        style={{ fill: 'url(#linearGradient4533)', fillRule: 'evenodd', stroke: 'none', strokeWidth: 1.2100445 }} />
      <path
        d='m 17.022794,20.690001 h -2.670212 c -1.042259,0 -1.894282,-1.206224 -1.894282,-2.681758 v -7.615961 h 6.459161 v 7.615961 c 0,1.475534 -0.852023,2.681758 -1.894667,2.681758'
        style={{ fill: 'url(#linearGradient4553)', fillRule: 'evenodd', stroke: 'none', strokeWidth: 1.2100445 }} />
      <path
        d='M 17.022794,8.085617e-5 H 14.352582 C 13.310323,8.085617e-5 12.4583,1.3916872 12.4583,3.0946499 v 8.7859251 h 6.459161 V 3.0946499 c 0,-1.7029627 -0.852023,-3.09456904383 -1.894667,-3.09456904383'
        style={{ fill: 'url(#linearGradient4573)', fillRule: 'evenodd', stroke: 'none', strokeWidth: 1.2100445 }} />
      <path
        style={{ fill: '#191919', fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 1.21004462 }}
        d='M 10.720806,1.0973005 V 19.593921 H 8.978709 V 1.0973005 Z' />
      <path
        d='M 0,1.0973005 V 19.593931 H 8.978723 V 1.0973005 Z'
        style={{ fill: 'url(#linearGradient4595)', fillRule: 'evenodd', stroke: 'none', strokeWidth: 1.2100445 }} />
    </g>
  }
}

export { SingleValve }

SingleValve.propTypes = {
  direction: PropTypes.oneOf(['right', 'top', 'bottom', 'left']),
  left: PropTypes.number,
  top: PropTypes.number,
};

SingleValve.defaultProps = {
  direction: 'left',
  left: 0,
  top: 0,
};