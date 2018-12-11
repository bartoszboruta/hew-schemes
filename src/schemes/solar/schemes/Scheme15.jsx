import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  SvgContainer,
  SolarPanel,
  Boiler,
  Coil,
  Clock,
  Connector,
  Pipe,
  Pump,
  FlowMeter,
  ReadField,
  Shower,
  TriConnector,
} from '../../../components'
import PropTypes from 'prop-types'

class Scheme15 extends Component {
  renderPipes() {
    const { data: { p154_0, p154_1, p156 } } = this.props

    return (
      <g>
        <Pipe
          active={p154_0 && p156.value > 0}
          activeColor={'cold'}
          d={
            'M 15,5 9.7515451,8.6739184 C 9.7515451,8.6739184 5,12 5,17.8 v 229.4 c 0,0 0,5.8 5.8,5.8 h 54.93265'
          }
          direction={'reversed'}
          duration={10}
          id={'panel_left_cold_left'}
          left={40}
          top={130}
        />
        <Pipe
          active={p154_0 || p154_1}
          activeColor={'cold'}
          d={
            'M 65.73265,253 H 235'
          }
          direction={'reversed'}
          duration={10}
          id={'panel_left_cold_right'}
          left={40}
          top={130}
        />
        <Pipe
          active={p154_0 && p156.value > 0}
          activeColor={'hot'}
          begin={5}
          d={
            'M 210,23 230.2931,8.3889674 c 0,0 4.7069,-3.3889674 10.1044,-1.2659887 l -0.905,-0.3559574 c 0,0 5.3975,2.1229787 5.97462,7.8941947 l -0.15424,-1.542432 c 0,0 0.57712,5.771216 -4.10752,9.19088 l -1.74072,1.270672 c 0,0 -4.68464,3.419664 -9.34476,6.872672 L 174.66012,71.546992 C 174.66012,71.546992 170,75 170,80.8 v 24.94088'
          }
          duration={11}
          id={'panel_left_hot_top'}
          left={3}
          top={-5}
        />
        <Pipe
          active={p154_0 || p154_1}
          activeColor={'hot'}
          begin={5}
          d={
            'M 170,105.74088 V 340.2 c 0,0 0,5.8 5.8,5.8 H 272'
          }
          duration={11}
          id={'panel_left_hot_bot'}
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
          activeColor={'cold'}
          d={
            'M 5 5 L 5 64.2 S 5 70 10.8 70 L 487.2 70 S 493 70 493 64.2 L 493 -233.2 S 493 -239 488.24845486098957 -242.3260815973073 L 483 -246'
          }
          duration={22}
          id={'right_boiler_output_cold'}
          left={100}
          top={380}
        />
        <Pipe
          active={p154_1}
          activeColor={'hot'}
          d={
            'm 5,50 h 214.2 c 0,0 5.8,0 5.8,-5.8 V 5.9961305 -13.27441 -40.165882 c 0,-2.866517 1.6049,-7.079113 7.61144,-7.079113 0,0 3.80668,-0.132408 7.3857,4.580482'
          }
          duration={10}
          direction={'reversed'}
          id={'right_boiler_output_hot'}
          left={170}
          top={50}
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
        <TriConnector left={355.25} top={134} />
        <TriConnector direction={'reversedVertical'} left={94.25} top={380.5} />
        <TriConnector direction={'rotatedRight'} left={169} top={91} />
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
          d={'M 160 20 L 160 10.8 S 160 5 154.2 5 L 10.8 5 S 5 5 5 10.8 L 5 184.2 S 5 190 10.8 190 L 64 190 '}
          duration={7}
          id={'left_boiler_circulation_1'}
          left={206}
          top={119.7}
        />
        <Pump direction="left" label={{ position: 'left', sign: 'C' }} active={p154_2} left={199} top={216} />
      </g>
    )
  }

  renderBoiler() {
    const { data: { p154_0, p154_1 } } = this.props

    return (
      <g>
        <Boiler left={270} top={200} />
        <Coil active={p154_0 || p154_1} direction={'right'} left={270} top={340} />
        {Scheme15.renderConnectors()}
      </g>
    )
  }

  getT5Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 115, top: 410 }
      case 1:
        return { left: 564, top: 67 }
      default:
        return {}
    }
  }

  getT6Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 285.5, top: 150 }
      case 1:
        return { left: 564, top: 91 }
      default:
        return {}
    }
  }

  renderReadFields() {
    const { data: { p128, p130, p132, p134, p136, p138 } } = this.props

    return (
      <g>
        {p128.visible && <ReadField left={254} param={'p128'} />}
        {p130.visible && <ReadField left={196} param={'p130'} top={352.5} />}
        {p132.visible && <ReadField left={324} param={'p132'} />}
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
        <Pump label={{ position: 'left', sign: 'P' }} active={p154_0 && p156.value > 0} />
        <ReadField left={30} param={'p156'} top={3} />
      </g>
    )
  }

  renderPumpK() {
    const { data: { p154_1 } } = this.props

    return (
      <g transform={'translate(' + 581 + ' ' + 300 + ')'}>
        <Pump label={{ position: 'left', sign: 'K' }} active={p154_1} />
      </g>
    )
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
          <g>
            {
              p292.position === 0 && <g transform={'translate(' + 220 + ' ' + 393.5 + ')'}>
                <FlowMeter direction={'horizontal'} />
                <ReadField left={-25} param={'p292'} top={26} />
              </g>
            }
            {
              p292.position === 1 && <g transform={'translate(' + 589.32 + ' ' + 17 + ')'}>
                <ReadField left={-25} param={'p292'} top={26} />
              </g>
            }
            {
              p292.position === 2 && <g transform={'translate(' + 581.5 + ' ' + 270 + ')'}>
                <FlowMeter direction={'vertical'} />
                <ReadField param={'p292'} left={-75} />
              </g>
            }
          </g>
        )
        }
      </g>
    )
  }

  render() {
    return (
      <SvgContainer height={458.1} width={438.3}>
        {this.renderPipes()}
        <Shower left={384.25} top={165} />
        <SolarPanel left={50} />
        <g transform={'scale(-1,1)'}>
          <SolarPanel left={-588} />
        </g>
        <Clock left={610} />
        {this.renderCirculation()}
        {this.renderBoiler()}
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

const ConnectedScheme15 = connect(mapStateToProps)(Scheme15)
export { ConnectedScheme15 as Scheme15 }

Scheme15.propTypes = {
  data: PropTypes.object,
}

Scheme15.defaultProps = {
  data: {},
  height: 0,
  width: 0,
}
