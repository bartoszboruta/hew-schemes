import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Connector extends Component {
    static getGradients() {
        return <defs>
            <linearGradient
                id='id14'
                gradientUnits='userSpaceOnUse'
                x1='243.033'
                y1='122.319'
                x2='243.033'
                y2='117.185'>
                <stop
                    offset='0'
                    stopColor={'#A8A6A6'}
                    id='stop270' />
                <stop
                    offset='0.419608'
                    stopColor={'#E0E0E0'}
                    id='stop272' />
                <stop
                    offset='0.678431'
                    stopColor={'whitesmoke'}
                    id='stop274' />
                <stop
                    offset='1'
                    stopColor={'#D4D4D4'}
                    id='stop276' />
            </linearGradient>
            <linearGradient
                id='id14-5'
                gradientUnits='userSpaceOnUse'
                x1='243.033'
                y1='122.319'
                x2='243.033'
                y2='117.185'>
                <stop
                    offset='0'
                    stopColor={'#A8A6A6'}
                    id='stop270-7' />
                <stop
                    offset='0.419608'
                    stopColor={'#E0E0E0'}
                    id='stop272-4' />
                <stop
                    offset='0.678431'
                    stopColor={'whitesmoke'}
                    id='stop274-8' />
                <stop
                    offset='1'
                    stopColor={'#D4D4D4'}
                    id='stop276-2' />
            </linearGradient>
        </defs>
    }

    render() {
        return (
            <g className='Connector' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
                {
                    Connector.getGradients()
                }
                <polygon
                    style={{
                        clipRule:'evenodd',
                        fill:'url(#id14)',
                        fillRule:'evenodd',
                        strokeWidth:'0.0093216',
                    }}
                    points='238.898,117.185 247.165,117.185 247.165,122.317 238.898,122.317 '
                    transform='matrix(1.2719487,0,0,1.2712185,-303.866,-128.00623)' />
                <rect
                    style={{
                        clipRule:'evenodd',
                        fill:'#b3b3b3',
                        fillRule:'evenodd',
                        strokeWidth:'0.04992277',
                    }}
                    height='6.5243001'
                    width='0.83370137'
                    y='20.9615'
                    x='9.6808252'
                    id='_651550096' />
                <rect
                    style={{
                        clipRule:'evenodd',
                        fill:'#b3b3b3',
                        fillRule:'evenodd',
                        strokeWidth:'0.04992277',
                    }}
                    height='6.5243001'
                    width='1.0075946'
                    y='20.9615'
                    x='1.3585747e-005'
                    id='_651554080' />
            </g>
        )
    }
}

export { Connector }

Connector.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
};

Connector.defaultProps = {
    left: 0,
    top: 0,
};