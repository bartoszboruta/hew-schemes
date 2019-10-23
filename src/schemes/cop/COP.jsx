import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Battery,
  Boiler,
  Clock,
  Condenser,
  Connector,
  Dot,
  FlowMeter,
  Inverter,
  NetworkOutlet,
  Pipe,
  Pump,
  ReadField,
  Roof,
  SvgContainer,
  Text,
  Wall,
} from '../../components'
import PropTypes from 'prop-types'

class COP extends Component {
  render() {
    const { data: { p264_0 = false, p264_1 = false } } = this.props

    return (
      <SvgContainer height={600} width={775}>
        <Wall floorLeft={-340} floorLengthScale={310} left={350} top={148} />
        <Clock left={735} />
        <Pipe
          active={p264_0}
          activeColor={'power'}
          d={'M 0 0 L 0 -68 L 138 -68'}
          direction={'reversed'}
          duration={5}
          id={'cop_battery_plus'}
          left={44}
          top={276}
        />
        <Pipe
          d={'M 0 0 L 0 -54 L 102 -54'}
          duration={5}
          id={'cop_battery_minus'}
          left={80}
          top={276}
        />
        <Battery left={20} scale={150} top={270} />
        <Pipe
          d={'M 0 0 L 430 0'}
          direction={'reversed'}
          duration={10}
          id={'to_inverter'}
          left={256}
          top={208}
        />
        <Pipe
          d={'M 0 0 L 0 130'}
          direction={'reversed'}
          duration={10}
          id={'pump_energy'}
          left={220}
          top={250}
        />
        <NetworkOutlet left={650} scale={60} top={200} />
        <Inverter heightScale={45} label={'Moduł'} left={180} top={200} />
        <Text left={204} text={'Moduł'} top={164} />
        <Text left={180} text={'zabezpieczający'} top={180} />
        <Pipe
          d={'M 0 0 L 0 44'}
          direction={'reversed'}
          duration={10}
          id={'boiler_energy'}
          left={580}
          top={208}
        />
        <Dot left={576} top={204} />
        <Boiler left={530} sign="" top={250} withSupport={true} />
        <Text left={546} text={'Pompa ciepła'} top={264} />
        <Text left={560} text={'MONO'} top={278} />
        <Pipe
          active={p264_1}
          activeColor={'hot'}
          d={'M 0 0 L 570 0'}
          direction={'reversed'}
          duration={10}
          id={'cop_hot'}
          left={10}
          top={380}
        />
        <Connector left={580} top={355} />
        <Pump active={p264_1} direction={'left'} left={208} top={368} />
        <Pipe
          active={p264_1}
          activeColor={'cold'}
          d={'M 0 0 L 570 0'}
          duration={10}
          id={'cop_cold'}
          left={10}
          top={430}
        />
        <Connector left={580} top={405} />
        <FlowMeter direction={'horizontal'} left={208} top={420} />
        <Condenser active={true} left={590} top={370} />
        <ReadField left={230} param={'p128'} top={300} unitAsName={true} />
        <ReadField left={590} param={'p132'} top={220} unitAsName={true} />
        <ReadField left={530} param={'p184'} top={350} unitAsName={true} />
        <ReadField left={530} param={'p186'} top={440} unitAsName={true} />
        <ReadField left={180} param={'p190'} top={450} unitAsName={true} />
        <Roof left={-90} top={-30} />
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
