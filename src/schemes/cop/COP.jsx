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
      <SvgContainer>
        <Wall floorLeft={-170} floorLengthScale={230} left={178} top={128} />
        <Clock left={540} />
        <Pipe
          active={p264_0}
          activeColor={'power'}
          d={'M 0 0 L 0 -68 L 98 -68'}
          duration={5}
          id={'cop_battery_plus'}
          left={44}
          top={270}
        />
        <Pipe
          d={'M 0 0 L 0 -54 L 62 -54'}
          duration={5}
          id={'cop_battery_minus'}
          left={80}
          top={270}
        />
        <Battery left={20} scale={150} top={264} />
        <Pipe
          d={'M 0 0 L 300 0'}
          direction={'reversed'}
          duration={10}
          id={'to_inverter'}
          left={216}
          top={200}
        />
        <Pipe
          d={'M 0 0 L 0 130'}
          direction={'reversed'}
          duration={10}
          id={'pump_energy'}
          left={180}
          top={230}
        />
        <NetworkOutlet left={476} scale={70} top={192} />
        <Inverter heightScale={45} label={'Moduł'} left={140} top={186} />
        <Text left={164} text={'Moduł'} top={154} />
        <Text left={140} text={'zabezpieczający'} top={170} />
        <Pipe
          d={'M 0 0 L 0 32'}
          direction={'reversed'}
          duration={10}
          id={'boiler_energy'}
          left={420}
          top={200}
        />
        <Dot left={416} top={196} />
        <Boiler left={370} sign="" top={230} withSupport={true} />
        <Text left={386} text={'Pompa ciepła'} top={244} />
        <Text left={400} text={'MONO'} top={258} />
        <Pipe
          active={p264_1}
          activeColor={'hot'}
          d={'M 0 0 L 410 0'}
          direction={'reversed'}
          duration={10}
          id={'cop_hot'}
          left={10}
          top={360}
        />
        <Connector left={420} top={335} />
        <Pump active={p264_1} direction={'left'} left={168} top={348} />
        <Pipe
          active={p264_1}
          activeColor={'cold'}
          d={'M 0 0 L 410 0'}
          duration={10}
          id={'cop_cold'}
          left={10}
          top={410}
        />
        <Connector left={420} top={385} />
        <FlowMeter direction={'horizontal'} left={168} top={400} />
        <Condenser active={true} left={430} top={350} />
        <ReadField left={190} param={'p128'} top={290} unitAsName={true} />
        <ReadField left={425} param={'p132'} top={208} unitAsName={true} />
        <ReadField left={370} param={'p184'} top={330} unitAsName={true} />
        <ReadField left={370} param={'p186'} top={420} unitAsName={true} />
        <ReadField left={140} param={'p190'} top={430} unitAsName={true} />
        <Roof left={-80} top={-30} />
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
