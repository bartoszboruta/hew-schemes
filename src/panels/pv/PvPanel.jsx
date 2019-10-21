import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PvPanel extends Component {
  render() {
    return (
      <g
        className="PvPanel"
        transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}
      >
        <g transform={'translate(-5 -539)'}>
          <path
            d={
              'm 100.83889,555.70533 12.51728,0 7.8362,-8.9925 -12.51728,0 -7.8362,8.9925 z m -8.61423,9.89088 12.51299,0 7.83619,-8.99249 -12.51728,0 -7.8319,8.99249 z m -8.61852,9.89089 12.51298,0 7.8405,-8.9968 -12.52159,0 -7.83189,8.9968 z m -8.61853,9.8866 12.51298,0 7.8405,-8.9925 -12.51728,0 -7.8362,8.9925 z m -8.61852,9.8909 12.51728,0 7.83619,-8.9925 -12.51728,0 -7.83619,8.9925 z m -8.61853,9.8866 12.51728,0 7.8362,-8.9882 -12.51728,0 -7.8362,8.9882 z m -8.61852,9.8908 12.51728,0 7.83619,-8.9924 -12.51728,0 -7.83619,8.9924 z m 38.231,-59.33667 12.51728,0 7.8362,-8.9925 -12.51728,0 -7.8362,8.9925 z m -8.61852,9.89088 12.51728,0 7.83619,-8.99249 -12.51728,0 -7.83619,8.99249 z m -8.61853,9.89089 12.52158,0 7.83619,-8.9968 -12.51728,0 -7.84049,8.9968 z m -8.61423,9.8866 12.51728,0 7.8362,-8.9925 -12.51728,0 -7.8362,8.9925 z m -8.61852,9.8909 12.51728,0 7.83619,-8.9925 -12.51728,0 -7.83619,8.9925 z m -8.61853,9.8866 12.51728,0 7.8362,-8.9882 -12.51298,0 -7.8405,8.9882 z m -8.61422,9.8908 12.51728,0 7.83189,-8.9924 -12.51298,0 -7.83619,8.9924 z m 37.71518,-59.33667 13.0331,0 7.8319,-8.9925 -13.02881,0 -7.83619,8.9925 z m -8.61853,9.89088 13.0331,0 7.8319,-8.99249 -13.0288,0 -7.8362,8.99249 z m -8.61422,9.89089 13.0288,0 7.8362,-8.9968 -13.03311,0 -7.83189,8.9968 z m -8.61853,9.8866 13.0288,0 7.8362,-8.9925 -13.0288,0 -7.8362,8.9925 z m -8.61852,9.8909 13.0288,0 7.83619,-8.9925 -13.0288,0 -7.83619,8.9925 z m -8.61853,9.8866 13.0331,0 7.8319,-8.9882 -13.0288,0 -7.8362,8.9882 z m -8.61423,9.8908 13.02881,0 7.83619,-8.9924 -13.0331,0 -7.8319,8.9924 z m 78.87348,-75.56357 -13.0288,0 -5.5236,6.33601 13.02881,0 5.52359,-6.33601 z m 13.47585,0 -12.51728,0 -5.52359,6.33601 12.51728,0 5.52359,-6.33601 z m 13.47585,0 -12.51728,0 -5.52359,6.33601 12.51728,0 5.52359,-6.33601 z m 7.73733,6.33601 5.4978,-6.33601 -12.28086,0 -5.51929,6.33601 12.30235,0 z m -8.57554,9.89089 0.004,0 7.79751,-8.9925 -12.31095,0 -7.8362,8.9925 12.34534,0 z m -8.57124,9.89088 7.79751,-8.99249 -12.35394,0 -7.83619,8.99249 12.39262,0 z m -8.57124,9.89089 7.79321,-8.9968 -12.39692,0 -7.8362,8.9968 12.43991,0 z m -8.57984,9.8866 7.79751,-8.9925 -12.43561,0 -7.8362,8.9925 12.4743,0 z m -8.57125,9.8909 7.79752,-8.9925 -12.4872,0 -7.83189,8.9925 12.52157,0 z m -8.57554,9.8866 7.79751,-8.9882 -12.52587,0 -7.8362,8.9882 12.56456,0 z m -8.57124,9.8908 0,0 7.79321,-8.9924 -12.56886,0 -7.83619,8.9924 12.61184,0 z M 8.17148,615.9404 0,625.38 l 66.25303,0 8.18437,-9.4396 -12.61184,0 -7.8319,8.9925 -0.96287,0 7.84049,-8.9925 -12.51727,0 -7.8362,8.9925 -0.95857,0 7.8362,-8.9925 -12.51728,0 -7.8362,8.9925 -0.95857,0 7.8362,-8.9925 -13.0331,0 -7.8319,8.9925 -0.95857,0 7.8362,-8.9925 -11.76074,0 z m 8.56264,-9.8908 -7.78461,8.9924 11.76074,0 7.84049,-8.9924 -11.81662,0 z m 8.55835,-9.8866 0,0 -7.78032,8.9882 11.81662,0 7.8362,-8.9882 -11.8725,0 z m 8.56264,-9.8909 0,0 -7.78461,8.9925 11.8768,0 7.83619,-8.9925 -11.92838,0 z m 8.56264,-9.8909 -7.78461,8.9925 11.93268,0 7.8362,-8.9925 -11.98427,0 z m 8.55835,-9.8909 0,0 -7.78461,8.9968 11.98856,0 7.84049,-8.9968 -12.04444,0 z m 8.56264,-9.88658 -7.78461,8.99249 12.04444,0 7.8362,-8.99249 -12.09603,0 z m 8.56265,-9.89089 -0.004,0 -7.78461,8.9925 12.10462,0 7.83619,-8.9925 -12.1519,0 z m 6.25864,-7.2344 -5.48491,6.33601 12.1605,0 5.5236,-6.33601 -12.19919,0 z'
            }
            fill={this.props.color}
          />
        </g>
      </g>
    )
  }
}

export { PvPanel }

PvPanel.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
  color: PropTypes.string
}

PvPanel.defaultProps = {
  left: 0,
  top: 0,
  color: '#315495',
}
