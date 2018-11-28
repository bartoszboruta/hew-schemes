import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { PvPanel } from './PvPanel'

class PvPanelsRow extends Component {
  render() {
    const colors = ['#315495', '#d6d6d6', '#f2f2f2', '#f9f9f9']
    const panels = []
    for (let index = this.props.count - 1; index >= 0; index--) {
      panels.push(<PvPanel color={colors[index]} key={index} left={0 + index * 70} top={0} />)
    }
    return (
      <g
        className="PvPanelsRow"
        transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}
      >
        {panels}
      </g>
    )
  }
}

export { PvPanelsRow }

PvPanelsRow.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
  count: PropTypes.number,
}

PvPanelsRow.defaultProps = {
  left: 0,
  top: 0,
  count: 3,
}
