import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'material-ui/Slider';
import { connect } from "react-redux";
import { FormGroup, ControlLabel, HelpBlock, Col } from 'react-bootstrap';
import { updateData } from '../../../actions';

class SliderPart extends Component {
    onChangeHandler(e, newValue) {
        this.props.updateData(this.props.data[this.props.param]['value'] = newValue)
    }

    render() {
        return <FormGroup>
                <Col md={3} xs={12}>
                    <ControlLabel>{ this.props.title }</ControlLabel>
                    <HelpBlock>{ this.props.description }</HelpBlock>
                </Col>

                <Col md={9} xs={12}>
                    <Slider
                        min={0}
                        max={200}
                        value={
                            this.props.data[this.props.param] && this.props.data[this.props.param]['value']
                        }
                        onChange={this.onChangeHandler.bind(this)}
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

const ConnectedSliderPart = connect(mapStateToProps, mapDispatchToProps)(SliderPart);
export { ConnectedSliderPart as SliderPart }

SliderPart.propTypes = {
    description: PropTypes.string,
    updateData: PropTypes.func,
    title: PropTypes.string,
};

SliderPart.defaultProps = {
    description: '',
    title: '',
};