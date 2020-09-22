import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Valve extends Component {
    render() {
        return (
            <g className='Valve' transform={'translate(' + this.props.left + ' ' + this.props.top + ')  rotate(' + this.props.rotate + ')'}>
                <rect
                    style={{opacity:1, fill:'#ffffff', fillOpacity:1, strokeWidth: 0.26458332}}
                    width='9.6605959'
                    height='3.198'
                    x='2.9154029'
                    y='-0.00031999999' />
                <rect
                    style={{opacity:1, fill:'#ffffff', fillOpacity:1, strokeWidth: 0.26458335}}
                    width='15.495305'
                    height='9.6596394'
                    x='0'
                    y='2.8403599'
                    ry='0' />
                <path
                    d='M 7.746085,7.03388 9.582739,3.85099 v -10e-4 L 11.419393,0.66844 H 7.746074 4.072754 l 1.836654,3.18155 v 10e-4 L 7.746062,7.03388 Z M 7.600382,8.11266 4.182376,10.0871 h -0.0011 L 0.499932,12.21259 0,12.5 V 11.92384 7.67152 3.41919 2.84036 L 0.501268,3.13045 4.182612,5.25727 6.837347,6.79056 5.332197,4.18382 3.205473,0.50097 2.915403,-3.2e-4 h 0.578804 4.252125 4.252124 0.577458 l -0.288723,0.50129 -2.126724,3.68285 -1.503815,2.6054 2.6534,-1.53195 3.682679,-2.12682 0.501268,-0.29009 V 3.41919 7.67152 11.92384 12.5 L 14.994067,12.21259 11.311388,10.0871 h -0.0011 L 7.892282,8.11266 7.746579,8.03596 7.600876,8.11266 Z M 3.848201,9.5096 7.030937,7.67152 3.849537,5.83478 h -0.0011 L 0.668372,3.99804 v 3.67349 3.67483 L 3.848437,9.50962 Z m 4.613032,-1.83808 3.182735,1.83808 3.181401,1.83674 V 7.67152 3.99803 l -3.181401,1.83674 h -0.0011 L 8.461467,7.67151 Z'
                    style={{opacity:1, fill:'#4d4d4d', fillOpacity:1, strokeWidth: 0.26736259}} />
            </g>
        )
    }
}

export { Valve }

Valve.propTypes = {
    active: PropTypes.bool,
    left: PropTypes.number,
    reversedColors: PropTypes.bool,
    top: PropTypes.number,
    rotate: PropTypes.number,
};

Valve.defaultProps = {
    active: false,
    left: 0,
    reversedColors: false,
    top: 0,
    rotate: 0,
};