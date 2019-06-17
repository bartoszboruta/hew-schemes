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
  TriValve,
  Overlay,
} from '../../../components'
import PropTypes from 'prop-types'

class Scheme16 extends Component {
  renderPipes() {
    const { data: { p154_0, p154_1, p154_2 } } = this.props

    return (
      <g>
        <Pipe
          active={p154_0}
          activeColor={'cold'}
          d={
            'M 15 5 L 9.751545139010435 8.673918402692696 S 5 12 5 17.8 L 5 317.2 S 5 323 10.8 323 L 280 323'
          }
          direction={'reversed'}
          duration={17}
          id={'panel_left_cold'}
          left={40}
          top={130}
        />
        <g transform={'scale(-1,1)'}>
          <Pipe
            active={p154_2}
            activeColor={'cold'}
            d={
              'M 15 5 L 9.751545139010435 8.673918402692696 S 5 12 5 17.8 L 5 317.2 S 5 323 10.8 323 L 280 323'
            }
            direction={'reversed'}
            duration={17}
            id={'panel_left_cold'}
            left={-598}
            top={130}
          />
        </g>
        <Pipe
          active={true}
          activeColor={'hot'}
          d={
            'M 26 78 L 10.8 78 S 5 78 5 72.2 L 5 10.8 S 5 5 10.8 5 L 144.2 5 S 150 5 150 10.8 L 150 30'
          }
          duration={7}
          id={'right_boiler_output_hot'}
          left={145}
          top={139.5}
        />
        <Pipe
          active={p154_2}
          activeColor={'hot'}
          begin={2}
          d={
            'M 149.57589,50 219.2,50 c 0,0 5.8,0 5.8,-5.8 V 5.9961305 -13.27441 -40.165882 c 0,-2.866517 1.6049,-7.079113 7.61144,-7.079113 0,0 3.80668,-0.132408 7.3857,4.580482'
          }
          direction={'reversed'}
          duration={10}
          id={'right_solar_output_hot'}
          left={170}
          top={50}
        />
        <Pipe
          active={p154_0 || p154_2}
          activeColor={'hot'}
          d={'M 5 5 L 5 245'}
          duration={10}
          id={'boiler_straight_hot'}
          left={315}
          top={95}
        />
        <Pipe
          active={p154_0 || p154_2}
          activeColor={'cold'}
          d={'M 5 5 L 5 69'}
          duration={3}
          id={'boiler_straight_cold'}
          left={315}
          top={385}
        />
        <Pipe
          active={p154_0 && p154_1}
          activeColor={'hot'}
          begin={2}
          d={'M 5 5 L 60 5'}
          duration={3}
          id={'boiler_horizontal_hot_right'}
          left={315}
          top={336.5}
        />
        <Pipe
          active={p154_0 && !p154_1}
          activeColor={'hot'}
          d={'M 5 5 L 60 5'}
          direction={'reversed'}
          duration={3}
          id={'boiler_horizontal_hot_left'}
          left={260}
          top={336.5}
        />
        <Pipe
          active={p154_0 && p154_1}
          activeColor={'cold'}
          begin={1}
          d={'M 5 5 L 60 5'}
          direction={'reversed'}
          duration={3}
          id={'boiler_horizontal_cold_right'}
          left={315}
          top={377.5}
        />
        <Pipe
          active={p154_0 && !p154_1}
          activeColor={'cold'}
          d={'M 5 5 L 60 5'}
          duration={3}
          id={'boiler_horizontal_cold_left'}
          left={260}
          top={377.5}
        />
        <Pipe
          active={true}
          activeColor={'cold'}
          anime={false}
          d={'M 5 5 L 100 5'}
          duration={7}
          direction="reversed"
          id={'right_boiler_output_cold'}
          left={450}
          top={399}
        />
        <Overlay height={20} width={20} left={310} top={208} />
        <Overlay height={70} width={20} left={282} top={325} />

        <Pipe //ask Daniel
          active={true}
          activeColor={'hot'}
          d={'M 5 191 L 34.2 191 S 40 191 40 185.2 L 40 10.8 S 40 5 45.8 5 L 120 5 '}
          duration={12}
          direction="reversed"
          id={'right_boiler_to_left'}
          left={252}
          top={213}
        />

        <g transform={'scale(-1,1)'}>
          <Pipe
            active={p154_0}
            activeColor={'hot'}
            d={
              'M 149.57589,50 219.2,50 c 0,0 5.8,0 5.8,-5.8 V 5.9961305 -13.27441 -40.165882 c 0,-2.866517 1.6049,-7.079113 7.61144,-7.079113 0,0 3.80668,-0.132408 7.3857,4.580482'
            }
            direction={'reversed'}
            duration={10}
            id={'left_solar_output_hot'}
            left={-469}
            top={50}
          />
        </g>
      </g>
    )
  }

