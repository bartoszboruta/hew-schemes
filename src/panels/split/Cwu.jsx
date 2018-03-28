import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateData } from '../../actions/index';
import { Row } from 'react-bootstrap';
import { SliderPart, TogglePart, SelectPart } from "../parts";

class Cwu extends Component {
    getAdditionalHeaterSource(params) {
        switch (this.props.data.CWU[params.param].name) {
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
                        <SliderPart param={'p128'} title={'T1'} description={'Value of T1 temperature'}/>
                    </Row>
                    <Row>
                        <SelectPart
                            description={'Choose additional heat source for CWU'}
                            options={['heater', 'none']}
                            param={'additionalHeater'}
                            title={'Additional CWU heat source'}
                        />
                    </Row>
                    <Row>
                        {
                            this.getAdditionalHeaterSource({
                                description: 'Switch CWU Heater source',
                                param: 'additionalHeater',
                                title: 'CWU Heater Source'
                            })
                        }
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


const ConnectedCwu = connect(mapStateToProps, mapDispatchToProps)(Cwu);
export { ConnectedCwu as Cwu }