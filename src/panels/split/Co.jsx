import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateData } from '../../actions/index';
import { Row } from 'react-bootstrap';
import { SliderPart, TogglePart, SelectPart } from "../parts";

class Co extends Component {
    getAdditionalHeaterSource(params) {
        switch (this.props.data[params.param].name) {
            case 'automatic_boiler':
                return <TogglePart
                    description={params.description}
                    param={params.param}
                    title={params.title}
                />;
            case 'heater':
                return <TogglePart
                    description={params.description}
                    param={params.param}
                    title={params.title}
                />;
            default:
                return null
        }
    }
    render() {
        return <div style={{ marginLeft: 20 }}>
            <Row>
                <SliderPart param={'p132'} title={'T2'} description={'Value of T2 temperature'}/>
            </Row>
            <Row>
                <SelectPart
                    description={'Choose boiler type'}
                    options={['boiler', 'noBoiler']}
                    param={'COType'}
                    title={'Boiler Type'}
                />
            </Row>
            <Row>
                <SelectPart
                    description={'Choose additional heat source for CO'}
                    options={['automatic_boiler', 'heater', 'none']}
                    param={'additionalHeaterSourceCO'}
                    title={'Additional CO source'}
                />
            </Row>
            <Row>
                {
                    this.getAdditionalHeaterSource({
                        description: 'Switch CO Heater source',
                        param: 'additionalHeaterSourceCO',
                        title: 'CO Heater Source'
                    })
                }
            </Row>
            <Row>
                <TogglePart
                    description={'Obwód 1'}
                    param={'hasCircuit1'}
                    title={'Obwód 1'}
                />
            </Row>
            <Row>
                <div style={{ marginLeft: 20 }}>
                    <TogglePart
                        description={'Obwód 1'}
                        param={'circuit1'}
                        title={'Obwód 1 wartosc'}
                    />
                </div>
            </Row>
            <Row>
                <TogglePart
                    description={'Obwód 2'}
                    param={'hasCircuit2'}
                    title={'Obwód 2'}
                />
            </Row>
            <Row>
                <div style={{ marginLeft: 20 }}>
                    <TogglePart
                        description={'Obwód 2'}
                        param={'circuit2'}
                        title={'Obwód 2 wartosc'}
                    />
                </div>
            </Row>
            <Row>
                <TogglePart
                    description={'Klimakonwektor'}
                    param={'hasCircuit3'}
                    title={'Obwód 3'}
                />
            </Row>
            <Row>
                <div style={{ marginLeft: 20 }}>
                    <TogglePart
                        description={'Obwód 3'}
                        param={'circuit3'}
                        title={'Obwód 3 wartosc'}
                    />
                </div>
            </Row>
        </div>
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


const ConnectedCo = connect(mapStateToProps, mapDispatchToProps)(Co);
export { ConnectedCo as Co }