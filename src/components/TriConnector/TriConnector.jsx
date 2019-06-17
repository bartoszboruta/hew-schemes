import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TriConnector extends Component {
  _getDirection() {
    switch (this.props.direction) {
      case 'reversedVertical':
        return 'matrix(1,0,0,-1,0,12.499662)';
      case 'rotatedLeft':
        return 'rotate(-90,7.7476525,6.2498312)';
      case 'rotatedRight':
        return 'rotate(90,7.7476525,6.2498312)';
      default:
        return '';
    }
  }

  _renderGradiens() {
    return <defs
      id="defs833">
      <linearGradient
        id="linearGradient4595_1"
        spreadMethod="pad"
        gradientTransform="matrix(8.978761,0,0,-18.497906,-0.7585204,19.59393)"
        gradientUnits="userSpaceOnUse"
        y2="0"
        x2="1"
        y1="0"
        x1="0">
        <stop
          id="stop4597"
          offset="0"
          style={{ "stopOpacity": "1", "stopColor": "#ff0000" }} />
        <stop
          id="stop4599"
          offset="1"
          style={{ "stopOpacity": "1", "stopColor": "#990202" }} />
      </linearGradient>
      <linearGradient
        id="linearGradient4573_1"
        spreadMethod="pad"
        gradientTransform="matrix(-6.4622745,0,0,7.2749827,6.462236,7.9e-5)"
        gradientUnits="userSpaceOnUse"
        y2="0"
        x2="1"
        y1="0"
        x1="0">
        <stop
          id="stop4575"
          offset="0"
          style={{ "stopOpacity": "1", "stopColor": "#898989" }} />
        <stop
          id="stop4577"
          offset="0.5"
          style={{ "stopOpacity": "1", "stopColor": "#d9dada" }} />
        <stop
          id="stop4579"
          offset="1"
          style={{ "stopOpacity": "1", "stopColor": "#898989" }} />
      </linearGradient>
      <linearGradient
        id="linearGradient4553_1"
        spreadMethod="pad"
        gradientTransform="matrix(-6.4622745,0,0,7.2749827,6.462236,13.414939)"
        gradientUnits="userSpaceOnUse"
        y2="0"
        x2="1"
        y1="0"
        x1="0">
        <stop
          id="stop4555"
          offset="0"
          style={{ "stopOpacity": "1", "stopColor": "#898989" }} />
        <stop
          id="stop4557"
          offset="0.5"
          style={{ "stopOpacity": "1", "stopColor": "#d9dada" }} />
        <stop
          id="stop4559"
          offset="1"
          style={{ "stopOpacity": "1", "stopColor": "#898989" }} />
      </linearGradient>
      <linearGradient
        id="linearGradient4533_1"
        spreadMethod="pad"
        gradientTransform="matrix(0,7.0091529,13.248332,0,2.2e-4,6.838559)"
        gradientUnits="userSpaceOnUse"
        y2="0"
        x2="1"
        y1="0"
        x1="0">
        <stop
          id="stop4535"
          offset="0"
          style={{ "stopOpacity": "1", "stopColor": "#898989" }} />
        <stop
          id="stop4537"
          offset="0.5"
          style={{ "stopOpacity": "1", "stopColor": "#d9dada" }} />
        <stop
          id="stop4539"
          offset="1"
          style={{ "stopOpacity": "1", "stopColor": "#898989" }} />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient4533_1"
        id="linearGradient1486_1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(7.0091529,0,0,-13.248756,6.769749,13.247)"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        spreadMethod="pad" />
      <linearGradient
        xlinkHref="#linearGradient4573_1"
        id="linearGradient1490_1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0,6.4624813,7.2749827,0,0,6.7845577)"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        spreadMethod="pad" />
      <linearGradient
        xlinkHref="#linearGradient4573_1"
        id="linearGradient1504_1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0,6.4624813,-7.2749827,0,20.603085,6.7845577)"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        spreadMethod="pad" />
    </defs>
  }

  render() {

    return (
      <g className='TriConnector' transform={'translate(' + this.props.left + ' ' + this.props.top + ') ' + this._getDirection()}>
        {
          this._renderGradiens()
        }
        <rect
          style={{ "fill": "#ffffff", "fillOpacity": "1", "stroke": "none", "strokeWidth": "0.03000584", "strokeMiterlimit": "4", "strokeDasharray": "none", "strokeOpacity": "1", "paintOrder": "stroke fill markers" }}
          width="18.603001"
          height="15.247"
          x="1"
          y="2.5939949e-007" />
        <path
          d="m 8.828519,0 h 2.89542 c 1.13103,0 2.05492,0.81172896 2.05492,1.8041057 V 13.247 H 6.773979 V 1.8041057 C 6.773979,0.81172896 7.697869,0 8.828519,0"
          style={{ "fill": "url(#linearGradient1486_1)", "fillRule": "evenodd", "stroke": "none", "strokeWidth": "1.13421893" }}
          id="path1480" />
        <path
          d="m 0,8.68236 v 2.670297 C 0,12.39495 0.85202,13.247 1.89467,13.247 H 7.27391 V 6.7876324 H 1.89467 C 0.85202,6.7876324 0,7.6396827 0,8.68236"
          style={{ "fill": "url(#linearGradient1490_1)", "fillRule": "evenodd", "stroke": "none", "strokeWidth": "1.21006382" }}
          id="path1484" />
        <path
          id="path1502"
          style={{ "fill": "url(#linearGradient1504_1)", "fillRule": "evenodd", "stroke": "none", "strokeWidth": "1.21006382" }}
          d="m 20.603085,8.68236 v 2.670297 c 0,1.042293 -0.85202,1.894343 -1.89467,1.894343 h -5.37924 V 6.7876324 h 5.37924 c 1.04265,0 1.89467,0.8520503 1.89467,1.8947276"
        />
      </g>
    )
  }
}

