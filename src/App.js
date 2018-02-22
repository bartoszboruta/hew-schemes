import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { updateData, updateDimensions } from './actions';
import { Split } from './schemes';
import { SplitPanel } from './panels'

class App extends Component {
    componentDidMount() {
        const data = { //example
            CO: {
                value: false,
            },
            additionalHeaterSourceCO: {
                name: 'automatic_boiler',
                unit: '',
                value: true //p208[12] for automatic boiler 208[11] heater
            },
            CWU: {
                value: true
            },
            additionalHeaterSourceCWU: {
                name: 'heater',
                unit: '',
                value: true //p208[11]
            },
            p128: {
                name: 'T1',
                value: 123,
                unit: '°C',
            },
            p132: {
                name: 'T2',
                value: 33,
                unit: '°C',
            },
            p134: {
                name: 'T3',
                value: 33,
                unit: '°C',
            },
            p140: {
                name: 'T6',
                value: 33,
                unit: '°C',
            },
        };

        window.addEventListener("resize", this.updateDimensions.bind(this));
        this.props.updateData(data);
        this.updateDimensions()
    }

    updateDimensions() {
        let dimensions = {
            height: this.props.parent.clientHeight,
            width: this.props.parent.clientWidth
        };

        this.props.updateDimensions(dimensions);
    }

    render() {
        return (
            <div>
                <Split />
                <SplitPanel />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateData: bindActionCreators(updateData, dispatch),
        updateDimensions: bindActionCreators(updateDimensions, dispatch),
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { ConnectedApp as App }

App.propTypes = {
    parent: PropTypes.shape({
        clientHeight: PropTypes.number,
        clientWidth: PropTypes.number,
    })
};

App.defaultProps = {
    parent: {
        clientHeight: 0,
        clientWidth: 0,
    }
};