import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, HelpBlock, Col } from 'react-bootstrap'
import { updateData } from '../../../actions'
import _ from 'lodash'

class SelectPart extends Component {
  onChangeHandler(e, optionKey) {
    this.props.updateData((this.props.data[this.props.param].name = this.props.options[optionKey]))
  }

  render() {
    return (
      <FormGroup>
        <Col md={3} xs={12}>
          <ControlLabel>{this.props.title}</ControlLabel>
          <HelpBlock>{this.props.description}</HelpBlock>
        </Col>

        <Col md={9} xs={12}>
          <SelectField
            max={200}
            min={0}
            onChange={this.onChangeHandler.bind(this)}
            value={
              parseInt(_.findKey(this.props.options, function(item) { return item === this.props.data[this.props.param].name }.bind(this)), 10)
            }
          >
            {_.map(this.props.options, (option, key) => {
              return (
                <MenuItem
                  key={key}
                  onSelect={this.onChangeHandler.bind(this)}
                  primaryText={option}
                  value={key}
                />
              )
            })}
          </SelectField>
        </Col>
      </FormGroup>
    )
  }
}

const mapStateToProps = state => {
  const { data } = state
  return {
    data,
  }
}

const mapDispatchToProps = {
  updateData,
}

const ConnectedSelectPart = connect(mapStateToProps, mapDispatchToProps)(SelectPart)
export { ConnectedSelectPart as SelectPart }

SelectPart.propTypes = {
  description: PropTypes.string,
  updateData: PropTypes.func,
  title: PropTypes.string,
}

SelectPart.defaultProps = {
  description: '',
  title: '',
}
