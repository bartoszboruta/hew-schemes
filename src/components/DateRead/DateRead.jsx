import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DateRead extends Component {
    render() {
        return (
            <g className='DateRead' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
                <text
                    style={{
                        fontSize: 14,
                        textAlign: 'end',
                        textAnchor: 'end',
                        fontFamily: 'Sans',
                        fill: this.props.data.date.fill,
                    }}
                    x={0}
                    y={0}>
                    {
                      // this.props.data.date.value
                      new Date().toLocaleString()
                    }
                </text>
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

const ConnectedDateRead = connect(mapStateToProps)(DateRead);
export { ConnectedDateRead as DateRead }

DateRead.propTypes = {
    data: PropTypes.object,
    dimensions: PropTypes.object,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired
};

DateRead.defaultProps = {
    data: {},
    dimensions: {},
    left: 0,
    top: 0
};
