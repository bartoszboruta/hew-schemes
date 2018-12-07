import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
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
  Shower,
  Overlay,
  TriConnector,
  TriValve,
} from '../../../components'
import PropTypes from 'prop-types'

class Scheme19 extends Component {
  renderPipes() {
    const { data: { p154_0, p154_2, p156 } } = this.props

    return (
      <g>
        <Pipe
          active={p154_0 && p156.value > 0}
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
          active={p154_0 && p156.value > 0}
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
        <Pipe
          active={true}
          activeColor={'hot'}
          d={
            'M 26 78 L 10.8 78 S 5 78 5 72.2 L 5 10.8 S 5 5 10.8 5 L 144.2 5 S 150 5 150 10.8 L 150 30'
          }
          duration={7}
          id={'right_boiler_output_hot'}
          left={475}
          top={139.5}
        />
        <Pipe
          active={p154_2}
          activeColor={'hot'}
          d={'M 270 5 L 10.8 5 S 5 5 5 10.8 L 5 164.2 S 5 170 10.8 170 L 64 170'}
          duration={11}
          id={'left_boiler_output_hot_left'}
          left={206}
          top={139.7}
        />
        <Pipe
          active={p154_2}
          activeColor={'hot'}
          d={'M 0 5 L 24.2 5 S 30 5 30 10.8 L 30 185.2 S 30 191 35.8 191 L 135 191'}
          duration={11}
          id={'left_boiler_to_right_boiler'}
          left={365}
          top={212.5}
        />
      </g>
    )
  }

  static renderConnectors() {
    return (
      <g>
        <Connector left={500} top={193.5} />
        <Connector left={355.5} top={193.5} />
        <Connector left={500} top={285.5} />
        <Connector left={355.5} top={285.5} />
        <Connector left={270} top={285.5} />
        <Connector left={270} top={317} />
        <Connector left={270} top={359} />
        <Connector left={270} top={379.5} />
        <Connector left={500} top={379.5} />
        <TriConnector direction={'reversedVertical'} left={470} top={142} />
      </g>
    )
  }

  renderBoiler() {
    const { data: { p154_0, p156 } } = this.props

    return (
      <g>
        <Boiler left={270} top={200} />
        <Coil active={p154_0 && p156.value > 0} direction={'right'} left={270} top={340} />
        {Scheme19.renderConnectors()}
      </g>
    )
  }

  renderBoilerRight() {
    const { data: { p154_0, p156 } } = this.props

    return (
      <g>
        <Boiler left={500} sign="A" top={200} />
        <Coil active={p154_0 && p156.value > 0} direction={'right'} left={270} top={340} />
        {Scheme19.renderConnectors()}
      </g>
    )
  }

  getT5Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 85, top: 410 }
      case 1:
        return { left: 563.32, top: 67 }
      case 2:
        return { left: 365, top: 177 }
      default:
        return {}
    }
  }

  getT6Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 515, top: 150 }
      case 1:
        return { left: 563.32, top: 91 }
      default:
        return {}
    }
  }

  renderReadFields() {
    const { data: { p128, p130, p132, p134, p136, p138 } } = this.props

    return (
      <g>
        {p128.visible && <ReadField left={256} param={'p128'} />}
        {p130.visible && <ReadField left={196} param={'p130'} top={352.5} />}
        {p132.visible && <ReadField left={62} param={'p132'} top={236.5} />}
        {p134.visible && <ReadField left={425.5} param={'p134'} top={352.5} />}
        {p136.visible && <ReadField param={'p136'} {...this.getT5Position(p136)} />}
        {p138.visible && <ReadField param={'p138'} {...this.getT6Position(p138)} />}
      </g>
    )
  }

  renderPumpP() {
    const { data: { p154_0, p156 } } = this.props

    return (
      <g transform={'translate(' + 32 + ' ' + 300 + ')'}>
        <Pump label={{ position: 'left', sign: 'P' }} active={p154_0 && p156.value > 0} />
        <ReadField left={30} param={'p156'} top={3} />
      </g>
    )
  }

  renderPumpK() {
    const { data: { p154_2, p156 } } = this.props

    return (
      <g transform={'translate(' + 198 + ' ' + 216 + ')'}>
        <Pump label={{ position: 'left', sign: 'K' }} active={p154_2 && p156.value > 0} />
      </g>
    )
  }

  getFlowMeterPosition = ({ position }) => {
    switch (position) {
      case 0:
        return 'translate(' + 190 + ' ' + 393.5 + ')'
      case 1:
        return 'translate(' + 588.32 + ' ' + 17 + ')'
      default:
        return ''
    }
  }

  renderFlowMeters() {
    const { data: { p152, p292 } } = this.props

    return (
      <g>
        {p152.visible && (
          <g transform={'translate(' + 34 + ' ' + 270 + ')'}>
            <FlowMeter />
            <ReadField left={28} param={'p152'} />
          </g>
        )}
        {p292.visible && (
          <g transform={this.getFlowMeterPosition(p292)}>
            {p292.position === 0 && <FlowMeter direction={'horizontal'} />}
            <ReadField left={-25} param={'p292'} top={26} />
          </g>
        )}
      </g>
    )
  }
  renderTriValve() {
    const { data: { p154_1 } } = this.props

    return <g>
      <Pipe
        active={true}
        activeColor={'hot'}
        begin={3}
        d={'M 5 5 L 5 140'}
        direction={'reversed'}
        id={'valve_hot_out'}
        duration={7}
        left={436}
        top={165}
      />
      <Pipe
        active={p154_1}
        activeColor={'hot'}
        d={'M 5 5 L 75 5'}
        duration={3}
        id={'left_boiler_to_valve'}
        left={361}
        top={305}
      />
      <Overlay height={16} width={16} left={386} top={300} />
      <Pipe
        active={!p154_1}
        activeColor={'hot'}
        d={'M 5 5 L 60 5'}
        direction={'reversed'}
        duration={3}
        id={'right_boiler_to_valve'}
        left={446}
        top={305}
      />
      <TriValve direction={'bottom'} left={428.25} top={302.5} />

    </g>
  }

  render() {
    return (
      <SvgContainer height={558.1} width={650}>
        {this.renderTriValve()}
        {this.renderPipes()}
        <Shower left={614.25} top={165} />
        <SolarPanel left={50} />
        <Clock left={609} />
        {this.renderBoiler()}
        {this.renderBoilerRight()}
        {this.renderPumpP()}
        {this.renderPumpK()}
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

const ConnectedScheme19 = connect(mapStateToProps)(Scheme19)
export { ConnectedScheme19 as Scheme19 }

Scheme19.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number,
}

Scheme19.defaultProps = {
  data: {},
  height: 0,
  width: 0,
}
