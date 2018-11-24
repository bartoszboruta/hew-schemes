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
  TriConnector,
  Overlay,
} from '../../../components'
import PropTypes from 'prop-types'

class Scheme12 extends Component {
  renderPipes() {
    const { data: { p154_0, p154_1, p156 } } = this.props

    return (
      <g>
        <Pipe
          active={p154_0 && p156.value > 0}
          activeColor={'cold'}
          d={'M 5 5 L 19.2 5 S 25 5 25 10.8 L 25 207.2 S 25 213 30.8 213 L 230 213'}
          direction={'reversed'}
          duration={11}
          id={'left_boiler_to_panel_output_cold'}
          left={40}
          top={170}
        />

        <Pipe
          active={p154_0 || p154_1}
          activeColor={'cold'}
          d={'M 15 5 L 9.751545139010435 8.673918402692696 S 5 12 5 17.8 L 5 40'}
          direction='reversed'
          duration={2}
          id={'panel_left_cold'}
          left={40}
          top={130}
        />
        <Pipe
          active={p154_1}
          activeColor={'cold'}
          d={
            'M 25 5 L 10.8 5 S 5 5 5 10.8 L 5 290.2 S 5 296 10.8 296 L 454.2 296 S 460 296 460 290.2 L 460 219.8 S 460 214 465.8 214 L 480 214 '
          }
          duration={22}
          direction='reversed'
          id={'panel_left_cold_1'}
          left={20}
          top={170}
        />
        <Pipe
          active={true}
          activeColor={'cold'}
          d={'M 5 5 L 150 5'}
          duration={4}
          id={'left_boiler_output_cold'}
          left={120}
          top={399}
        />
        <Overlay height={34} left={163} top={377.5} width={20} />
        <Pipe
          active={p154_0 || p154_1}
          activeColor={'hot'}
          begin={1}
          d={
            'M 210,23 230.2931,8.3889674 c 0,0 4.7069,-3.3889674 10.1044,-1.2659887 l -0.905,-0.3559574 c 0,0 5.3975,2.1229787 5.97462,7.8941947 l -0.15424,-1.542432 c 0,0 0.57712,5.771216 -4.10752,9.19088 l -1.74072,1.270672 c 0,0 -4.68464,3.419664 -9.34476,6.872672 L 174.66012,71.546992 C 174.66012,71.546992 170,75 170,80.8 v 266.71421'
          }
          duration={11}
          id={'panel_left_hot_top'}
          left={3}
          top={-5}
        />
        <Pipe
          active={p154_1}
          activeColor={'hot'}
          begin={2}
          d={
            'M 170,347.51421 V 440.2 c 0,0 0,5.8 5.8,5.8 h 256.4 c 0,0 5.8,0 5.8,-5.8 v -88.4 c 0,0 0,-5.8 5.8,-5.8 H 498'
          }
          duration={11}
          id={'panel_left_hot_bot'}
          left={3}
          top={-5}
        />
        <Overlay width={60} height={20} left={430} top={395} />
        <Pipe
          active={p154_0 && p156.value > 0}
          activeColor={'hot'}
          d={'M 5 5 L 100 5'}
          duration={4}
          id={'left_boiler_to_panel_output_hot'}
          left={170}
          top={336}
        />
        <Pipe
          active={true}
          activeColor={'hot'}
          d={'M 0 5 L 24.2 5 S 30 5 30 10.8 L 30 185.2 S 30 191 35.8 191 L 135 191'}
          duration={11}
          id={'boiler_to_boiler'}
          left={365}
          top={212.5}
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
      </g>
    )
  }

  static renderConnectors() {
    return (
      <g>
        <Connector left={500} top={193.5} />
        <Connector left={500} top={317} />
        <Connector left={500} top={359} />
        <Connector left={500} top={379.5} />
        <Connector left={500} top={285.5} />
        <Connector left={355.5} top={193.5} />
        <Connector left={270} top={317} />
        <Connector left={270} top={359} />
        <Connector left={270} top={379.5} />
        <TriConnector direction={'rotatedRight'} left={167} top={335} />
        <TriConnector direction={'reversedVertical'} left={472.25} top={140} />
        <TriConnector left={37} top={167.5} />
      </g>
    )
  }

