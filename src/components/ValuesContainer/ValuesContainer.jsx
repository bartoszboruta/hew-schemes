import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ValuesContainer extends Component {
  render() {
    return <g className='ValuesContainer' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
      <rect
        style={{opacity:1,fill:'#ed9c28',fillOpacity:1}}
        width="248.49681"
        height={this.props.height}
        x="0.433"
        y="0.43282947"
        ry="40.383709" />
      <text
        x='124.5'
        y='22.865'
        style={{
          fontSize:14.8102932,
          fontWeight:'bold',
          fill:'#ffffff',
          fillRule:'evenodd',
          fontFamily:'Arial',
          textAnchor:'middle',
        }}>
        {this.props.name}
      </text>
      {this.props.children}
    </g>
  }
}

export { ValuesContainer }

ValuesContainer.propTypes = {
  height: PropTypes.number,
  left: PropTypes.number,
  name: PropTypes.string,
  top: PropTypes.number,
};

ValuesContainer.defaultProps = {
  height: 150,
  left: 0,
  name: '',
  top: 0,
};