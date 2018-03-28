import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PoolTank extends Component {
    static getGradients() {
        return <defs>
            <linearGradient
                id='linearGradient4703'
                spreadMethod='pad'
                gradientTransform='matrix(5.3866927,-94.544563,-97.313739,-5.5444557,93.412605,88.963072)'
                gradientUnits='userSpaceOnUse'
                y2='0'
                x2='0.98000002'
                y1='0'
                x1='0.02'>
                <stop
                    offset='0'
                    style={{stopOpacity:1, stopColor:'#008dd2'}} />
                <stop
                    offset='1'
                    style={{stopOpacity:1, stopColor:'#d2dfea'}} />
            </linearGradient>
        </defs>
    }

    render() {
        return  <g className='PoolTank' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
            {
                PoolTank.getGradients()
            }
            <path
                d='M 1.188712,77.839322 H 93.711985 V 27.683022 -2.6835205e-4 H 1.188712 Z'
                style={{fill:'url(#linearGradient4703)',fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}} />
            <path
                style={{fill:'#c4c7c7',fillOpacity:1,fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}}
                d='M 0,78.059172 V 1.3125916 C 0,0.59044165 0.590698,-2.6835205e-4 1.312836,-2.6835205e-4 v 0 c 0.722134,0 1.312834,0.59071000205 1.312834,1.31285995205 V 78.059172 c 0,0.72253 -0.5907,1.31283 -1.312834,1.31283 v 0 C 0.590698,79.372002 0,78.781702 0,78.059172' />
            <path
                style={{fill:'#c4c7c7',fillOpacity:1,fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}}
                d='m 0.944656,77.481912 h 92.767319 v 0.94542 c 0,0.51961 -0.42467,0.94467 -0.94427,0.94467 H 0.944656 C 0.425057,79.372002 0,78.946942 0,78.427332 v -8.4e-4 c 0,-0.51958 0.425057,-0.94425 0.944656,-0.94425' />
            <text
                transform='scale(0.97180247,1.0290157)'
                x='42.120026'
                y='44.506161'
                style={{fontSize:44.81786728,lineHeight:'0%',strokeWidth:1.21004462}}>
                <tspan
                    y='44.506161'
                    x='42.120026'
                    style={{fontVariant:'normal',fontWeight:'bold',fontSize:18.67411041,fontFamily:'Arial',fill:'#ffffff',fillOpacity:1,fillRule:'nonzero',stroke:'none',strokeWidth:1.21004462}}>A</tspan>
            </text>
        </g>
    }
}

export { PoolTank }

PoolTank.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
};

PoolTank.defaultProps = {
    left: 0,
    top: 0,
};