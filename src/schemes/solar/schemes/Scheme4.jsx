import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Heater, Clock, SvgContainer, SolarPanel, Boiler, Coil, Connector, Pipe, Pump, FlowMeter, ReadField, Shower, TriConnector } from '../../../components';
import PropTypes from 'prop-types';

class Scheme4 extends Component {

  renderPipes() {
    const { data: { p154_0, p156 } } = this.props

    return <g>
      <Pipe
        id={'panel_left_cold'}
        active={p154_0 && p156.value > 0}
        activeColor={'cold'}
        d={'M 15 5 L 9.751545139010435 8.673918402692696 S 5 12 5 17.8 L 5 247.2 S 5 253 10.8 253 L 235 253'}
        direction={'reversed'}
        duration={10}
        left={40}
        top={130}
      />
      <Pipe
        id={'panel_left_hot'}
        active={p154_0 && p156.value > 0}
        activeColor={'hot'}
        d={'M 210 23 L 230.29310081958133 8.38896740990144 S 235 5 240.3974958658397 7.122978657039074 L 239.4925041341603 6.767021342960927 S 244.89 8.89 245.46712157032178 14.661215703217938 L 245.3128784296782 13.118784296782064 S 245.89 18.89 241.205355212781 22.30966419661081 L 239.464644787219 23.58033580338919 S 234.78 27 230.11987807370778 30.453007910806225 L 174.66012192629222 71.54699208919378 S 170 75 170 80.8 L 170 340.2 S 170 346 175.8 346 L 272 346 '}
        begin={5}
        duration={11}
        left={3}
        top={-5}
      />
      <Pipe
        id={'left_boiler_output_cold'}
        active={true}
        activeColor={'cold'}
        anime={false}
        d={'M 5 5 L 150 5'}
        duration={7}
        left={120}
        top={399}
      />
      <Pipe
        id={'left_boiler_output_hot'}
        active={true}
        activeColor={'hot'}
        d={'M 26 78 L 10.8 78 S 5 78 5 72.2 L 5 10.8 S 5 5 10.8 5 L 144.2 5 S 150 5 150 10.8 L 150 30'}
        duration={7}
        left={245}
        top={139.5}
      />
    </g>
  }

  renderCirculation() {
    const { data: { p154_2 } } = this.props

    return <g>
      <Pipe
        id={'left_boiler_circulation_1'}
        active={p154_2}
        activeColor={'hot'}
        begin={3}
        d={'M 160 20 L 160 10.8 S 160 5 154.2 5 L 10.8 5 S 5 5 5 10.8 L 5 184.2 S 5 190 10.8 190 L 64 190'}
        duration={7}
        left={206}
        top={119.7}
      />
      <Pump direction="left" label={{ position: 'left', sign: 'C' }} left={199} top={216} active={p154_2} />
    </g>
  }

  static renderConnectors() {
    return <g>
      <Connector left={270} top={193.5} />
      <Connector left={270} top={285.5} />
      <Connector left={270} top={317} />
      <Connector left={270} top={359} />
      <Connector left={270} top={379.5} />
      <TriConnector left={355.25} top={134} />
    </g>
  }

  renderBoiler() {
    const { data: { p154_0, p156 } } = this.props

    return <g>
      <Boiler left={270} top={200} />
      <Coil active={p154_0 && p156.value > 0} direction={'right'} left={270} top={340} />
      {Scheme4.renderConnectors()}
    </g>
  }

  getT5Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 85, top: 410 }
      case 1:
        return { left: 372, top: 67 }
      default:
        return {}
    }
  }

  getT6Position = ({ position }) => {
    switch (position) {
      case 0:
        return { left: 285.5, top: 150 }
      case 1:
        return { left: 372, top: 91 }
      default:
        return {}
    }
  }

  renderReadFields() {
    const { data: { p128, p130, p132, p134, p136, p138 } } = this.props

    return (
      <g>
        {p128.visible && <ReadField param={'p128'} left={256} />}
        {p130.visible && <ReadField param={'p130'} left={196} top={352.5} />}
        {p132.visible && <ReadField param={'p132'} left={62} top={236.5} />}
        {p134.visible && <ReadField param={'p134'} left={372} top={249} />}
        {p136.visible && <ReadField param={'p136'} {...this.getT5Position(p136)} />}
        {p138.visible && <ReadField param={'p138'} {...this.getT6Position(p138)} />}
      </g>
    )
  }

  renderPumpP() {
    const { data: { p154_0, p156 } } = this.props

    return <g transform={'translate(' + 32 + ' ' + 300 + ')'}>
      <Pump label={{ position: 'left', sign: 'P' }} active={p154_0 && p156.value > 0} />
      <ReadField param={'p156'} left={30} top={3} />
    </g>
  }

  renderHeater() {
    const { data: { p154_1 } } = this.props

    return <Heater left={312} top={302} active={p154_1} />
  }

  getFlowMeterPosition = ({ position }) => {
    switch (position) {
      case 0:
        return 'translate(' + 190 + ' ' + 393.5 + ')'
      case 1:
        return 'translate(' + 397 + ' ' + 17 + ')'
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
    return <SvgContainer width={500} height={458.1}>
      {this.renderPipes()}
      {this.renderCirculation()}
      <Shower left={384.25} top={165} />
      <SolarPanel left={50} />
      <Clock left={416} />
      {this.renderBoiler()}
      {this.renderHeater()}
      {this.renderPumpP()}
      {this.renderReadFields()}
      {this.renderFlowMeters()}
    </SvgContainer>
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data: data,
  };
};

const ConnectedScheme4 = connect(mapStateToProps)(Scheme4);
export { ConnectedScheme4 as Scheme4 }

Scheme4.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number,
};

Scheme4.defaultProps = {
  data: {},
  height: 0,
  width: 0,
};