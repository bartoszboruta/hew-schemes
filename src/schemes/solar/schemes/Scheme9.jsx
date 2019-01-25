import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  SvgContainer,
  SolarPanel,
  Boiler,
  Coil,
  Connector,
  Pipe,
  Pump,
  FlowMeter,
  ReadField,
  Clock,
  Shower,
  PoolPump,
  PoolTank,
  TriConnector,
  TriValve,
  Overlay,
} from '../../../components'
import PropTypes from 'prop-types'

class Scheme9 extends Component {
  renderPipes() {
    const { data: { p154_0, p154_1, p154_2, p156 } } = this.props

    return (
      <g>
        <Pipe
          active={p154_0 && !p154_1}
          activeColor={'cold'}
          d={'M 5 5 L 240 5'}
          direction={'reversed'}
          duration={9}
          id={'left_boiler_to_panel_output_cold'}
          left={40}
          top={378}
        />
        <Pipe
          active={true}
          activeColor={'cold'}
          anime={false}
          d={'M 5 5 L 150 5'}
          duration={4}
          id={'left_boiler_output_cold'}
          left={120}
          top={399}
        />
        <Overlay height={34} left={163} top={377.5} width={20} />
        <Pipe
          active={p154_0 && p156.value > 0}
          activeColor={'cold'}
          d={
            'M 15,5 9.7515451,8.6739184 C 9.7515451,8.6739184 5,12 5,17.8 v 233.92119'
          }
          direction={'reversed'}
          duration={10}
          id={'panel_left_cold'}
          left={40}
          top={130}
        />
        <Pipe
          active={p154_0 && p154_1 && p156.value > 0}
          activeColor={'cold'}
          d={
            'M 5,251.72119 V 330.2 c 0,0 0,5.8 5.8,5.8 h 368.4 c 0,0 5.8,0 5.8,-5.8 V 244'
          }
          direction={'reversed'}
          duration={14}
          id={'panel_left_cold_bot'}
          left={40}
          top={130}
        />
        <Pipe
          active={p154_0 && p154_1 && p156.value > 0}
          activeColor={'hot'}
          begin={5}
          d={
            'M 170,341.83166 V 440.2 c 0,0 0,5.8 5.8,5.8 h 206.4 c 0,0 5.8,0 5.8,-5.8 V 255.8 c 0,0 0,-5.8 5.8,-5.8 h 22.9 c 0,0 5.8,0 5.8,5.8 V 280'
          }
          duration={11}
          id={'panel_left_hot_top'}
          left={3}
          top={-5}
        />
        <Pipe
          active={p154_0 && p156.value > 0}
          activeColor={'hot'}
          begin={5}
          d={
            'M 210,23 230.2931,8.3889674 c 0,0 4.7069,-3.3889674 10.1044,-1.2659887 l -0.905,-0.3559574 c 0,0 5.3975,2.1229787 5.97462,7.8941947 l -0.15424,-1.542432 c 0,0 0.57712,5.771216 -4.10752,9.19088 l -1.74072,1.270672 c 0,0 -4.68464,3.419664 -9.34476,6.872672 L 174.66012,71.546992 C 174.66012,71.546992 170,75 170,80.8 v 261.03166'
          }
          duration={11}
          id={'panel_left_hot_bot'}
          left={3}
          top={-5}
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
          active={p154_0 && !p154_1}
          activeColor={'hot'}
          d={'M 5 5 L 100 5'}
          duration={4}
          id={'left_boiler_to_panel_output_hot'}
          left={170}
          top={336}
        />
        <Pipe
          active={p154_2}
          activeColor={'cold'}
          d={'M 5 5 L 75 5'}
          direction={'reversed'}
          duration={4}
          id={'pool_cold'}
          left={430}
          top={346}
        />
        <Pipe
          active={p154_2}
          activeColor={'hot'}
          d={'M 5 5 L 75 5'}
          duration={4}
          id={'pool_hot'}
          left={430}
          top={289}
        />
      </g>
    )
  }

  static renderConnectors() {
    return (
      <g>
        <Connector left={270} top={193.5} />
        <Connector left={270} top={317} />
        <Connector left={270} top={359} />
        <Connector left={270} top={379.5} />
        <TriConnector direction={'rotatedRight'} left={169} top={332.8} />
        <TriValve left={29} top={372.5} />
      </g>
    )
  }

  renderBoiler() {
    const { data: { p154_0, p156 } } = this.props

    return (
      <g>
        <Boiler left={270} top={200} />
        <Coil active={p154_0 && p156.value > 0} direction={'right'} left={270} top={340} />
        {Scheme9.renderConnectors()}
      </g>
    )
  }

  getT5Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 85, top: 410 }
      case 1:
        return { left: 529.32, top: 67 }
      default:
        return {}
    }
  }

  getT6Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 285.5, top: 150 }
      case 1:
        return { left: 529.32, top: 91 }
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
        {p134.visible && <ReadField left={505} param={'p134'} top={255} />}
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

  getFlowMeterPosition = ({ position }) => {
    switch (position) {
      case 0:
        return 'translate(' + 220.5 + ' ' + 393.5 + ')'
      case 1:
        return 'translate(' + 554.32 + ' ' + 17 + ')'
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

  renderPool() {
    const { data: { p154_2 } } = this.props

    return (
      <g transform={'translate(' + 415 + ' ' + 270 + ')'}>
        <PoolPump />
        <PoolTank left={90} top={12} />
        <Pump direction="left" label={{ position: 'bottom', sign: 'C' }} active={p154_2} left={44} top={70} />
      </g>
    )
  }

  render() {
    return (
      <SvgContainer height={558.1} width={650}>
        {this.renderPipes()}
        <Shower left={384.25} top={165} />
        <SolarPanel left={50} />
        <Clock left={575} />
        {this.renderBoiler()}
        {this.renderPumpP()}
        {this.renderPool()}
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

const ConnectedScheme9 = connect(mapStateToProps)(Scheme9)
export { ConnectedScheme9 as Scheme9 }

Scheme9.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number,
}

Scheme9.defaultProps = {
  data: {},
  height: 0,
  width: 0,
}
