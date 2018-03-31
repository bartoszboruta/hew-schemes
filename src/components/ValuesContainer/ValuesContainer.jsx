import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { LongReadField } from "../ReadField/LongReadField";

class ValuesContainer extends Component {
  state = {
    rectWidth: 99,
    readFieldLeft: 50,
  };

  constructor(props) {
    super(props);

    this.rectBaseWidth = 99;
  }

  onReadFieldResize(width) {
    const newWidth = Math.max(width, this.rectBaseWidth);
    const newReadFieldLeft = 50 + (newWidth - this.state.rectWidth) / 2;
    this.setState({
      rectWidth: newWidth,
      readFieldLeft: newReadFieldLeft
    });
  }

  render() {
    const style = {
      opacity: 1,
      fill: this.props.color,
      fillOpacity: Boolean(this.props.color) ? 1 : 0,
    };
    const nameHeight = this.props.name ? 30 : 0;
    const fields = this.props.params.map((param, index) => {
      return <LongReadField
        param={param}
        left={this.state.readFieldLeft}
        top={10 + nameHeight + index * 30}
        rectWidth={this.state.rectWidth}
        resizeHandler={this.onReadFieldResize.bind(this)}
      />
    });
    const height = nameHeight + 30 + fields.length * 30;
    return <g className='ValuesContainer' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
      <rect
        style={style}
        width="248.49681"
        height={height}
        x="0.433"
        y="0.43282947"
        ry="40.383709" />
      <text
        x='124.5'
        y='22.865'
        style={{
          fontSize:14.8102932,
          fontWeight:'bold',
          fill:this.props.textColor,
          fillRule:'evenodd',
          fontFamily:'Arial',
          textAnchor:'middle',
        }}>
        {this.props.name}
      </text>
      {fields}
    </g>
  }
}

export { ValuesContainer }

ValuesContainer.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  left: PropTypes.number,
  name: PropTypes.string,
  params: PropTypes.array,
  top: PropTypes.number,
};

ValuesContainer.defaultProps = {
  color: '',
  textColor: 'black',
  left: 0,
  name: '',
  params: [],
  top: 0,
};
