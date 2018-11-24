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
  TriConnector,
  SingleValve,
} from '../../../components'
import PropTypes from 'prop-types'

class Scheme17 extends Component {
  renderPipes() {
    const { data: { p154_0, p154_1, p156 } } = this.props

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
            'M 210 23 L 230.29310081958133 8.38896740990144 S 235 5 240.3974958658397 7.122978657039074 L 239.4925041341603 6.767021342960927 S 244.89 8.89 245.46712157032178 14.661215703217938 L 245.3128784296782 13.118784296782064 S 245.89 18.89 241.205355212781 22.30966419661081 L 239.464644787219 23.58033580338919 S 234.78 27 230.11987807370778 30.453007910806225 L 174.66012192629222 71.54699208919378 S 170 75 170 80.8 L 170 340.2 S 170 346 175.8 346 L 272 346 '
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
          id={'left_boiler_output_hot'}
          left={245}
          top={139.5}
        />
        <Pipe
          active={p154_1}
          activeColor={'hot'}
          d={'M 5 5 L 84.2 5 S 90 5 90 10.8 L 90 80'}
          duration={7}
          id={'boiler_output_valve'}
          left={360}
          top={213}
        />
      </g>
    )
  }

  renderCirculation() {
    const { data: { p154_2 } } = this.props

    return (
      <g>
        <Pipe
          active={p154_2}
          activeColor={'hot'}
          begin={3}
          d={'M 44 5 L 10.8 5 S 5 5 5 10.8 L 5 164.2 S 5 170 10.8 170 L 64 170 '}
          duration={7}
          id={'left_boiler_circulation_1'}
          left={206}
          top={139.7}
        />
        <Pump label={{ position: 'left', sign: 'C' }} active={p154_2} left={199} top={216} />
      </g>
    )
  }

  static renderConnectors() {
    return (
      <g>
        <Connector left={270} top={193.5} />
        <Connector left={355.5} top={193.5} />
        <Connector left={270} top={285.5} />
        <Connector left={270} top={317} />
        <Connector left={270} top={359} />
        <Connector left={270} top={379.5} />
        <SingleValve direction={'right'} left={447} top={245} />
        <TriConnector direction={'reversedVertical'} left={242.25} top={140} />
      </g>
    )
  }

  renderBoiler() {
    const { data: { p154_0, p156 } } = this.props

    return (
      <g>
        <Boiler left={270} top={200} />
        <Coil active={p154_0 && p156.value > 0} direction={'right'} left={270} top={340} />
        {Scheme17.renderConnectors()}
      </g>
    )
  }

  getT5Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 85, top: 410 }
      case 1:
        return { left: 402, top: 67 }
      default:
        return {}
    }
  }

  getT6Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 285.5, top: 120 }
      case 1:
        return { left: 402, top: 91 }
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
        {p134.visible && <ReadField left={372} param={'p134'} top={249} />}
        {p136.visible && <ReadField param={'p136'} {...this.getT5Position(p136)} />}
        {p138.visible && <ReadField param={'p138'} {...this.getT6Position(p138)} />}
      </g>
    )
  }

  renderPumpP() {
    const { data: { p154_0, p156 } } = this.props

    return (
      <g transform={'translate(' + 32 + ' ' + 300 + ')'}>
        <Pump label={{ position: 'left', sign: 'P' }} active={p154_0 && p156 > 0} />
        <ReadField left={30} param={'p156'} top={3} />
      </g>
    )
  }

  getFlowMeterPosition = ({ position }) => {
    switch (position) {
      case 0:
        return 'translate(' + 190 + ' ' + 393.5 + ')'
      case 1:
        return 'translate(' + 427.32 + ' ' + 17 + ')'
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

  render() {
    return (
      <SvgContainer height={458.1} width={459}>
        {this.renderPipes()}
        {this.renderCirculation()}
        <Shower left={384.25} top={165} />
        <SolarPanel left={50} />
        <Clock left={448} />
        {this.renderBoiler()}
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

const ConnectedScheme17 = connect(mapStateToProps)(Scheme17)
export { ConnectedScheme17 as Scheme17 }

Scheme17.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number,
}

Scheme17.defaultProps = {
  data: {},
  height: 0,
  width: 0,
}
