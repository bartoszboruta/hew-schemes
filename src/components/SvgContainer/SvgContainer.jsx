import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class SvgContainer extends Component {

  constructor(props) {
    super(props);

    this.groupRef = React.createRef();
  }

  componentDidMount() {
    this.groupRef.current.setAttribute('transform', this.getGroupScale());
  }

  getGroupScale() {
    const width = this.groupRef.current ? this.groupRef.current.getBoundingClientRect().width : 2000;
    const height = this.groupRef.current ? this.groupRef.current.getBoundingClientRect().height : 2000;
    const proportion = width > height ? height / width : width / height;

    return 'scale(' + proportion + ')';
  }

  getHeight() {
    return this.props.dimensions.height > this.props.height
      ? this.props.dimensions.height
      : this.props.height
  }

  render() {
    return (
      <svg height={this.getHeight()} viewBox={'-5 -5 ' + 480 + ' ' + 480} width={'100%'}>
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
