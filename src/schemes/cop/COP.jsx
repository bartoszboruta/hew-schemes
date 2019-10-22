import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Boiler,
  Clock,
  Condenser,
  Connector,
  FlowMeter,
  Pipe,
  Pump,
  ReadField,
  SvgContainer,
} from '../../components'
import PropTypes from 'prop-types'

class COP extends Component {
  render() {
    return (
      <SvgContainer height={600} width={775}>
        <Clock left={735} />
        <Boiler left={530} sign="" top={250} withSupport={true} />
        <Pipe
          active={true}
          activeColor={'hot'}
          d={'M 0 0 L 570 0'}
          direction={'reversed'}
          duration={10}
          id={'cop_hot'}
          left={10}
          top={380}
        />
        <Connector left={580} top={355} />
        <Pump left={200} top={368} />
        <Pipe
          active={true}
          activeColor={'cold'}
          d={'M 0 0 L 570 0'}
          duration={10}
          id={'cop_cold'}
          left={10}
          top={430}
        />
        <Connector left={580} top={405} />
        <FlowMeter direction={'horizontal'} left={200} top={420} />
        <ReadField left={200} param={'p190'} top={450} />
        <Condenser active={true} left={590} top={370} />
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

const ConnectedCOP = connect(mapStateToProps)(COP)
export { ConnectedCOP as COP }

COP.propTypes = {
  data: PropTypes.object,
}

COP.defaultProps = {
  data: {},
}
