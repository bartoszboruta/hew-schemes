import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateData } from '../../actions';

class Pause extends Component {
  onClick = () => {
    this.props.updateData({animationsPaused: !this.props.data.animationsPaused})
  }

  render() {
    return (
      <g className='Pause' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
        <g onClick={this.onClick} style={{cursor: 'pointer'}}>
          <circle
            r="12.312613"
            cx="12.312613"
            cy="12.335387"
            style={{fill:'#ffffff'}} />
            {
              this.props.data.animationsPaused && <path
                style={{fill:'#666666'}}
                d="m 22.114859,12.245656 -7.734226,4.465357 -7.7342254,4.465357 0,-8.930714 0,-8.9307143 7.7342254,4.4653573 z"
              />
            }
            {
              !this.props.data.animationsPaused && <g>
                <rect
                    style={{fill:'#666666'}}
                    width="4.6243024"
                    height="14.373944"
                    x="6.3311019"
                    y="5.0861073" />
                <rect
                  y="5.0860562"
                  x="14.038273"
                  height="14.373944"
                  width="4.6243024"
                  style={{fill:'#666666'}} />
              </g>
            }
        </g>
      </g>
    )
  }
}

const mapStateToProps = (state) => {
  const { data } = state;
  return {
    data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateData: bindActionCreators(updateData, dispatch),
  }
};

const ConnectedPause = connect(mapStateToProps, mapDispatchToProps)(Pause);
export { ConnectedPause as Pause }

Pause.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
};

Pause.defaultProps = {
  left: 0,
  top: 0,
};