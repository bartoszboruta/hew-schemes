import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  AutomaticBoiler,
  Boiler,
  Heater,
  FlowHeater,
  ReadField,
  Pipe,
  Connector,
  Valve,
  TriConnector,
} from '../../../components'
import Label from '../../../components/Label'
import HeaterLabel from '../labels/HeaterLabel'
import AutomaticBoilerLabel from '../labels/AutomaticBoilerLabel'
import COLabel from '../labels/COLabel'
import { COOutput } from './COOutput'
import PropTypes from 'prop-types'

class CO extends Component {
  getAdditionalHeaterSource() {
    switch (this.props.data.CO.additionalHeater.name) {
      case 'automatic_boiler':
        if (this.props.data.CO.type.name === 'boiler') {
          return (
            <g>
              <AutomaticBoilerLabel left={305} top={284} />
              <AutomaticBoiler
                active={this.props.data.CO.additionalHeater.value}
                left={410}
                top={250}
              />
            </g>
          )
        }
        return null
      case 'heater':
        if (this.props.data.CO.type.name === 'boiler') {
          return <g>
            <Label left={361} top={442} sign="E" />
            <HeaterLabel left={384} top={429} />
            <Heater active={this.props.data.CO.additionalHeater.value} left={298} top={430} />
          </g>
        }
        if (this.props.data.CO.type.name === 'noBoiler') {
          return (
            <g>
              <ReadField left={275} param={this.props.data.p100 === 45570 ? 'p186' : 'p152'} top={495} />
              <FlowHeater
                active={this.props.data.CO.additionalHeater.value}
                left={392.5}
                top={471.5}
              />;
            </g>
          )
        }
        return null
      default:
        return null
    }
  }

  render() {
    return (
      <g className={'CO'}>
        {this.props.data.CO.type.name === 'boiler' && (
          <g>
            {this.props.data.CWU.visible && (
              <g>
                <Pipe
                  active={this.props.data.CO.value}
                  activeColor={'hot'}
                  d={'M 5 5 L 22 5 S 30 5 30 13 L 30 142 S 30 150 38 150 L 175 150'}
                  direction={'reversed'}
                  duration={8}
                  id={'CO_1_1'}
                  left={347}
                  top={330}
                />
                <Pipe
                  active={this.props.data.CO.value || this.props.data.CWU.value}
                  activeColor={'hot'}
                  begin={5}
                  d={'M 175 150 L 261 150 S 269 150 269 142 L 269 20'}
                  direction={'reversed'}
                  duration={7}
                  id={'CO_1_2'}
                  left={347}
                  top={330}
                />

                <Pipe
                  active={this.props.data.CO.value}
                  activeColor={'cold'}
                  d={'M 5 160 L 152 160'}
                  duration={3.5}
                  id={'CO_2_1'}
                  left={344}
                  top={345}
                />
                <Pipe
                  active={this.props.data.CO.value || this.props.data.CWU.value}
                  activeColor={'cold'}
                  d={'M 152 160 L 289 160 S 297 160 297 152 L 297 5'}
                  duration={6}
                  id={'CO_2_2'}
                  left={344}
                  top={345}
                />
                <Valve left={514.2} top={472.5} />
                <TriConnector left={489.2} top={497.5} />
              </g>
            )}
            {!this.props.data.CWU.visible && (
              <g>
                <Pipe
                  active={this.props.data.CO.value}
                  activeColor={'hot'}
                  d={
                    'M 5 5 L 22 5 S 30 5 30 13 L 30 142 S 30 150 38 150 L 261 150 S 269 150 269 142 L 269 20'
                  }
                  direction={'reversed'}
                  duration={11}
                  id={'CO_1'}
                  left={347}
                  top={330}
                />

                <Pipe
                  active={this.props.data.CO.value}
                  activeColor={'cold'}
                  d={'M 5 160 L 289 160 S 297 160 297 152 L 297 5'}
                  duration={9}
                  id={'CO_2'}
                  left={344}
                  top={345}
                />
              </g>
            )}

            <COOutput left={0} top={330} />

            <Boiler left={255.7} top={311.7} sign={''} />
            <COLabel left={251} top={537} />
            {this.getAdditionalHeaterSource()}

            <Connector left={255.7} top={311} />
            <Connector left={255.7} top={481} />

            <Connector left={341} top={311} />
            <Connector left={341} top={481} />

            <ReadField left={180} param={this.props.data.p100 === 45570 ? 'p166' : 'p132'} top={420} />
          </g>
        )}

        {this.props.data.CO.type.name === 'noBoiler' && (
          <g>
            <Pipe
              active={this.props.data.CWU.value || this.props.data.CO.value}
              activeColor={'hot'}
              d={'M 30 150 L 261 150 S 269 150 269 142 L 269 20'}
              direction={'reversed'}
              duration={10}
              id={'CO_3'}
              left={347}
              top={330}
            />
            <Pipe
              active={this.props.data.CWU.value || this.props.data.CO.value}
              activeColor={'cold'}
              d={'M 5 160 L 289 160 S 297 160 297 152 L 297 5'}
              duration={11}
              id={'CO_4'}
              left={344}
              top={345}
            />
            {this.props.data.CWU.visible && (
              <g>
                <Valve left={514.2} top={472.5} />
                <TriConnector left={489.2} top={497.5} />
              </g>
            )}
            {this.getAdditionalHeaterSource()}
          </g>
        )}
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

const ConnectedCO = connect(mapStateToProps)(CO)
export { ConnectedCO as CO }

CO.propTypes = {
  data: PropTypes.object,
}

CO.defaultProps = {
  data: {},
}
