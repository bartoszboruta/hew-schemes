import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateData } from '../../actions/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row } from 'react-bootstrap';
import { TogglePart, SliderPart } from "../parts";
import { Co } from './Co';
import { Cwu } from './Cwu';
class SplitPanel extends Component {

    render() {
        return <MuiThemeProvider>
            <Grid>
                <Row className={'show-grid'}>
                    <Row>
                        <SliderPart param={'PC1'} title={'% pompa ciepła'} description={''}/>
                        <SliderPart param={'PC2'} title={'% pompa ciepła 2'} description={''}/>
                    </Row>
                    <Row>
                        <TogglePart param={'CWU'} title={'CWU'} description={'CWU part'}/>
                    </Row>
                    {
                        this.props.data.CWU.visible && <Cwu />
                    }
                    <Row>
                        <TogglePart param={'CO'} title={'CO'} description={'CO part'}/>
                    </Row>
                    {
                        this.props.data.CO.visible && <Co />
                    }
                </Row>
            </Grid>
        </MuiThemeProvider>
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


const ConnectedSplitPanel = connect(mapStateToProps, mapDispatchToProps)(SplitPanel);
export { ConnectedSplitPanel as SplitPanel }