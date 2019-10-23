import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ReadField extends Component {

    getValue(value) {
        return this.props.data[this.props.param] ? this.props.data[this.props.param][value] : '';
    }

    render() {
        const unit = this.props.unitAsName ? this.getValue('unit') : this.getValue('name')
        return <g className='ReadField' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
            <rect
                x='49'
                y='0'
                width={`${18.3 + unit.length * 2}`}
                height='18.3'
                style={{
                    fill: '#dcdcdc',
                    fillRule:'evenodd'
                }} />
            <rect
                x='50'
                y='1'
                width={`${16.3 + unit.length * 2}`}
                height='16.3'
                style={{
                    fill: '#cccccc',
                    fillRule:'nonzero'
                }} />
            <text
                x={`${58 + unit.length}`}
                y='12.865'
                style={{
                    fontSize:9.8102932,
                    fontWeight:'bold',
                    fill:'#4d4d4d',
                    fillRule:'evenodd',
                    fontFamily:'Arial',
                    textAnchor:'middle',
                }}>
                { unit }
            </text>
            <rect
                style={{
                    fill:'#ffffff',
                    fillRule:'nonzero'
                }}
                width='49.245464'
                height='18.4585'
                x='0'
                y='0' />
            <path
                style={{
                    fill:'#cecece',
                    fillRule:'nonzero'
                }}
                d='M 48.75482,0.85957908 H 0.858079 V 17.601919 H 48.75482 Z M 0.429039,0.00149908 H 49.18386 49.6129 v 0.42904 17.60041992 0.42904 H 49.18386 0.429039 0 v -0.42904 -17.60041992 -0.42904 z'
            />
            <text
                x='25'
                y='12.865'
                style={{
                    textAnchor:'middle',
                    fontSize:9.92680454,
                    fontWeight:'normal',
                    fill:'#4d4d4d',
                    fillRule:'evenodd',
                    fontFamily:'Arial'
                }}>
                { this.getValue('value') + (this.props.unitAsName ? '' : (' ' + this.getValue('unit'))) }
            </text>
        </g>
    }
}

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        data
    };
};

const ConnectedReadField = connect(mapStateToProps)(ReadField);
export { ConnectedReadField as ReadField }

ReadField.propTypes = {
    data: PropTypes.object,
    left: PropTypes.number,
    param: PropTypes.string,
    top: PropTypes.number,
    unitAsName: PropTypes.bool,
};

ReadField.defaultProps = {
    data: {},
    left: 0,
    param: '',
    top: 0,
    unitAsName: false,
};