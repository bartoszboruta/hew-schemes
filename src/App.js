import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateData, updateDimensions } from './actions';
import { Split, Solar, COP } from './schemes';

class App extends Component {
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions.bind(this));
        this.updateDimensions()
    }

    updateDimensions() {
        this.props.parent.style.height = Math.max(350, this.props.parent.clientHeight) + 'px';
        let dimensions = {
            height: this.props.parent.clientHeight,
            width: this.props.parent.clientWidth
        };

        this.props.updateDimensions(dimensions);
    }

    schemes = {
        split: Split,
        solar: Solar,
        cop: COP,
    };

    render() {
        const Scheme = this.schemes[this.props.data.type] || null;
        return (
            Scheme && <Scheme />
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