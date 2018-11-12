import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Boiler,
  Condenser,
  Connector,
  Heater,
  Pipe,
  ReadField,
  Coil,
  Pump,
  TriConnector,
  AutomaticBoiler,
} from '../../../components'
import Label from '../../../components/Label'
import PropTypes from 'prop-types'
import CirculationLabel from '../labels/CirculationLabel'
import AutomaticBoilerLabel from '../labels/AutomaticBoilerLabel'
import CWULabel from '../labels/CWULabel'
import HeaterLabel from '../labels/HeaterLabel'

class CWU extends Component {
  getAdditionalHeaterSource() {
    switch (this.props.data.CWU.additionalHeater.name) {
      case 'heater':
        return (
          <g>
            <Label left={367} sign="E" top={163} />
            <HeaterLabel left={384} top={149} />
            <Heater active={this.props.data.CWU.additionalHeater.value} left={298} top={150} />
          </g>
        )
      case 'automatic_boiler':
        return (
          <g>
            <AutomaticBoilerLabel left={480} top={34} />
            <AutomaticBoiler
              active={this.props.data.CWU.additionalHeater.value}
              left={410}
              top={0}
            />
          </g>
        )
      default:
        return null
    }
  }

  getType() {
    switch (this.props.data.CWU.type.name) {
      case 'condenser':
        return (
          <g>
            <Condenser active={this.props.data.CWU.value} left={430} top={170} />
            <Pump active={this.props.data.CWU.value} left={379} top={213} />
          </g>
        )
      case 'coil':
      default:
        return <Coil active={this.props.data.CWU.value} left={275.7} top={182} />
    }
  }

  render() {
    return (
      <g className={'CWU'}>
        {this.props.data.CO.visible && (
          <g>
            <Pipe
              active={this.props.data.CWU.value}
              activeColor={'hot'}
              d={'M 5 5 L 167 5 S 175 5 175 13 L 175 300'}
              direction={'reversed'}
              duration={11}
              id={'CWU_2'}
              left={347}
              top={178}
            />
            <Pipe
              active={this.props.data.CWU.value}
              activeColor={'cold'}
              begin={5}
              d={'M 5 5 L 142 5 S 150 5 150 13 L 150 283'}
              duration={11}
              id={'CWU_3'}
              left={347}
              top={220}
            />
          </g>
        )}
        {!this.props.data.CO.visible && (
          <g>
            <Pipe
              active={this.props.data.CWU.value}
              activeColor={'hot'}
              d={
                'M 5 5 L 167 5 S 175 5 175 13 L 175 293.5 S 175 301.5 183 301.5 L 261 301.5 S 269 301.5 269 293.5 L 269 172 '
              }
              direction={'reversed'}
              duration={12}
              id={'CWU_2'}
              left={347}
              top={178}
            />
            <Pipe
              active={this.props.data.CWU.value}
              activeColor={'cold'}
              d={
                'M 5 5 L 142 5 S 150 5 150 13 L 150 277 S 150 285 158 285 L 286 285 S 294 285 294 277 L 294 130 '
              }
              duration={13.5}
              id={'CWU_3'}
              left={347}
              top={220}
            />
          </g>
        )}

        <Pipe
          active={true}
          activeColor={'hot'}
          d={'M 5 5 L 192 5 S 200 5 200 13 L 200 30'}
          direction={'reversed'}
          duration={8}
          id={'CWU_1'}
          left={106}
          top={5}
        />
        <Pipe
          active={true}
          activeColor={'cold'}
          anime={false}
          d={'M 5 5 L 30 5 '}
          id={'CWU_1_1'}
          left={226}
          top={220}
        />

        {this.props.data.CWU.circulation.visible && (
          <g>
            <CirculationLabel left={162.5} top={40} />
            <Pipe
              active={this.props.data.CWU.circulation.value}
              activeColor={'hot'}
              d={'M 5 5 L 5 112 S 5 120 13 120 L 140 120'}
              direction={'reversed'}
              duration={9}
              id={'CWU_Circulation'}
              left={120}
              top={5}
            />
            <TriConnector direction={'reversedVertical'} left={117.2} top={5.5} />
            <Pump
              active={this.props.data.CWU.circulation.value}
              label={{ position: 'right', sign: 'P' }}
              left={112.5}
              top={40}
            />
            <ReadField left={135} param={'p146'} top={80} />
          </g>
        )}

        <Boiler left={255.7} top={30.5} />
        <CWULabel left={266.5} top={256} />

        {this.getType()}

        {this.getAdditionalHeaterSource()}

        <Connector left={341} top={159} />
        <Connector left={341} top={201} />
        <Connector left={255.7} top={201} />

        <ReadField left={360} param={'p128'} top={130} />
      </g>
    )
  }
}

const mapStateToProps = state => {
  const { data } = state
  return {
    data,
  }
}

const ConnectedCWU = connect(mapStateToProps)(CWU)
export { ConnectedCWU as CWU }

CWU.propTypes = {
  data: PropTypes.object,
}

CWU.defaultProps = {
  data: {},
}
