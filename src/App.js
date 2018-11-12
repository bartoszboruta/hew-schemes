import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateData, updateDimensions } from './actions'
import { Split, Solar, COP } from './schemes'

class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this))
    this.updateDimensions()
  }

  updateDimensions() {
    this.props.parent.style.height = Math.max(700, this.props.parent.clientHeight) + 'px'
    let dimensions = {
      height: this.props.parent.clientHeight,
      width: this.props.parent.clientWidth,
    }

    this.props.updateDimensions(dimensions)
  }

  schemes = {
    split: Split,
    solar: Solar,
    cop: COP,
  }

  render() {
    const Scheme = this.schemes[this.props.data.type] || null
    return (
      Scheme && (
        <div>
          <div>
            <div>
              Scheme:{' '}
              <input
                onChange={({ target: { value } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    p170: { ...this.props.data.p170, value },
                  })
                }
                value={this.props.data.p170.value}
              />
            </div>
            <div>
              p152:{' '}
              <input
                onChange={({ target: { value } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    p152: { ...this.props.data.p152, value },
                  })
                }
                value={this.props.data.p152.value}
              />
            </div>
            <div>
              p154_0:{' '}
              <input
                checked={this.props.data.p154_0}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({ ...this.props.data, p154_0: checked })
                }
                type="checkbox"
              />
            </div>
            <div>
              p154_1:{' '}
              <input
                checked={this.props.data.p154_1}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({ ...this.props.data, p154_1: checked })
                }
                type="checkbox"
              />
            </div>
            <div>
              p154_2:{' '}
              <input
                checked={this.props.data.p154_2}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({ ...this.props.data, p154_2: checked })
                }
                type="checkbox"
              />
            </div>
            <div>
              p156:{' '}
              <input
                onChange={({ target: { value } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    p156: { ...this.props.data.p156, value },
                  })
                }
                value={this.props.data.p156.value}
              />
            </div>
            <div>
              p292:{' '}
              <input
                onChange={({ target: { value } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    p292: { ...this.props.data.p292, value },
                  })
                }
                value={this.props.data.p292.value}
              />
            </div>
          </div>
          <Scheme />
        </div>
      )
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => {
  return {
    updateData: bindActionCreators(updateData, dispatch),
    updateDimensions: bindActionCreators(updateDimensions, dispatch),
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export { ConnectedApp as App }

App.propTypes = {
  parent: PropTypes.shape({
    clientHeight: PropTypes.number,
    clientWidth: PropTypes.number,
  }),
}

App.defaultProps = {
  parent: {
    clientHeight: 0,
    clientWidth: 0,
  },
}
