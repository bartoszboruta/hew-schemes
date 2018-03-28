import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Heater extends Component {
    static getGradients() {
        return <defs>
            <rect
                id='SVGID_46_'
                x='48.500999'
                y='33.987'
                width='9.5200005'
                height='1.549' />
            <rect
                id='SVGID_49_'
                x='58.021'
                y='33.316002'
                width='1.0779999'
                height='2.891' />
            <linearGradient
                y2='123.816'
                x2='244'
                y1='135.86'
                x1='244'
                gradientUnits='userSpaceOnUse'
                id='linearGradient3668'
                xlinkHref='#id15-5'
                gradientTransform='matrix(1.2758855,0,0,1.2855927,-257.54842,-158.88177)' />
            <linearGradient
                id='id15-5'
                gradientUnits='userSpaceOnUse'
                x1='244'
                y1='135.86'
                x2='244'
                y2='123.816'>
                <stop
                    offset='0'
                    style={{stopColor:'#CCCCCC'}}
                    id='stop245-7' />
                <stop
                    offset='1'
                    style={{stopColor:'#B2B3B3'}}
                    id='stop247-6' />
            </linearGradient>
        </defs>
            ;
    }

    render() {
        return <g className='Heater' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
            {
                Heater.getGradients()
            }

            <rect
                id='_232925880'
                x='0.29527551'
                y='3.888406'
                width='50.608128'
                height='8.2965469'
                style={{stroke:'#b3b3b3' ,fill:'#e8e8e8', fillRule:'evenodd'}}>
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
            <rect
                id='_232925760'
                x='50.903278'
                y='0.29517478'
                width='5.7297211'
                height='15.484449'
                style={{stroke:'#999999' ,fill:'url(#linearGradient3668)', fillRule:'evenodd', strokeWidth:'0.59055102'}} />
        </g>
    }
}

export { Heater }

Heater.propTypes = {
    active: PropTypes.bool,
    left: PropTypes.number,
    top: PropTypes.number,
};

Heater.defaultProps = {
    active: false,
    left: 0,
    top: 0,
};