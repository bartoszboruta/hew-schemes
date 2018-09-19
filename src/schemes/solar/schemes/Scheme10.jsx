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
  Overlay,
} from '../../../components'
import PropTypes from 'prop-types'

class Scheme10 extends Component {
  renderPipes() {
    return (
      <g>
        <Pipe
          active={true}
          activeColor={'cold'}
          d={'M 5 5 L 19.2 5 S 25 5 25 10.8 L 25 207.2 S 25 213 30.8 213 L 230 213'}
          direction={'reversed'}
          duration={9}
          id={'left_boiler_to_panel_output_cold'}
          left={40}
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
          active={this.props.data.p154.value}
          activeColor={'cold'}
          d={'M 15 5 L 9.751545139010435 8.673918402692696 S 5 12 5 17.8 L 5 40'}
          duration={10}
          id={'panel_left_cold'}
          left={40}
          top={130}
        />
        <Pipe
          active={this.props.data.p154.value}
          activeColor={'cold'}
          d={
            'M 25 5 L 10.8 5 S 5 5 5 10.8 L 5 290.2 S 5 296 10.8 296 L 399.2 296 S 405 296 405 290.2 L 405 204'
          }
          duration={10}
          id={'panel_left_cold_1'}
          left={20}
          top={170}
        />
        <Pipe
          active={this.props.data.p154.value}
          activeColor={'hot'}
          begin={5}
          d={
            'M 210 23 L 230.29310081958133 8.38896740990144 S 235 5 240.3974958658397 7.122978657039074 L 239.4925041341603 6.767021342960927 S 244.89 8.89 245.46712157032178 14.661215703217938 L 245.3128784296782 13.118784296782064 S 245.89 18.89 241.205355212781 22.30966419661081 L 239.464644787219 23.58033580338919 S 234.78 27 230.11987807370778 30.453007910806225 L 174.66012192629222 71.54699208919378 S 170 75 170 80.8 L 170 440.2 S 170 446 175.8 446 L 382.2 446 S 388 446 388 440.2 L 388 255.8 S 388 250 393.8 250 L 416.7 250 S 422.5 250 422.5 255.8 L 422.5 280'
          }
          duration={11}
          id={'panel_left_hot'}
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
          active={true}
          activeColor={'hot'}
          d={'M 5 5 L 100 5'}
          duration={4}
          id={'left_boiler_to_panel_output_hot'}
          left={170}
          top={336}
        />
        <Pipe
          active={true}
          activeColor={'cold'}
          d={'M 5 5 L 75 5'}
          direction={'reversed'}
          duration={4}
          id={'pool_cold'}
          left={430}
          top={346}
        />
        <Pipe
          active={true}
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
        <TriConnector direction={'rotatedRight'} left={167} top={335} />
        <TriConnector left={37} top={167.5} />
      </g>
    )
  }

  renderBoiler() {
    return (
      <g>
        <Boiler left={270} top={200} />
        <Coil active={this.props.data.p154.value} direction={'right'} left={270} top={340} />
        {Scheme10.renderConnectors()}
      </g>
    )
  }

  renderReadFields() {
    return (
      <g>
        {this.props.data.p128.visible && <ReadField left={256} param={'p128'} />}
        {this.props.data.p130.visible && <ReadField left={196} param={'p130'} top={352.5} />}
        {this.props.data.p132.visible && <ReadField left={82} param={'p132'} top={236.5} />}
        {this.props.data.p134.visible && <ReadField left={505} param={'p134'} top={255} />}
      </g>
    )
  }

  renderPumpP() {
    return (
      <g transform={'translate(' + 52 + ' ' + 300 + ')'}>
        <Pump active={this.props.data.p156.value} />
        <ReadField left={30} param={'p156'} top={3} />
      </g>
    )
  }

  renderPumpK() {
    return (
      <g transform={'translate(' + 13 + ' ' + 416.5 + ')'}>
        <Pump active={this.props.data.p156.value} />
        <ReadField left={30} param={'p156'} top={3} />
      </g>
    )
  }

  renderFlowMeters() {
    return (
      <g>
        {this.props.data.p152.visible && (
          <g transform={'translate(' + 54 + ' ' + 270 + ')'}>
            <FlowMeter />
            <ReadField left={28} param={'p152'} />
          </g>
        )}
        {this.props.data.p292.visible && (
          <g transform={'translate(' + 220.5 + ' ' + 393.5 + ')'}>
            <FlowMeter direction={'horizontal'} />
            <ReadField left={-25} param={'p292'} top={26} />
          </g>
        )}
      </g>
    )
  }

  renderPool() {
    const active = true
    return (
      <g transform={'translate(' + 415 + ' ' + 270 + ')'}>
        <PoolPump />
        <PoolTank left={90} top={12} />
        <Pump active={active} left={44} top={70} />
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
        {this.renderPumpK()}
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

const ConnectedScheme10 = connect(mapStateToProps)(Scheme10)
export { ConnectedScheme10 as Scheme10 }

Scheme10.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number,
}

Scheme10.defaultProps = {
  data: {},
  height: 0,
  width: 0,
}
