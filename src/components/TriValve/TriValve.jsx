import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TriValve extends Component {
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
                    style={{stopOpacity:1,stopColor:'#ff0000'}} />
                <stop
                    offset='1'
                    style={{stopOpacity:1,stopColor:'#990202'}} />
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
                    style={{stopOpacity:1,stopColor:'#898989'}} />
                <stop
                    offset='0.5'
                    style={{stopOpacity:1,stopColor:'#d9dada'}} />
                <stop
                    offset='1'
                    style={{stopOpacity:1,stopColor:'#898989'}} />
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
                    style={{stopOpacity:1,stopColor:'#898989'}} />
                <stop
                    offset='0.5'
                    style={{stopOpacity:1,stopColor:'#d9dada'}} />
                <stop
                    offset='1'
                    style={{stopOpacity:1,stopColor:'#898989'}} />
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
                    style={{stopOpacity:1,stopColor:'#898989'}} />
                <stop
                    offset='0.5'
                    style={{stopOpacity:1,stopColor:'#d9dada'}} />
                <stop
                    offset='1'
                    style={{stopOpacity:1,stopColor:'#898989'}} />
            </linearGradient>
        </defs>
    }

    getDirection() {
        switch (this.props.direction) {
            case 'right':
                return 'rotate(180,12.853759,10.345041)';
            case 'top':
                return 'rotate(90,12.853759,10.345041)';
            case 'bottom':
                return 'rotate(-90,12.853759,10.345041)';
            default:
                return ''
        }
    }

    render() {
        return  <g className='TriValve' transform={'translate(' + this.props.left + ' ' + this.props.top + ') ' + this.getDirection()}>
            {
                TriValve.getGradients()
            }
            <path
                d='m 25.707517,8.8973305 v 2.8954205 c 0,1.13103 -0.92389,2.05492 -2.053388,2.05492 H 10.630119 V 6.8427905 h 13.02401 c 1.129498,0 2.053388,0.92389 2.053388,2.05454'
                style={{fill:'url(#linearGradient4533)',fillRule:'evenodd',stroke:'none',strokeWidth:1.2100445}} />
            <path
                d='m 17.022794,20.690001 h -2.670212 c -1.042259,0 -1.894282,-0.85203 -1.894282,-1.89429 v -5.37962 h 6.459161 v 5.37962 c 0,1.04226 -0.852023,1.89429 -1.894667,1.89429'
                style={{fill:'url(#linearGradient4553)',fillRule:'evenodd',stroke:'none',strokeWidth:1.2100445}} />
            <path
                d='M 17.022794,8.0534058e-5 H 14.352582 C 13.310323,8.0534058e-5 12.4583,0.85210053 12.4583,1.8947505 v 5.37924 h 6.459161 v -5.37924 c 0,-1.04264997 -0.852023,-1.894669965942 -1.894667,-1.894669965942'
                style={{fill:'url(#linearGradient4573)',fillRule:'evenodd',stroke:'none',strokeWidth:1.2100445}} />
            <path
                style={{fill:'#191919',fillOpacity:1,fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}}
                d='M 10.720806,1.0973005 V 19.593921 H 8.978709 V 1.0973005 Z' />
            <path
                d='M 0,1.0973005 V 19.593931 H 8.978723 V 1.0973005 Z'
                style={{fill:'url(#linearGradient4595)',fillRule:'evenodd',stroke:'none',strokeWidth:1.2100445}} />
        </g>
    }
}

export { TriValve }

TriValve.propTypes = {
    direction: PropTypes.oneOf(['right', 'top', 'bottom', 'left']),
    left: PropTypes.number,
    top: PropTypes.number,
};

TriValve.defaultProps = {
    direction: 'left',
    left: 0,
    top: 0,
};