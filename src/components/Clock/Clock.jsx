import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateRead } from "../";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false }
  }

  handleMouseIn() {
    this.setState({ hover: true })
  }

  handleMouseOut() {
    this.setState({ hover: false })
  }

  getColor() {
    return this.props.data.date.fill || '#666666';
  }

  render() {
    return (
      <g transform={'translate(' + this.props.left + ' ' + this.props.top + ')' }>
        <g className='Clock' style={{cursor:'pointer'}} onMouseOver={() => this.handleMouseIn()} onMouseOut={() => this.handleMouseOut()}>
          <circle
            style={{fill:'#ffffff',fillOpacity:1,stroke:this.getColor(),strokeWidth:3.96499991,strokeOpacity:1}}
            cy="12.324"
            cx="12.324"
            r="10.3415" />
          <path
            style={{fill:'none',fillRule:'evenodd',stroke:'#666666',strokeWidth:2.7650001,strokeOpacity:1}}
            d="m 12.220381,6.9178884 v 5.9442136 l 3.007095,2.599291"
          />
        </g>
        {this.state.hover && <DateRead top={40} />}
      </g>
    )
  }
}

const mapStateToProps = (state) => {
  const { data, dimensions } = state;
  return {
    data,
    dimensions
  };
};

const ConnectedClock = connect(mapStateToProps)(Clock);
export { ConnectedClock as Clock }

Clock.propTypes = {
  data: PropTypes.object,
  dimensions: PropTypes.object,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired
};

Clock.defaultProps = {
  data: {},
  dimensions: {},
  left: 0,
  top: 0
};