  renderBoiler() {
    const { data: { p154_0, p156 } } = this.props

    return (
      <g>
        <Boiler left={270} top={200} />
        <Coil active={p154_0 && p156.value > 0} direction={'right'} left={270} top={340} />
      </g>
    )
  }

  getT5Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 85, top: 410 }
      case 1:
        return { left: 569.32, top: 67 }
      default:
        return {}
    }
  }

  getT6Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 515, top: 120 }
      case 1:
        return { left: 569.32, top: 91 }
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
        {p132.visible && <ReadField left={82} param={'p132'} top={236.5} />}
        {p134.visible && <ReadField left={426} param={'p134'} top={316} />}
        {p136.visible && <ReadField param={'p136'} {...this.getT5Position(p136)} />}
        {p138.visible && <ReadField param={'p138'} {...this.getT6Position(p138)} />}
      </g>
    )
  }

  renderPumpP() {
    const { data: { p154_0, p156 } } = this.props

    return (
      <g transform={'translate(' + 52 + ' ' + 300 + ')'}>
        <Pump label={{ position: 'left', sign: 'P' }} active={p154_0 && p156.value > 0} />
        <ReadField left={30} param={'p156'} top={3} />
      </g>
    )
  }

  renderPumpK() {
    const { data: { p154_1 } } = this.props

    return (
      <g transform={'translate(' + 13 + ' ' + 417.5 + ')'}>
        <Pump label={{ position: 'left', sign: 'K' }} active={p154_1} />
      </g>
    )
  }

  renderFlowMeters() {
    const { data: { p152, p292 } } = this.props

    return (
      <g>
        {p152.visible && (
          <g transform={'translate(' + 54 + ' ' + 270 + ')'}>
            <FlowMeter />
            <ReadField left={28} param={'p152'} />
          </g>
        )}
        {p292.visible && (
          <g>
            {
              p292.position === 0 && <g transform={'translate(' + 220.5 + ' ' + 393.5 + ')'}>
                <FlowMeter direction={'horizontal'} />
                <ReadField left={-25} param={'p292'} top={26} />
              </g>
            }
            {
              p292.position === 1 && <g transform={'translate(' + 594.32 + ' ' + 17 + ')'}>
                <ReadField left={-25} param={'p292'} top={26} />
              </g>
            }
            {
              p292.position === 2 && <g transform={'translate(' + 14 + ' ' + 388 + ')'}>
                <FlowMeter direction={'vertical'} />
                <ReadField left={28} param={'p292'} />
              </g>
            }
          </g>
        )}
      </g>
    )
  }

  renderBoilerRight() {
    const { data: { p154_1 } } = this.props

    return (
      <g>
        <Boiler left={500} sign="A" top={200} />
        <Coil active={p154_1} direction={'right'} left={500} top={340} />
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
          d={'M 44 5 L 10.8 5 S 5 5 5 10.8 L 5 164.2 S 5 170 10.8 170 L 64 170'}
          duration={7}
          id={'right_boiler_circulation_1'}
          left={436}
          top={139.7}
        />
        <Pump label={{ position: 'left', sign: 'C' }} active={p154_2} left={429} top={216} />
      </g>
    )
  }

  render() {
    return (
      <SvgContainer height={558.1} width={650}>
        {this.renderPipes()}
        <Shower left={614.25} top={165} />
        <SolarPanel left={50} />
        <Clock left={615} />
        {this.renderCirculation()}
        {this.renderBoiler()}
        {this.renderBoilerRight()}
        {Scheme12.renderConnectors()}
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

const ConnectedScheme12 = connect(mapStateToProps)(Scheme12)
export { ConnectedScheme12 as Scheme12 }

Scheme12.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number,
}

Scheme12.defaultProps = {
  data: {},
  height: 0,
  width: 0,
}
