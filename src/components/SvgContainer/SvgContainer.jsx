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
    const width = this.getWidth();
    const height = this.getHeight();
    this.svgRef.current.setAttribute('width', width);
    this.svgRef.current.setAttribute('height', height);
    this.svgRef.current.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
    this.groupRef.current.setAttribute('transform', this.getGroupTransform() + '');
  }

  getGroupTransform() {
    const groupBounding = this.groupRef.current.getBoundingClientRect();
    const svgBounding = this.svgRef.current.getBoundingClientRect();
    const svgWidth = svgBounding.width - 10;

    const widthProportion = svgWidth / groupBounding.width;
    const heightProportion = svgBounding.height / groupBounding.height;
    const proportion = Math.min(widthProportion, heightProportion);
    const translate = svgBounding.left - groupBounding.left;

    return 'scale(' + proportion + ') translate(' + translate + ')';
  }

  getStyle() {
    return {
      position: 'relative',
      height: '100%',
      width: '100%',
      top: 0
    };
  }

  getWidth() {
    const svgBounding = this.svgRef.current.getBoundingClientRect();
    return svgBounding.width.toFixed(0)
  }

  getHeight() {
    const svgBounding = this.svgRef.current.getBoundingClientRect();
    return svgBounding.height.toFixed(0);
  }

  render() {
    const width = 800;
    const height = 600;
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
  const { dimensions, data } = state
  return {
    dimensions,
    data,
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
