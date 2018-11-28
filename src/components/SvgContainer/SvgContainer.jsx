import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class SvgContainer extends Component {
  getHeight() {
    return this.props.dimensions.height > this.props.height
      ? this.props.dimensions.height
      : this.props.dimensions.height
  }

  render() {
    return (
      <svg height={this.getHeight()} viewBox={'-5 0 ' + 750 + ' ' + 700} width={'100%'}>
        {this.props.children}
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
