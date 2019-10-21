import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SvgContainer } from '../../components/SvgContainer'
import { Clock, Inverter, Pipe, Relays } from '../../components'
import { PvPanelsRow } from '../../panels'
import PropTypes from 'prop-types'

class PV extends Component {
  renderOptiPvRelays() {
    return this.props.data.p1140 !== 0 ? (
      <Relays
        group={'optiPv'}
        left={45}
        onRelayClick={this.props.data.callbacks.onRelayClickHanlder}
        relays={this.props.data.optiPv.relays}
      />
    ) : null
  }

  renderOptiTempRelays() {
    return this.props.data.p288 !== 0 ? (
      <Relays
        group={'optiTemp'}
        heater={{
          temperature: this.props.data.p282,
          power: this.props.data.p268,
        }}
        left={225}
        onRelayClick={this.props.data.callbacks.onRelayClickHanlder}
        relays={this.props.data.optiTemp.relays}
      />
    ) : null
  }

  renderPipes() {
    return (
      <g>
        <Pipe active={false} d={'M 0 44 L 0 0 L 195 0 '} id={'lineHeater'} left={240} top={460} />
        <Pipe
          active={true}
          animationColor={'#FF6600'}
          d={'M 0 0 L 0 -325 L 165 -427 L 165 -472 L 274 -472 '}
          duration={7}
          id={'network1Straight'}
          left={435}
          top={535}
        />
        <Pipe
          active={true}
          animationColor={'#FF6600'}
          d={'M 0 0 L 0 -323 L 128 -427 L 128 -472 L 218 -472 '}
          duration={7}
          id={'network2Straight'}
          left={490}
          top={535}
        />
        <Pipe
          active={true}
          animationColor={'#FF6600'}
          d={'M 0 0 L 0 -323 L 91 -427 L 91 -472 L 162 -472 '}
          duration={7}
          id={'network3Straight'}
          left={545}
          top={535}
        />
        <Pipe
          active={true}
          animationColor={'#FF6600'}
          d={'M 105 270 L 105 340 L 0 340 L 0 100 L 100 0 L 120 0'}
          duration={7}
          id={'panel1'}
          left={5}
          top={70}
        />
        <Pipe
          active={true}
          animationColor={'#FF6600'}
          d={'M 95 170 L 95 230 L 50 230 L 50 50 L 100 0 L 120 0'}
          duration={7}
          id={'panel2'}
          left={5}
          top={170}
        />
        <Pipe active={false} d={'M 0 0 L 0 70 L 295 70 '} id={'inverter1'} left={140} top={340} />
      </g>
    )
  }

  render() {
    return (
      <SvgContainer height={this.props.height} width={this.props.width}>
        <Clock left={700} />
        {this.renderPipes()}
        <PvPanelsRow left={110} top={0} />
        <PvPanelsRow left={110} top={100} />
        <Inverter left={83} top={230} />
        {this.renderOptiPvRelays()}
        {this.renderOptiTempRelays()}
      </SvgContainer>
    )
  }
}

const mapStateToProps = state => {
  const { data } = state
  return {
    data,
  }
}

const ConnectedPV = connect(mapStateToProps)(PV)
export { ConnectedPV as PV }

PV.propTypes = {
  data: PropTypes.object,
}

PV.defaultProps = {
  data: {},
}
