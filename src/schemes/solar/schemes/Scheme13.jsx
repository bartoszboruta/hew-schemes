import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Furnace,
  Clock,
  SvgContainer,
  SolarPanel,
  Boiler,
  Coil,
  Connector,
  Pipe,
  Pump,
  FlowMeter,
  ReadField,
  TriValve,
  TriConnector,
  Overlay,
} from '../../../components'
import PropTypes from 'prop-types'

class Scheme13 extends Component {
  renderPipes() {
    return (
      <g>
        <Pipe
          active={this.props.data.p154.value}
          activeColor={'cold'}
          d={
            'M 15 5 L 9.751545139010435 8.673918402692696 S 5 12 5 17.8 L 5 247.2 S 5 253 10.8 253 L 235 253'
          }
          direction={'reversed'}
          duration={10}
          id={'panel_left_cold'}
          left={40}
          top={130}
        />
        <Pipe
          active={this.props.data.p154.value}
          activeColor={'hot'}
          begin={5}
          d={
            'M 210 23 L 230.29310081958133 8.38896740990144 S 235 5 240.3974958658397 7.122978657039074 L 239.4925041341603 6.767021342960927 S 244.89 8.89 245.46712157032178 14.661215703217938 L 245.3128784296782 13.118784296782064 S 245.89 18.89 241.205355212781 22.30966419661081 L 239.464644787219 23.58033580338919 S 234.78 27 230.11987807370778 30.453007910806225 L 174.66012192629222 71.54699208919378 S 170 75 170 80.8 L 170 340.2 S 170 346 175.8 346 L 272 346'
          }
          duration={11}
          id={'panel_left_hot'}
          left={3}
          top={-5}
        />
        <Pipe
          active={true}
          activeColor={'cold'}
          d={'M 5 5 L 150 5'}
          duration={7}
          id={'left_boiler_output_cold'}
          left={120}
          top={399}
        />
      </g>
    )
  }

  static renderConnectors() {
    return (
      <g>
        <Connector left={270} top={317} />
        <Connector left={270} top={359} />
        <Connector left={270} top={379.5} />
      </g>
    )
  }

  renderBoiler() {
    return (
      <g>
        <Boiler left={270} top={200} />
        <Coil active={this.props.data.p154.value} direction={'right'} left={270} top={340} />
        {Scheme13.renderConnectors()}
      </g>
    )
  }

  renderReadFields() {
    return (
      <g>
        {this.props.data.p128.visible && <ReadField left={256} param={'p128'} />}
        {this.props.data.p130.visible && <ReadField left={196} param={'p130'} top={352.5} />}
        {this.props.data.p132.visible && <ReadField left={62} param={'p132'} top={236.5} />}
      </g>
    )
  }

  renderPumpP() {
    return (
      <g transform={'translate(' + 32 + ' ' + 300 + ')'}>
        <Pump active={this.props.data.p156.value} />
        <ReadField left={30} param={'p156'} top={3} />
      </g>
    )
  }

  renderFurnace() {
    const active = true
    return (
      <g transform={'translate(' + 290 + ' ' + 236 + ')'}>
        <Pipe
          active={active}
          activeColor={'hot'}
          begin={3}
          d={'M 5 5 L 5 120'}
          direction={'reversed'}
          id={'furnace_hot_1'}
          duration={7}
          left={250}
          top={-60}
        />
        <Pipe
          active={active}
          activeColor={'cold'}
          begin={0}
          d={'M 5 5 L 60 5 '}
          duration={4}
          id={'furnace_cold_1'}
          left={68}
          top={163}
        />
        <Pipe
          active={active} // p154_1 > 0 = szary ; p154_1=0 = niebieski;
          activeColor={'cold'}
          begin={0}
          d={'M 5 5 L 30 5 '}
          duration={2}
          id={'furnace_cold_2'}
          left={135}
          top={163}
        />
        <Pipe
          active={active} // p154_1 == 0 && niebieski kiedy p154_1=0; p154_1 > 0 to czerwony
          activeColor={'cold'} //czerwony albo niebieski
          begin={3}
          d={'M 5 5 L 30 5 '}
          duration={2}
          id={'furnace_cold_2_1'}
          left={165}
          top={163}
        />
        <Pipe
          active={active}
          activeColor={'cold'}
          begin={0}
          d={'M 5 220 L 5 35.8 S 5 30 10.8 30 L 94.2 30 S 100 30 100 24.2 L 100 5'}
          duration={7}
          id={'furnace_cold_3'}

          left={128}
          top={-60}
        />
        <Overlay width={20} height={20} left={125} top={-7} />
        <Pipe
          active={active}
          activeColor={'hot'}
          begin={0}
          d={'M 5 5 L 94.2 5 S 100 5 100 10.8 L 100 170'}
          duration={7}
          id={'furnace_hot'}
          left={68}
          top={-2.5}
        />

        <TriConnector left={161} top={161} />
        <TriValve direction="bottom" left={120} top={161} />
        <Furnace left={190} top={59} />
        <Connector left={65.5} top={144} />
        <Connector left={65.5} top={-22.5} />
      </g>
    )
  }

  renderFlowMeters() {
    return (
      <g>
        {this.props.data.p152.visible && (
          <g transform={'translate(' + 34 + ' ' + 270 + ')'}>
            <FlowMeter />
            <ReadField left={28} param={'p152'} />
          </g>
        )}
        {this.props.data.p292.visible && (
          <g transform={'translate(' + 190 + ' ' + 393.5 + ')'}>
            <FlowMeter direction={'horizontal'} />
            <ReadField left={-25} param={'p292'} top={26} />
          </g>
        )}
      </g>
    )
  }

  render() {
    return (
      <SvgContainer height={558.1} width={650}>
        {this.renderPipes()}
        <SolarPanel left={50} />
        <Clock left={549} />
        {this.renderBoiler()}
        {this.renderFurnace()}
        {this.renderPumpP()}
        {this.renderReadFields()}
        {this.renderFlowMeters()}
      </SvgContainer>
    )
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data: data,
  }
}

const ConnectedScheme13 = connect(mapStateToProps)(Scheme13)
export { ConnectedScheme13 as Scheme13 }

Scheme13.propTypes = {
  data: PropTypes.object,
}

Scheme13.defaultProps = {
  data: {},
  height: 0,
  width: 0,
}
