import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OutputPipe, Circuit, Pipe, ReadField, VerticalReadField, Valve } from '../../../components'
import PropTypes from 'prop-types'

import FanCoilUnitLabel from '../labels/FanCoilUnitLabel'

class COOutput extends Component {
  render() {
    return (
      <g
        className="COOutput"
        transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}
      >
        <Pipe
          active={this.props.data.Output.value}
          activeColor={'hot'}
          begin={1.5}
          d={'M 5 5 L 100 5 '}
          direction={'reversed'}
          duration={3}
          id={'CO_3'}
          left={165}
        />
        <Pipe
          active={this.props.data.Output.value}
          activeColor={'cold'}
          d={'M 5 5 L 5 147 S 5 155 13 155 L 100 155'}
          duration={6}
          id={'CO_4'}
          left={165}
          top={20}
        />

        {this.props.data.Output.circuit3.visible && (
          <g>
            <FanCoilUnitLabel left={1} top={-100} />
            <Circuit
              active={this.props.data.Output.circuit3.value}
              begin={2}
              left={30}
              reversed={false}
            />
            <OutputPipe active={this.props.data.Output.value} activeColor={'hot'} left={25} />
            <OutputPipe
              active={this.props.data.Output.value}
              activeColor={'cold'}
              left={47}
              top={20}
            />
          </g>
        )}
        {this.props.data.Output.circuit2.visible && (
          <g>
            <VerticalReadField left={76.5} param={this.props.data.p100 === 45570 ? 'p188' : 'p154'} top={-166} />
            <Circuit active={this.props.data.Output.circuit2.value} begin={4} left={85} />
          </g>
        )}
        {this.props.data.Output.circuit1.visible && (
          <g>
            <VerticalReadField left={131.5} param={this.props.data.p100 === 45570 ? 'p186' : 'p152'} top={-166} />
            <ReadField left={176} param={this.props.data.p100 === 45570 ? 'p184' : 'p150'} top={-60} />
            <Circuit active={this.props.data.Output.circuit1.value} begin={6} left={140} />
            <Pipe
                active={true}
                activeColor={'cold'}
                anime={false}
                d={'M 5 5 L 30 5 '}
                id={'CWU_1_1'}
                left={136}
                top={-37.3}
              />
            <Valve left={152.5} top={-40} rotate={90}/>
          </g>
        )}

        <OutputPipe active={this.props.data.Output.value} activeColor={'hot'} left={80} />
        <OutputPipe active={this.props.data.Output.value} activeColor={'cold'} left={80} top={20} />
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

const ConnectedCOOutput = connect(mapStateToProps)(COOutput)
export { ConnectedCOOutput as COOutput }

COOutput.propTypes = {
  data: PropTypes.object,
}

COOutput.defaultProps = {
  data: {},
}
