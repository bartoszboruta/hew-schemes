import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FlowHeater extends Component {
    static getGradients() {
        return <defs>
            <linearGradient
                xlinkHref='#SVGID_77_-0'
                id='linearGradient14427'
                gradientUnits='userSpaceOnUse'
                gradientTransform='matrix(0,3.4112,-17.8775,0,2764.5251,106.8115)'
                x1='0.0009765625'
                y1='150.7002'
                x2='1'
                y2='150.7002' />
            <linearGradient
                id='SVGID_77_-0'
                gradientUnits='userSpaceOnUse'
                x1='0.0009765625'
                y1='150.7002'
                x2='1'
                y2='150.7002'
                gradientTransform='matrix(0,3.4112,-17.8775,0,2764.5251,106.8115)'>
                <stop
                    offset='0'
                    stopColor={'#D9DADA'}
                    id='stop1684' />
                <stop
                    offset='0.52'
                    stopColor={'#FEFEFE'}
                    id='stop1686' />
                <stop
                    offset='1'
                    stopColor={'#D9DADA'}
                    id='stop1688' />
            </linearGradient>
            <clipPath
                id='SVGID_76_-6'>
                <use
                    height='499.99799'
                    width='630'
                    y='0'
                    x='0'
                    xlinkHref='#SVGID_75_-9'
                    overflow='visible'
                    id='use1681-4' />
            </clipPath>
            <rect
                id='SVGID_75_-9'
                x='61.438999'
                y='106.813'
                width='17.877001'
                height='3.4100001' />
        </defs>
    }

    render() {
        return (
            <g className='FlowHeater' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
                {
                    FlowHeater.getGradients()
                }
                <rect
                    height='3.4100001'
                    width='17.877001'
                    clipPath='url(#SVGID_76_-6)'
                    y='106.813'
                    x='61.438999'
                    style={{
                        clipRule: 'evenodd',
                        fill: 'url(#linearGradient14427)',
                        fillRule: 'evenodd',
                        strokeWidth: '0.21838695'
                    }}
                    transform='matrix(4.8565804,0,0,4.3173383,-297.29557,-460.33188)'>
                    {
                        this.props.active &&
                        <animate
                            attributeName='fill'
                            dur='8s'
                            repeatCount='indefinite'
                            values='
                                #eab63f;
                                #f15d05;
                                #eab63f;'
                        />
                    }
                </rect>
                <path
                    style={{
                        clipRule: 'evenodd',
                        fill: '#b3b3b3',
                        fillRule: 'evenodd',
                        strokeWidth: '0.21838695'
                    }}
                    clipPath='url(#SVGID_2_-1)'
                    d='m 79.381,106.624 v 0.119 3.548 0.12 H 61.215 v -0.12 -3.548 -0.119 z m -0.225,0.239 H 61.439 v 3.309 h 17.717 z'
                    transform='matrix(4.8565804,0,0,4.3173383,-297.29557,-460.33188)' />
            </g>
        )
    }
}

export { FlowHeater }

FlowHeater.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
};

FlowHeater.defaultProps = {
    left: 0,
    top: 0,
};