import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  TriConnector
} from '../../../components';
import PropTypes from 'prop-types';

class Scheme7 extends Component {
  renderPipes() {
    return (
      <g>
        <Pipe
          id={'Scheme_1_panel_left_cold'}
          active={this.props.data.p154.value}
          activeColor={'cold'}
          d={'M 15 5 L 9.751545139010435 8.673918402692696 S 5 12 5 17.8 L 5 247.2 S 5 253 10.8 253 L 235 253'}
          direction={'reversed'}
          duration={10}
          left={40}
          top={130}
        />
        <Pipe
          id={'Scheme_1_panel_left_hot'}
          active={this.props.data.p154.value}
          activeColor={'hot'}
          d={'M 210 23 L 230.29310081958133 8.38896740990144 S 235 5 240.3974958658397 7.122978657039074 L 239.4925041341603 6.767021342960927 S 244.89 8.89 245.46712157032178 14.661215703217938 L 245.3128784296782 13.118784296782064 S 245.89 18.89 241.205355212781 22.30966419661081 L 239.464644787219 23.58033580338919 S 234.78 27 230.11987807370778 30.453007910806225 L 174.66012192629222 71.54699208919378 S 170 75 170 80.8 L 170 340.2 S 170 346 175.8 346 L 272 346'}
          begin={5}
          duration={11}
          left={3}
          top={-5}
        />
        <Pipe
          id={'left_boiler_output_cold'}
          active={true}
          activeColor={'cold'}
          d={'M 5 5 L 150 5'}
          duration={7}
          left={120}
          top={399}
        />
        <Pipe
          id={'right_boiler_output_hot'}
          active={true}
          activeColor={'hot'}
          d={'M 26 78 L 10.8 78 S 5 78 5 72.2 L 5 10.8 S 5 5 10.8 5 L 144.2 5 S 150 5 150 10.8 L 150 30'}
          duration={7}
          left={475}
          top={139.5}
        />
        <Pipe
          id={'left_boiler_output_hot_left'}
          active={true}
          activeColor={'hot'}
          d={'M 235 5 L 10.8 5 S 5 5 5 10.8 L 5 164.2 S 5 170 10.8 170 L 64 170'}
          duration={11}
          left={206}
          top={139.7}
        />
        <Pipe
          id={'left_boiler_to_right_boiler'}
          active={true}
          activeColor={'hot'}
          d={'M 0 5 L 24.2 5 S 30 5 30 10.8 L 30 185.2 S 30 191 35.8 191 L 135 191'}
          duration={11}
          left={365}
          top={212.5}
        />
      </g>
    );
  }

  renderCirculation() {
    return (
      <g>
        <Pipe
          id={'right_boiler_circulation_1'}
          active={true}
          activeColor={'hot'}
          begin={3}
          d={'M 44 5 L 10.8 5 S 5 5 5 10.8 L 5 164.2 S 5 170 10.8 170 L 64 170'}
          duration={7}
          left={436}
          top={139.7}
        />
        <Pump left={429} top={216} active={this.props.data.p156.value} />
      </g>
    );
  }

  static renderConnectors() {
    return (
      <g>
        <Connector left={500} top={193.5} />
        <Connector left={355.5} top={193.5} />
        <Connector left={500} top={285.5} />
        <Connector left={270} top={285.5} />
        <Connector left={270} top={317} />
        <Connector left={270} top={359} />
        <Connector left={270} top={379.5} />
        <Connector left={500} top={379.5} />
        <TriConnector direction={'reversedVertical'} left={472.25} top={140} />
        <TriConnector direction={'reversedVertical'} left={433.25} top={140} />
      </g>
    );
  }

  renderBoiler() {
    return (
      <g>
        <Boiler left={270} top={200} />
        <Coil
          active={this.props.data.p154.value}
          direction={'right'}
          left={270}
          top={340}
        />
        {Scheme7.renderConnectors()}
      </g>
    );
  }

  renderBoilerRight() {
    return (
      <g>
        <Boiler left={500} top={200} />
        <Coil
          active={this.props.data.p154.value}
          direction={'right'}
          left={270}
          top={340}
        />
        {Scheme7.renderConnectors()}
      </g>
    );
  }

  renderReadFields() {
    return (
      <g>
        {this.props.data.p128.visible && (
          <ReadField param={'p128'} left={256} />
        )}
        {this.props.data.p130.visible && (
          <ReadField param={'p130'} left={196} top={352.5} />
        )}
        {this.props.data.p132.visible && (
          <ReadField param={'p132'} left={62} top={237.25} />
        )}
        {this.props.data.p134.visible && (
          <ReadField param={'p134'} left={425.5} top={352.5} />
        )}
      </g>
    );
  }

  renderPumpP() {
    return (
      <g transform={'translate(' + 32 + ' ' + 300 + ')'}>
        <Pump active={this.props.data.p156.value} />
        <ReadField param={'p156'} left={30} top={3} />
      </g>
    );
  }

  renderPumpK() {
    return <g transform={'translate(' + 198 + ' ' + 216 + ')'}>
      <Pump active={this.props.data.p156.value} />
    </g>
  }

  renderFlowMeters() {
    return (
      <g>
        {this.props.data.p152.visible && (
          <g transform={'translate(' + 34 + ' ' + 270 + ')'}>
            <FlowMeter />
            <ReadField param={'p152'} left={28} />
          </g>
        )}
        {this.props.data.p292.visible && (
          <g transform={'translate(' + 190 + ' ' + 393.5 + ')'}>
            <FlowMeter direction={'horizontal'} />
            <ReadField param={'p292'} left={-25} top={26} />
          </g>
        )}
      </g>
    );
  }

  render() {
    return (
      <SvgContainer width={650} height={458.1}>
        {this.renderPipes()}
        {this.renderCirculation()}
        <Shower left={614.25} top={165} />
        <SolarPanel left={50} />
        <Clock left={609} />
        {this.renderBoiler()}
        {this.renderBoilerRight()}
        {this.renderPumpP()}
        {this.renderPumpK()}
        {this.renderReadFields()}
        {this.renderFlowMeters()}
      </SvgContainer>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data: data
  };
};

const ConnectedScheme7 = connect(mapStateToProps)(Scheme7);
export { ConnectedScheme7 as Scheme7 };

Scheme7.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number
};

Scheme7.defaultProps = {
  data: {},
  height: 0,
  width: 0
};
