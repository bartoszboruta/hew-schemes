import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PoolPump extends Component {
    static getGradients() {
        return <defs>
            <linearGradient
                id='linearGradient4681-5'
                spreadMethod='pad'
                gradientTransform='matrix(0,-6.2533367,-1.8716312,0,22.814,84.604448)'
                gradientUnits='userSpaceOnUse'
                y2='0'
                x2='1'
                y1='0'
                x1='0'>
                <stop
                    offset='0'
                    style={{stopOpacity:1, stopColor:'#a8a6a6'}} />
                <stop
                    offset='0.42'
                    style={{stopOpacity:1, stopColor:'#e0e0e0'}} />
                <stop
                    offset='0.68'
                    style={{stopOpacity:1, stopColor:'#f5f5f5'}} />
                <stop
                    offset='1'
                    style={{stopOpacity:1, stopColor:'#d4d4d4'}} />
            </linearGradient>
            <linearGradient
                id='linearGradient4651'
                spreadMethod='pad'
                gradientTransform='matrix(0,-6.2533367,-1.8716312,0,22.814,27.029248)'
                gradientUnits='userSpaceOnUse'
                y2='0'
                x2='1'
                y1='0'
                x1='0'>
                <stop
                    offset='0'
                    style={{stopOpacity:1, stopColor:'#a8a6a6'}} />
                <stop
                    offset='0.42'
                    style={{stopOpacity:1, stopColor:'#e0e0e0'}} />
                <stop
                    offset='0.68'
                    style={{stopOpacity:1, stopColor:'#f5f5f5'}} />
                <stop
                    offset='1'
                    style={{stopOpacity:1, stopColor:'#d4d4d4'}} />
            </linearGradient>
            <linearGradient
                id='linearGradient4617'
                spreadMethod='pad'
                gradientTransform='matrix(21.616439,0,0,-101.26463,0,103.32305)'
                gradientUnits='userSpaceOnUse'
                y2='0'
                x2='1'
                y1='0'
                x1='0'>
                <stop
                    offset='0'
                    style={{stopOpacity:1, stopColor:'#b9b9b9'}} />
                <stop
                    offset='0.34'
                    style={{stopOpacity:1, stopColor:'#9d9e9e'}} />
                <stop
                    offset='0.73'
                    style={{stopOpacity:1, stopColor:'#ebecec'}} />
                <stop
                    offset='1'
                    style={{stopOpacity:1, stopColor:'#b2b3b3'}} />
            </linearGradient>
        </defs>
    }

    render() {
        return  <g className='PoolPump' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
            {
                PoolPump.getGradients()
            }
            <path
                style={{fill:'#666666', fillOpacity:1, fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}}
                d='m 10.721189,3.1822998e-4 h 0.0012 c 1.427003,0 2.686441,0.24838000002 3.400134,0.62110000002 V 2.4004582 c -0.713715,0.37126 -1.973154,0.62068 -3.400159,0.62068 h -0.0012 c -1.4393034,0 -2.7083497,-0.2525 -3.419737,-0.63068 V 0.62986823 C 8.0128403,0.25320823 9.2818866,3.1822998e-4 10.721186,3.1822998e-4' />
            <path
                style={{fill:'#666666', fillOpacity:1, fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}}
                d='m 10.416036,105.531 h 0.0012 c 1.42739,0 2.686441,-0.24837 3.400138,-0.62071 v -1.77905 c -0.713697,-0.37164 -1.979281,-0.62107 -3.400138,-0.62107 h -0.0012 c -1.4323853,0 -2.7083488,0.25283 -3.4197361,0.6307 v 1.76059 c 0.7113873,0.37704 1.9808176,0.62954 3.4197361,0.62954' />
            <path
                d='m 6.7948909,2.0584182 h 8.0270401 c 3.737573,0 6.794508,3.05576 6.794508,6.79449 V 96.526998 c 0,3.739122 -3.056935,6.796052 -6.794508,6.796052 H 6.7948909 C 3.0569301,103.32305 0,100.26612 0,96.526998 V 8.8529082 c 0,-3.73873 3.0569301,-6.79449 6.7948909,-6.79449'
                style={{fill:'url(#linearGradient4617)', fillOpacity:1, fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}}
            />
            <path
                style={{fill:'#9ea1a1', fillOpacity:1, fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}}
                d='m 14.063677,0.59180823 0.05879,0.0286 V 2.3994482 c -0.71369,0.37126 -1.973129,0.62068 -3.401287,0.62068 h -0.0012 c -1.4381494,0 -2.7071967,-0.25251 -3.418584,-0.62954 V 0.62884823 l 0.076482,-0.0381 c 0.7221514,0.35512 1.953148,0.59069997 3.342102,0.59069997 h 0.0012 c 1.390108,0 2.619187,-0.23567997 3.342487,-0.59069997' />
            <path
                style={{fill:'#b2b2b2', fillOpacity:1, fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}}
                d='M 2.200044e-5,8.7548882 H 21.616461 v 0.427 H 2.200044e-5 Z M 21.616461,95.202218 H 2.200044e-5 v -0.427 H 21.616461 Z' />
            <path
                d='m 20.94233,27.028108 v -6.25031 H 22.814 v 6.25031 z'
                style={{fill:'url(#linearGradient4651)', fillOpacity:1, fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}} />
            <path
                d='m 20.94233,84.603258 v -6.2499 H 22.814 v 6.2499 z'
                style={{fill:'url(#linearGradient4681-5)', fillOpacity:1, fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}} />
            <path
                style={{fill:'#9ea1a1', fillOpacity:1, fillRule:'evenodd',stroke:'none',strokeWidth:1.21004462}}
                d='m 13.758524,104.93951 0.05879,-0.0286 v -1.77907 c -0.713695,-0.37164 -1.979283,-0.62107 -3.401289,-0.62107 h -7.69e-4 c -1.4316163,0 -2.7064258,0.25282 -3.4189691,0.62951 v 1.76177 l 0.076482,0.0381 c 0.7221514,-0.3551 1.953148,-0.59031 3.3424871,-0.59031 h 7.69e-4 c 1.390108,0 2.619186,0.23534 3.342487,0.59031' />
         </g>
    }
}

export { PoolPump }

PoolPump.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
};

PoolPump.defaultProps = {
    left: 0,
    top: 0,
};