  renderConnectors() {
    return (
      <g>
        <Connector left={170} top={193.5} />
        <Connector left={372} top={193.5} />
        <Connector left={255.5} top={318} />
        <Connector left={372} top={318} />
        <Connector left={255.5} top={359} />
        <Connector left={372} top={359} />
        <Connector left={255.5} top={379.5} />
        <Connector left={457.5} top={379.5} />
        <TriConnector left={309.6} top={331.8} />
        <TriConnector left={309.6} top={442.8} />
        <TriConnector direction={'reversedVertical'} left={309.5} top={97.8} />
        <TriValve direction={'top'} left={307} top={369.5} />
      </g>
    )
  }

  renderBoilers() {
    const { data: { p154_0, p154_1 } } = this.props

    return (
      <g>
        <g transform={'translate(' + 170 + ' ' + 200 + ')'}>
          <Boiler />
          <Coil active={p154_0 && !p154_1} direction={'left'} left={20} top={140} />
        </g>
        <g transform={'translate(' + 372 + ' ' + 200 + ')'}>
          <Boiler sign="A" />
          <Coil active={p154_0 && p154_1} direction={'right'} top={140} />
        </g>
      </g>
    )
  }

  getT5Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 115, top: 410 }
      case 1:
        return { left: 564, top: 67 }
      case 2:
        return { left: 514, top: 382 }
      default:
        return {}
    }
  }

  getT6Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 185.5, top: 150 }
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
        {p128.visible && <ReadField left={250} param={'p128'} />}
        {p130.visible && <ReadField left={96} param={'p130'} top={352.5} />}
        {p130.visible && <ReadField left={475} param={'p134'} top={352.5} />}
        {p132.visible && <ReadField left={323} param={'p132'} />}
        {p136.visible && <ReadField param={'p136'} {...this.getT5Position(p136)} />}
        {p138.visible && <ReadField param={'p138'} {...this.getT6Position(p138)} />}
      </g>
    )
  }

  renderPumpP() {
    const { data: { p154_0 } } = this.props

    return (
      <g transform={'translate(' + 32 + ' ' + 300 + ')'}>
        <Pump label={{ position: 'left', sign: 'P' }} active={p154_0} />
        <ReadField left={30} param={'p156'} top={3} />
      </g>
    )
  }

  renderPumpK() {
    const { data: { p154_2 } } = this.props

    return (
      <g transform={'translate(' + 581 + ' ' + 300 + ')'}>
        <Pump label={{ position: 'left', sign: 'K' }} active={p154_2} />
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
              p292.position === 0 && <g transform={'translate(' + 480 + ' ' + 393.5 + ')'}>
                <FlowMeter direction={'horizontal'} />
                <ReadField left={-25} param={'p292'} top={29} />
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
        <Shower left={284.25} top={165} />
        <SolarPanel left={50} />
        <g transform={'scale(-1,1)'}>
          <SolarPanel left={-588} />
        </g>
        <Clock left={610} />
        {this.renderBoilers()}
        {this.renderConnectors()}
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

const ConnectedScheme16 = connect(mapStateToProps)(Scheme16)
export { ConnectedScheme16 as Scheme16 }

Scheme16.propTypes = {
  data: PropTypes.object,
}

Scheme16.defaultProps = {
  data: {},
  height: 0,
  width: 0,
}
