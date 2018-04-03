import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LongReadField extends Component {
  state = {
    rectWidth: 99,
    rectTranslateX: 0
  };

  constructor(props) {
    super(props);

    this.textRef = React.createRef();
    this.rectRef = React.createRef();
  }

  getValue(value) {
    return this.props.data[this.props.param] ? this.props.data[this.props.param][value] : '';
  }

  componentDidMount() {
    this.resizeRect();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.rectWidth !== prevState.rectWidth) {
      return {
        rectWidth: nextProps.rectWidth,
        rectTranslateX: prevState.rectWidth + prevState.rectTranslateX - nextProps.rectWidth,
      };
    }

    return null;
  }

  resizeRect() {
    const textWidth = this.textRef.current.getBoundingClientRect().width;
    const rectWidth = this.rectRef.current.getBoundingClientRect().width;
    const proportion = textWidth / rectWidth;
    if (proportion > 1) {
      const newRectWidth = this.props.rectWidth * proportion;
      const newState = {
        rectWidth: newRectWidth,
        rectTranslateX: this.props.rectWidth - newRectWidth,
      };
      this.props.resizeHandler(newState.rectWidth);
      this.setState(newState);
    }
  }

  render() {
    return <g className='LongReadField' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
      <title>
        { this.getValue('name') }
      </title>
      <rect
        x="0.433"
        y="0.43312892"
        width={this.state.rectWidth}
        height="18.026871"
        ref={this.rectRef}
        transform={'translate(' + this.state.rectTranslateX + ' 0)'}
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
        ref={this.textRef}
        transform={'translate(' + this.state.rectTranslateX / 2 + ' 0)'}
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
  rectWidth: PropTypes.number,
  top: PropTypes.number,
  resizeHandler: PropTypes.func,
};

LongReadField.defaultProps = {
  data: {},
  left: 0,
  param: '',
  rectWidth: 99,
  top: 0,
  resizeHandler: () => {},
};
