import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LongReadField extends Component {

  getValue(value) {
    return this.props.data[this.props.param] ? this.props.data[this.props.param][value] : '';
  }

  render() {
    return <g className='LongReadField' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
      <rect
        x="0.433"
        y="0.43312892"
        width="99.134003"
        height="18.026871"
        style={{fill:'#dcdcdc', fillRule:'evenodd',stroke:'#cecece',strokeWidth:0.866,strokeOpacity:1}} />
      <rect
        style={{fill:'#ffffff', fillRule:'evenodd',stroke:'#cecece',strokeWidth:0.866,strokeOpacity:1}}
        height="18.026871"
        width="48.133999"
        y="0.43312892"
        x="99.567001" />
      <text
        x='50'
        y='12.865'
        style={{
          fontSize:9.8102932,
          fontWeight:'bold',
          fill:'#4d4d4d',
          fillRule:'evenodd',
          fontFamily:'Arial',
          textAnchor:'middle',
        }}>
        { this.getValue('name') }
      </text>

      <text
        x='122.5'
        y='12.865'
        style={{
          textAnchor:'middle',
          fontSize:9.92680454,
          fontWeight:'normal',
          fill:'#4d4d4d',
          fillRule:'evenodd',
          fontFamily:'Arial'
        }}>
        { this.getValue('value') + ' ' + this.getValue('unit') }
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

const ConnectedLongReadField = connect(mapStateToProps)(LongReadField);
export { ConnectedLongReadField as LongReadField }

LongReadField.propTypes = {
  data: PropTypes.object,
  left: PropTypes.number,
  param: PropTypes.string,
  top: PropTypes.number,
};

LongReadField.defaultProps = {
  data: {},
  left: 0,
  param: '',
  top: 0,
};