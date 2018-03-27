import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { updateData, updateDimensions } from './actions';
import { Split, Solar, COP } from './schemes';

class App extends Component {
    componentDidMount() {
        // const data = { //example SPLIT
        //     date: {
        //         fill: '#00b100',
        //         value: '15-12-2017 14:01:50'
        //     },
        //     CWU: {
        //         value: true,
        //         visible: true,
        //         type: {
        //             name: 'coil', //condenser / coil
        //             value: true
        //         },
        //         additionalHeater: {
        //             name: 'heater',
        //             unit: '',
        //             value: true,
        //         },
        //         circulation: {
        //             value: true,
        //             visible: true,
        //         },
        //     },
        //
        //     CO: {
        //         visible: true,
        //         value: true,
        //         type: {
        //             name: 'boiler', //noBoiler / boiler
        //             value: true
        //         },
        //         additionalHeater: {
        //             name: 'automatic_boiler', //heater /automatic_boiler
        //             unit: '',
        //             value: true,
        //         }
        //     },
        //
        //     p128: {
        //         name: 'T1',
        //         value: 123,
        //         unit: '°C',
        //     },
        //     p132: {
        //         name: 'T2',
        //         value: 33,
        //         unit: '°C',
        //     },
        //     p134: {
        //         name: 'T3',
        //         value: 33,
        //         unit: '°C',
        //     },
        //     p140: {
        //         name: 'T6',
        //         value: 33,
        //         unit: '°C',
        //     },
        //     p146: {
        //         name: 'T9',
        //         value: 33,
        //         unit: '°C',
        //     },
        //     p150: {
        //         name: 'T11',
        //         value: 15,
        //         unit: '°C',
        //     },
        //     p152: {
        //         name: 'T12',
        //         value: 15,
        //         unit: '°C',
        //     },
        //     p154: {
        //         name: 'T13',
        //         value: 15,
        //         unit: '°C',
        //     },
        //     p156: {
        //         name: 'T14',
        //         value: 15,
        //         unit: '°C',
        //     },
        //     Output: {
        //         circuit1: {
        //             value: false,
        //             visible: true,
        //         },
        //         circuit2: {
        //             value: false,
        //             visible: true,
        //         },
        //         circuit3: {
        //             value: true,
        //             visible: true,
        //         },
        //         temperatureSensor: {
        //             name: 'analog' //digital
        //         },
        //         value: true,
        //     },
        //     PC1: {
        //         value: 10
        //     },
        //     PC2: {
        //         value: 0
        //     },
        // };


        // const data = { //example solar
        //     date: {
        //         fill: '#00b100',
        //         value: '15-12-2017 14:01:50'
        //     },
        //     p128: { //visible, position
        //         name: 'T1',
        //         value: 123,
        //         unit: '°C',
        //         visible: true,
        //         position: 'default'
        //     },
        //     p130: {
        //         name: 'T2',
        //         value: 11,
        //         unit: '°C',
        //         visible: true,
        //         position: 'default'
        //     },
        //     p132: {
        //         name: 'T3',
        //         value: 33,
        //         unit: '°C',
        //         visible: true,
        //         position: 'default'
        //     },
        //     p134: {
        //         name: 'T4',
        //         value: 34,
        //         unit: '°C',
        //         visible: true,
        //         position: 'default'
        //     },
        //     p136: {
        //         name: 'TEMPERATURA T1',
        //         value: 34,
        //         unit: '°C',
        //         visible: true,
        //         position: 'default'
        //     },
        //     p138: {
        //         name: 'T6',
        //         value: 34,
        //         unit: '°C',
        //         visible: true,
        //         position: 'default'
        //     },
        //     p152: {
        //         name: 'F1',
        //         value: 33,
        //         unit: 'l/min',
        //         visible: true,
        //         position: 'default'
        //     },
        //     p292: {
        //         name: 'F2',
        //         value: 12,
        //         unit: 'l/min',
        //         visible: true,
        //         position: 'default'
        //     },
        //     p156: {
        //         name: 'E1',
        //         value: 100,
        //         unit: '%',
        //         visible: true,
        //         position: 'default'
        //     }
        // };

      const data = { //example COP
        date: {
          fill: '#00b100',
          value: '15-12-2017 14:01:50'
        },
        p128: {
          name: 'Moc',
          value: 1,
          unit: 'W',
          visible: true,
          position: 'default'
        },
        p132: {
          name: 'Moc',
          value: 11,
          unit: 'W',
          visible: true,
          position: 'default'
        },
        p140: {
          name: 'Napięcie',
          value: 1,
          unit: 'V',
          visible: true,
          position: 'default'
        },
        p144: {
          name: 'Napięcie',
          value: 1,
          unit: 'V',
          visible: true,
          position: 'default'
        },
        p148: {
          name: 'Natężenie',
          value: 1,
          unit: 'A',
          visible: true,
          position: 'default'
        },
        p152: {
          name: 'Natężenie',
          value: 1,
          unit: 'A',
          visible: true,
          position: 'default'
        },
        p160: {
          name: 'Ogrzewanie 1',
          value: 1,
          unit: 'kWh',
          visible: true,
          position: 'default'
        },
        p168: {
          name: 'Ogrzewanie 2',
          value: 122,
          unit: 'kWh',
          visible: true,
          position: 'default'
        },
        p184: {
          name: 'Temperatura T1',
          value: 122,
          unit: '°C',
          visible: true,
          position: 'default'
        },
        p186: {
          name: 'Temperatura T2',
          value: 122,
          unit: '°C',
          visible: true,
          position: 'default'
        },
        p186_p184: {
          name: 'Różnica T1 - T2',
          value: 122,
          unit: '°C',
          visible: true,
          position: 'default'
        },
        p192: {
          name: 'Moc',
          value: 11,
          unit: 'W',
          visible: true,
          position: 'default'
        },
        p190: {
          name: 'Przepływ',
          value: 122,
          unit: 'l/min',
          visible: true,
          position: 'default'
        },
        p200: {
          name: 'Ciepło',
          value: 122,
          unit: 'kWh',
          visible: true,
          position: 'default'
        },
        p208: {
          name: 'Wodomierz',
          value: 122,
          unit: 'l',
          visible: true,
          position: 'default'
        },
        p230: {
          name: 'Chłód',
          value: 11,
          unit: 'kWh',
          visible: true,
          position: 'default'
        },
        p232: {
          name: 'Rozmrażanie',
          value: 11,
          unit: 'kWh',
          visible: true,
          position: 'default'
        },
        p238: {
          name: 'Chłodzenie',
          value: 12,
          unit: 'kWh',
          visible: true,
          position: 'default'
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
           //<Split width={840} height={553}/>
            //<Solar />
          <COP />
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