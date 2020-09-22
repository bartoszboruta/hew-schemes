import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Pipe, Pump } from '../';

class Circuit extends Component {

    render() {
        return (
            <g className='Circuit' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
                <Pipe
                    id={'circuit_2'}
                    active={this.props.active}
                    activeColor={this.props.reversed ? 'hot' : 'cold'}
                    begin={this.props.begin}
                    direction={'reversed'}
                    duration={5.5}
                    d={'M 5 145 L 5 5'}
                    left={22}
                    top={-125}
                />
                <Pipe
                    id={'circuit_1'}
                    active={this.props.active}
                    activeColor={this.props.reversed ? 'cold' : 'hot'}
                    begin={this.props.begin + 3}
                    duration={5.5}
                    d={'M 5 125 L 5 5'}
                    top={-125}
                />
                <Pump left={this.props.reversed ? 15 : -7.5} top={-90} active={this.props.active}/>
            </g>
        )
    }
}

export { Circuit }

Circuit.propTypes = {
    active: PropTypes.bool,
    begin: PropTypes.number,
    duration: PropTypes.number,
    left: PropTypes.number,
    reversed: PropTypes.bool,
    top: PropTypes.number,
};

Circuit.defaultProps = {
    active: false,
    begin: 0,
    duration: 0,
    left: 0,
    reversed: false,
    top: 0,
};