const mapStateToProps = (state) => {
  const { data, dimensions } = state;
  return {
    data,
    dimensions
  };
};

const ConnectedTriConnector = connect(mapStateToProps)(TriConnector);
export { ConnectedTriConnector as TriConnector }

TriConnector.propTypes = {
  data: PropTypes.object,
  direction: PropTypes.oneOf(['normal', 'reversedVertical', 'rotatedLeft', 'rotatedRight']),
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired
};

TriConnector.defaultProps = {
  data: {},
  direction: 'normal',
  left: 0,
  top: 0
};


class LegacyTriConnector extends Component {
  getDirection() {
    switch (this.props.direction) {
      case 'reversedVertical':
        return 'matrix(1,0,0,-1,0,12.499662)';
      case 'rotatedLeft':
        return 'rotate(-90,7.7476525,6.2498312)';
      case 'rotatedRight':
        return 'rotate(90,7.7476525,6.2498312)';
      default:
        return '';
    }
  }

  render() {
    return (
      <g className='TriConnector' transform={'translate(' + this.props.left + ' ' + this.props.top + ') ' + this.getDirection()}>
        <rect
          style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, strokeWidth: 0.26458332 }}
          width='9.6605959'
          height='3.198'
          x='2.9154034'
          y='-0.00033760071' />
        <rect
          style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, strokeWidth: 0.26458332 }}
          width='15.495305'
          height='9.6596394'
          x='0'
          y='2.8403606'
          ry='0' />
        <path
          d='m 11.376,3.0204981 v -0.001 -2.04150001 H 4.118 v 2.04151001 10e-4 z M 9.9043579e-6,12.499998 V 3.0199981 H 3.14 V -1.9073486e-6 L 12.354,-2.6190735e-4 V 3.0199981 h 3.140002 l -2e-6,9.4799999 z M 14.516,11.521998 V 3.9979981 H 0.978 v 7.5239999 z'
          style={{ opacity: 1, fill: '#4d4d4d', fillRule: 'nonzero', strokeWidth: 0.26736262 }}
          width='9.6605959' />
      </g>
    )
  }
}