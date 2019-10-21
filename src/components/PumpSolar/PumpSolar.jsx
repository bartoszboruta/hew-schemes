import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PumpSolar extends Component {
  static getGradients() {
    return <defs>

      <linearGradient
        id="linearGradient3693-7"
        spreadMethod="pad"
        gradientTransform="matrix(7.74142,0,0,1.42356,132.7136,95.2146)"
        gradientUnits="userSpaceOnUse"
        y2="0"
        x2="1"
        y1="0"
        x1="0">
        <stop
          id="stop3695-2"
          offset="0"
          style={{ "stopOpacity": "1", "stopColor": "#000000" }} />
        <stop
          id="stop3697-4"
          offset="1"
          style={{ "stopOpacity": "1", "stopColor": "#5b5b5b" }} />
      </linearGradient>
      <linearGradient
        id="linearGradient3675-8"
        spreadMethod="pad"
        gradientTransform="matrix(7.74142,0,0,1.42356,146.1909,95.2146)"
        gradientUnits="userSpaceOnUse"
        y2="0"
        x2="1"
        y1="0"
        x1="0">
        <stop
          id="stop3677-5"
          offset="0"
          style={{ "stopOpacity": "1", "stopColor": "#000000" }} />
        <stop
          id="stop3679-9"
          offset="1"
          style={{ "stopOpacity": "1", "stopColor": "#000000" }} />
      </linearGradient>
      <linearGradient
        id="linearGradient3653-9-1"
        y2="0"
        x2="1"
        y1="0"
        x1="0">
        <stop
          id="stop3655-8-8"
          offset="0"
          style={{ "stopOpacity": "1", "stopColor": "#bdbdbd" }} />
        <stop
          id="stop3657-9-9"
          offset="0.27"
          style={{ "stopOpacity": "1", "stopColor": "#e4e4e4" }} />
        <stop
          id="stop3659-6-3"
          offset="0.72"
          style={{ "stopOpacity": "1", "stopColor": "#f4f4f4" }} />
        <stop
          id="stop3661-2-0"
          offset="1"
          style={{ "stopOpacity": "1", "stopColor": "#d6d6d6" }} />
      </linearGradient>
    </defs>
  }

  _animation = () => {
    const { active } = this.props

    if (!active) {
      return null
    }

    return (
      <g>
        <g>
          <g id="arrow_hot">
            <polygon
              transform="matrix(0.87024041,0,0,0.87024041,-58.707995,-250.58795)"
              id="_248824344"
              points="95.9551,237.365 95.9551,222.664 89.589,222.664 89.589,237.365 86.1272,237.365 89.5157,243.699 92.9043,250.032 96.2917,243.699 99.6803,237.365 "
              style={{ "fill": "#f25353", "fillRule": "evenodd" }} />
            <polygon
              transform="matrix(0.87024041,0,0,0.87024041,-58.707995,-250.58795)"
              id="_248824176"
              points="86.5311,238.12 90.2327,238.12 90.2327,222.664 89.589,222.664 89.589,237.365 86.1272,237.365 "
              style={{ "fill": "#fcbdbe", "fillRule": "evenodd" }}
            />
            <polygon
              transform="matrix(0.87024041,0,0,0.87024041,-58.707995,-250.58795)"
              id="_248823984"
              points="95.9551,235.273 95.9551,222.664 95.315,222.664 95.315,235.273 95.315,237.365 95.315,238.032 99.3236,238.032 99.6803,237.365 95.9551,237.365 "
              style={{ "fill": "#990202", "fillRule": "evenodd" }}
            />
            <polygon
              transform="matrix(0.87024041,0,0,0.87024041,-58.707995,-250.58795)"
              id="_248823840"
              points="99.6803,237.365 92.9043,250.032 92.5854,249.437 99.0154,237.365 "
              style={{ "fill": "#990202", "fillRule": "evenodd" }}
            />
            <animate attributeType="CSS" attributeName="opacity"
              from="0" to="1" dur="3s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              dur="3s"
              type="translate"
              repeatCount="indefinite"
              from="0 0"
              to="0 70"
              calcMode="linear" />
          </g>

          <g id="arrow_cold">
            <polygon
              transform="matrix(0.83091404,0,0,0.85629271,-57.162834,-190.88686)"
              style={{ "fill": "#285caf", "fillRule": "evenodd" }}
              points="162.88,235.331 166.342,235.331 162.953,228.997 159.565,222.664 156.177,228.997 152.789,235.331 156.514,235.331 156.514,250.032 162.88,250.032 "
              id="polygon4325" />
            <polygon
              transform="matrix(0.83091404,0,0,0.85629271,-57.162834,-190.88686)"
              style={{ "fill": "#222d4e", "fillRule": "evenodd" }}
              id="polygon365"
              points="162.236,234.576 162.236,250.032 162.88,250.032 162.88,235.331 166.342,235.331 165.938,234.576 "
            />
            <polygon
              transform="matrix(0.83091404,0,0,0.85629271,-57.162834,-190.88686)"
              style={{ "fill": "#9ebdf3", "fillRule": "evenodd" }}
              id="polygon367"
              points="159.883,223.259 153.809,234.664 157.154,234.664 157.154,235.331 157.154,237.423 157.154,250.032 156.514,250.032 156.514,237.423 156.514,235.331 153.454,235.331 152.789,235.331 153.145,234.664 159.565,222.664 "
            />
            <animate attributeType="CSS" attributeName="opacity"
              from="1" to="0" dur="3s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              dur="3s"
              type="translate"
              repeatCount="indefinite"
              from="0 10"
              to="0 -50"
              calcMode="linear" />
          </g>
        </g>
      </g>
    )
  }

  render() {
    return <g className='PumpSolar' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
      {
        PumpSolar.getGradients()
      }
      {
        this._animation()
      }
      <path
        id="path3663"
        style={{ "fill": "url(#linearGradient3653-9-1)", "fillRule": "evenodd", "stroke": "none", "strokeWidth": "3.76874042" }}
        d="M 95.882407,6.6482151 V 9.7623243 45.656803 48.172814 H 0 V 45.656803 9.7623243 6.6482151 Z"
      />
      <path
        id="path3681"
        d="M 59.09121,5.3640497 H 88.265405 V 1.5406628 C 88.265405,0.69231943 87.573088,1.7633334e-6 86.725875,1.7633334e-6 H 60.63074 c -0.847212,0 -1.53953,0.6923176666666 -1.53953,1.5406610366666 z"

        style={{ "fill": "url(#linearGradient3675-8)", "fillRule": "evenodd", "stroke": "none", "strokeWidth": "3.76874042" }} />
      <path
        id="path3699"
        style={{ "fill": "url(#linearGradient3693-7)", "fillRule": "evenodd", "stroke": "none", "strokeWidth": "3.76874042" }}
        d="M 8.2987661,5.3640497 H 37.472962 V 1.5406628 C 37.472962,0.69231943 36.780644,1.7633334e-6 35.933431,1.7633334e-6 H 9.8379196 C 8.9907068,1.7633334e-6 8.2987661,0.69231943 8.2987661,1.5406628 Z"
      />
      <path
        d="M 3.094e-5,48.172823 H 95.88246 V 40.049317 H 3.094e-5 Z"

        style={{ "fill": "#2b2929", "fillOpacity": "1", "fillRule": "evenodd", "stroke": "none", "strokeWidth": "3.014992" }}
        id="path3753" />
      <path
        d="M 3.094e-5,9.8232313 H 95.88246 V 5.6674547 c 0,-0.6655597 -0.542705,-1.2082574 -1.208257,-1.2082574 H 1.208289 c -0.6655528,0 -1.20825806,0.5426977 -1.20825806,1.2082574 z"

        style={{ "fill": "#2b2929", "fillOpacity": "1", "fillRule": "evenodd", "stroke": "none", "strokeWidth": "3.014992" }}
        id="path3757" />
      <path
        d="M 34.237182,22.879797 H 61.645333 V 32.894848 H 34.237182 Z"

        style={{ "fill": "#000000", "fillOpacity": "1", "fillRule": "evenodd", "stroke": "none", "strokeWidth": "3.014992" }}
        id="path3793" />
    </g>
  }
}

export { PumpSolar }

PumpSolar.propTypes = {
  active: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  left: PropTypes.number,
  top: PropTypes.number,
};

PumpSolar.defaultProps = {
  active: false,
  left: 0,
  top: 0,
};
