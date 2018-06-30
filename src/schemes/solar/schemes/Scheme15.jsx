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
          active={true}
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
          active={true}
          activeColor={'hot'}
          d={
            'm 5,50 h 214.2 c 0,0 5.8,0 5.8,-5.8 V 5.9961305 -13.27441 -40.165882 c 0,-2.866517 1.6049,-7.079113 7.61144,-7.079113 0,0 3.80668,-0.132408 7.3857,4.580482'
          }
          duration={10}
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
        <TriConnector direction={'reversedVertical'} left={242.25} top={140} />
        <TriConnector direction={'reversedVertical'} left={97.25} top={378.5} />
        <TriConnector direction={'rotatedRight'} left={166.5} top={94} />
      </g>
    )
  }

  renderCirculation() {
    return (
      <g>
        <Pipe
          active={true}
          activeColor={'hot'}
          begin={3}
          d={'M 44 5 L 10.8 5 S 5 5 5 10.8 L 5 164.2 S 5 170 10.8 170 L 64 170 '}
          direction={'reversed'}
          duration={7}
          id={'left_boiler_circulation_1'}
          left={206}
          top={139.7}
        />
        <Pump active={this.props.data.p156.value} left={199} top={216} />
      </g>
    )
  }

  renderBoiler() {
    return (
      <g>
        <Boiler left={270} top={200} />
        <Coil active={this.props.data.p154.value} direction={'right'} left={270} top={340} />
        {Scheme15.renderConnectors()}
      </g>
    )
  }

  renderReadFields() {
    return (
      <g>
        {this.props.data.p128.visible && <ReadField left={254} param={'p128'} />}
        {this.props.data.p130.visible && <ReadField left={196} param={'p130'} top={352.5} />}
        {this.props.data.p132.visible && <ReadField left={324} param={'p132'} />}
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

  renderPumpK() {
    return (
      <g transform={'translate(' + 581 + ' ' + 300 + ')'}>
        <Pump active={this.props.data.p156.value} />
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
      <SvgContainer height={458.1} width={438.3}>
        {this.renderPipes()}
        <Shower left={384.25} top={165} />
        <SolarPanel left={50} />
        <g transform={'scale(-1,1)'}>
          <SolarPanel left={-588} />
        </g>
        <Clock left={600} />
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
