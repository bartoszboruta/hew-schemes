import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class VerticalReadField extends Component {
  getValue(value) {
    return !this.props.data[this.props.param] ? '' : this.props.data[this.props.param][value];
  }

  render() {
    const name = this.getValue('name')

    return <g className='VerticalReadField' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
      {name && (
        <g>
          <rect
            x='0.0037566847'
            y='0.00027379199'
            width='49.292244'
            height='18.765772'
            style={{ fill: '#cccccc', fillRule: 'nonzero', strokeWidth: 0.26458335 }} />
          <rect
            style={{ fill: '#ffffff', fillRule: 'nonzero', strokeWidth: 0.26458335 }}
            width='48.393002'
            height='17.368441'
            x='0.40540996'
            y='18.492474' />
          <text
            style={{ fontWeight: 'bold', fontSize: 11, lineHeight: '0%', fontFamily: '"Source Code Pro", Arial, monospace', fill: '#4d4d4d', fillRule: 'evenodd', strokeWidth: 0.26458335, textAnchor: 'middle' }}
            y='14.069446'
            x='23.5'>
            {name}
          </text>
        </g>)
      }
      <path
        d='M 48.439118,18.95061 H 0.852466 V 35.584584 H 48.439118 Z M 0.426213,18.098114 h 48.439189 0.426263 v 0.426203 17.4865 V 36.437 H 48.865402 0.426213 0 v -0.426183 -17.4865 -0.426203 z'
        style={{ fill: '#cecece', fillRule: 'nonzero', strokeWidth: 0.26458335 }} />
      <text
        style={{ fontWeight: '500', fontSize: 11, lineHeight: '0%', fontFamily: '"Source Code Pro", Arial, monospace', fill: '#4d4d4d', fillRule: 'evenodd', strokeWidth: 0.26458335, textAnchor: 'middle' }}
        y='31.669422'
        x='23'>
        {this.getValue('value') + this.getValue('unit')}
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

const ConnectedVerticalReadField = connect(mapStateToProps)(VerticalReadField);
export { ConnectedVerticalReadField as VerticalReadField }

VerticalReadField.propTypes = {
  left: PropTypes.number,
  sign: PropTypes.string,
  text: PropTypes.string,
  top: PropTypes.number,
};

VerticalReadField.defaultProps = {
  left: 0,
  text: '',
  top: 0,
  sign: ''
};