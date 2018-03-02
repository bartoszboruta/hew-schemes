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
            CWU: {
                value: true,
                visible: true
            },
            additionalHeaterSourceCWU: {
                name: 'heater',
                unit: '',
                value: true //p208[11]
            },
            CWUType: {
                name: 'condenser', //coil //condenser
                value: false
            },
            CWUCirc: {
                value: false,
                visible: true
            },
            CO: {
                visible: true,
                value: true,
            },
            COType: {
                name: 'boiler', //noBoiler
            },
            additionalHeaterSourceCO: {
                name: 'automatic_boiler',
                unit: '',
                value: true //p208[12] for automatic boiler 208[11] heater
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
            p146: {
                name: 'T9',
                value: 33,
                unit: '°C',
            },
            p152: {
                name: 'T12',
                value: 15,
                unit: '°C',
            },
            p156: {
                name: 'T14',
                value: 15,
                unit: '°C',
            },
            hasCircuit1: {
                value: true,
            },
            circuit1: {
                value: true
            },
            hasCircuit2: {
                value: true,
            },
            circuit2: {
                value: false
            },
            hasCircuit3: {
                value: true,
            },
            circuit3: {
                value: true
            },
            temperatureSensor: {
                name: 'analog', // digital
            },
            PC1: {
                value: 10
            },
            PC2: {
                value: 0
            },
            Output: {
                value: false //any of circuits is active
            }
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