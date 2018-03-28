import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TriConnector extends Component {
    getDirection() {
        switch(this.props.direction) {
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
                    style={{opacity: 1, fill: '#ffffff', fillOpacity: 1, strokeWidth: 0.26458332}}
                    width='9.6605959'
                    height='3.198'
                    x='2.9154034'
                    y='-0.00033760071' />
                <rect
                    style={{opacity: 1, fill: '#ffffff', fillOpacity: 1, strokeWidth: 0.26458332}}
                    width='15.495305'
                    height='9.6596394'
                    x='0'
                    y='2.8403606'
                    ry='0' />
                <path
                    d='m 11.376,3.0204981 v -0.001 -2.04150001 H 4.118 v 2.04151001 10e-4 z M 9.9043579e-6,12.499998 V 3.0199981 H 3.14 V -1.9073486e-6 L 12.354,-2.6190735e-4 V 3.0199981 h 3.140002 l -2e-6,9.4799999 z M 14.516,11.521998 V 3.9979981 H 0.978 v 7.5239999 z'
                    style={{opacity: 1, fill: '#4d4d4d', fillRule: 'nonzero', strokeWidth: 0.26736262}}
                    width='9.6605959' />
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
