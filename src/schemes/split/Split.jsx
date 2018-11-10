import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SvgContainer } from '../../components/SvgContainer'
import { Clock, ReadField, HeatPump, HeatPumpOutside, Wall, Pipe, Pump } from '../../components'
import { CWU, CO } from './parts'
import PropTypes from 'prop-types'
import OutsideTempLabel from '../split/labels/OutsideTempLabel'

class Split extends Component {
  render() {
    return (
      <SvgContainer height={this.props.height} width={this.props.width}>
        <Clock left={799} />
        <Pipe
          active={this.props.data.PC1.value || this.props.data.PC2.value}
          activeColor={'hot'}
          begin={3}
          d={'M 5 5 L 42 5 S 50 5 50 13 L 50 122 S 50 130 58 130 L 110 130'}
          direction={'reversed'}
          duration={6}
          id={'split_1'}
          left={652}
          top={270}
        />
        <Pipe
          active={this.props.data.PC1.value || this.props.data.PC2.value}
          activeColor={'cold'}
          d={'M 5 5 L 32 5 S 40 5 40 13 L 40 122 S 40 130 48 130 L 120 130'}
          duration={6}
          id={'split_2'}
          left={637}
          top={295}
        />

        {this.props.data.CWU.visible && <CWU />}

        {this.props.data.CO.visible && <CO />}

        <HeatPump left={597} top={253.4} />
        <HeatPumpOutside left={747} top={327.2} />

        <OutsideTempLabel left={764.5} param={'p156'} top={137} />
        <ReadField left={759} param={'p156'} top={160} />

        <Wall left={597} top={168} />
        {(this.props.data.CWU.visible || this.props.data.CO.visible) && (
          <g>
            <ReadField left={540} param={'p134'} top={366} />
            <ReadField left={540} param={'p140'} top={390} />
            <Pump
              active={this.props.data.CO.value || this.props.data.CWU.value}
              left={628.5}
              top={420}
            />
          </g>
        )}
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

const ConnectedSplit = connect(mapStateToProps)(Split)
export { ConnectedSplit as Split }

Split.propTypes = {
  data: PropTypes.object,
}

Split.defaultProps = {
  data: {},
}
