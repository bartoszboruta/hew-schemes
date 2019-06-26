import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class SvgContainer extends Component {

  constructor(props) {
    super(props);

    this.groupRef = React.createRef();
    this.svgRef = React.createRef();
  }

  componentDidMount() {
    this.groupRef.current.setAttribute('transform', this.getGroupTransform() + '');
  }

  getGroupTransform() {
    const groupBounding = this.groupRef.current.getBoundingClientRect();
    const svgBounding = this.svgRef.current.getBoundingClientRect();

    const svgWidth = svgBounding.width - 10;
    const widthProportion = (svgWidth - (groupBounding.left - svgBounding.left) * 2) / groupBounding.width;
    const heightProportion = (svgBounding.height - 10) / groupBounding.height;

    const proportion = Math.min(widthProportion, heightProportion);

    return 'scale(' + proportion + ')';
  }

  getStyle() {
    return {
      position: 'relative',
      height: '100%',
      width: '100%',
      top: 0
    };
  }

  render() {
    const width = 580;
    const height = 480;
    return (
      <svg 
        ref={this.svgRef}
        width={width} 
        height={height} 
        viewBox={'0 0 ' + width + ' ' + height}
        style={this.getStyle()}
      >
        <g ref={this.groupRef}>
          {this.props.children}
        </g>
      </svg>
    )
  }
}

const mapStateToProps = state => {
  const { dimensions } = state
  return {
    dimensions,
  }
}

const ConnectedSvgContainer = connect(mapStateToProps)(SvgContainer)
export { ConnectedSvgContainer as SvgContainer }

SvgContainer.propTypes = {
  children: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  dimensions: PropTypes.shape({
    height: PropTypes.number,
  }),
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

SvgContainer.defaultProps = {
  children: null,
  dimensions: {
    height: 0,
  },
  height: 0,
  width: 0,
}
