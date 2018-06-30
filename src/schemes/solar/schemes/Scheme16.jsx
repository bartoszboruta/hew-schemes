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
} from '../../../components'
import PropTypes from 'prop-types'

class Scheme16 extends Component {
  renderPipes() {
    return (
      <g>
        <Pipe
          active={true}
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
            active={true}
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
          id={'left_boiler_output_hot'}
          left={145}
          top={139.5}
        />
        <Pipe
          active={true}
          activeColor={'hot'}
          begin={2}
          d={
            'M 149.57589,50 219.2,50 c 0,0 5.8,0 5.8,-5.8 V 5.9961305 -13.27441 -40.165882 c 0,-2.866517 1.6049,-7.079113 7.61144,-7.079113 0,0 3.80668,-0.132408 7.3857,4.580482'
          }
          direction={'reversed'}
          duration={10}
          id={'right_boiler_output_hot'}
          left={170}
          top={50}
        />
        <Pipe
          active={true}
          activeColor={'hot'}
          d={'M 5 5 L 5 245'}
          duration={10}
          id={'boiler_straight_hot'}
          left={315}
          top={95}
        />
        <Pipe
          active={true}
          activeColor={'cold'}
          d={'M 5 5 L 5 69'}
          duration={3}
          id={'boiler_straight_cold'}
          left={315}
          top={385}
        />
        <Pipe
          active={true}
          activeColor={'hot'}
          begin={2}
          d={'M 5 5 L 60 5'}
          duration={3}
          id={'boiler_horizontal_hot_right'}
          left={315}
          top={336.5}
        />
        <Pipe
          active={true}
          activeColor={'hot'}
          d={'M 5 5 L 60 5'}
          direction={'reversed'}
          duration={3}
          id={'boiler_horizontal_hot_left'}
          left={260}
          top={336.5}
        />
        <Pipe
          active={true}
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
          active={true}
          activeColor={'cold'}
          d={'M 5 5 L 60 5'}
          duration={3}
          id={'boiler_horizontal_cold_left'}
          left={260}
          top={377.5}
        />
        <g transform={'scale(-1,1)'}>
          <Pipe
            active={true}
            activeColor={'hot'}
            d={
              'M 149.57589,50 219.2,50 c 0,0 5.8,0 5.8,-5.8 V 5.9961305 -13.27441 -40.165882 c 0,-2.866517 1.6049,-7.079113 7.61144,-7.079113 0,0 3.80668,-0.132408 7.3857,4.580482'
            }
            direction={'reversed'}
            duration={10}
            id={'right_boiler_output_hot'}
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
        <Connector left={270} top={193.5} />
        <TriConnector left={312.25} top={334} />
        <TriConnector left={312.25} top={445} />
        <TriConnector direction={'reversedVertical'} left={312.25} top={95} />
        <TriValve direction={'top'} left={307} top={369.5} />
      </g>
    )
  }

  renderBoilers() {
    return (
      <g>
        <g transform={'translate(' + 170 + ' ' + 200 + ')'}>
          <Boiler />
          <Coil active={this.props.data.p154.value} direction={'left'} left={20} top={140} />
        </g>
        <g transform={'translate(' + 372 + ' ' + 200 + ')'}>
          <Boiler />
          <Coil active={this.props.data.p154.value} direction={'right'} top={140} />
        </g>
      </g>
    )
  }

  renderReadFields() {
    return (
      <g>
        {this.props.data.p128.visible && <ReadField left={254} param={'p128'} />}
        {this.props.data.p130.visible && <ReadField left={96} param={'p130'} top={352.5} />}
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

  renderFlowMeters() {
    return (
      <g>
        {this.props.data.p152.visible && (
          <g transform={'translate(' + 34 + ' ' + 270 + ')'}>
            <FlowMeter />
            <ReadField left={28} param={'p152'} />
          </g>
        )}
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
        <Clock left={600} />
        {this.renderBoilers()}
        {this.renderConnectors()}
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
