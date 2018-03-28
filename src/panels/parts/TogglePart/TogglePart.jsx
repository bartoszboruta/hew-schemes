import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateData } from '../../../actions/index';
import { FormGroup, ControlLabel, HelpBlock, Col } from 'react-bootstrap';
import Toggle from 'material-ui/Toggle';

class TogglePart extends Component {
    onToggleHandler(e, checked) {
        this.props.updateData(this.props.data[this.props.param]['visible'] = checked)
    }

    render() {
        return<FormGroup>
            <Col md={3} xs={12}>
                <ControlLabel>{ this.props.title }</ControlLabel>
                <HelpBlock>{ this.props.description }</HelpBlock>
            </Col>

            <Col md={9} xs={12}>
                <Toggle
                    onToggle={this.onToggleHandler.bind(this)}
                    toggled={this.props.data[this.props.param]['visible']}
                />
            </Col>
        </FormGroup>
    }
}

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        data
    };
};

const mapDispatchToProps = ({
    updateData,
});


const ConnectedTogglePart = connect(mapStateToProps, mapDispatchToProps)(TogglePart);
export { ConnectedTogglePart as TogglePart }