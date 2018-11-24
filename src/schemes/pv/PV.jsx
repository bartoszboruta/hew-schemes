import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SvgContainer } from '../../components/SvgContainer'
import { Clock } from '../../components'
import PropTypes from 'prop-types'

class PV extends Component {
  render() {
    return (
      <SvgContainer height={this.props.height} width={this.props.width}>
        <Clock left={799} />
      </SvgContainer>
    )
  }
}

const mapStateToProps = state => {
  const { data } = state
  return {
    data,
  }
}

const ConnectedPV = connect(mapStateToProps)(PV)
export { ConnectedPV as PV }

PV.propTypes = {
  data: PropTypes.object,
}

PV.defaultProps = {
  data: {},
}
