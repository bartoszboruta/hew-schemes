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
              PC1:{' '}
              <input
                checked={this.props.data.PC1.value}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    PC1: {
                      ...this.props.data.PC1,

                      value: checked,
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              PC2:{' '}
              <input
                checked={this.props.data.PC2.value}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    PC2: {
                      ...this.props.data.PC2,
                      value: checked,
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CWU visible:{' '}
              <input
                checked={this.props.data.CWU.visible}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CWU: { ...this.props.data.CWU, visible: checked },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CWU value:{' '}
              <input
                checked={this.props.data.CWU.value}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CWU: { ...this.props.data.CWU, value: checked },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CWU type(on - condenser, off - coil):{' '}
              <input
                checked={this.props.data.CWU.type.name === 'condenser' ? true : false}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CWU: {
                      ...this.props.data.CWU,
                      type: { ...this.props.data.CWU.type, name: checked ? 'condenser' : 'coil' },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CWU additional heater type(on - heater, off - automatic):{' '}
              <input
                checked={this.props.data.CWU.additionalHeater.name === 'heater' ? true : false}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CWU: {
                      ...this.props.data.CWU,
                      additionalHeater: {
                        ...this.props.data.CWU.additionalHeater,
                        name: checked ? 'heater' : 'automatic_boiler',
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CWU additional heater value:{' '}
              <input
                checked={this.props.data.CWU.additionalHeater.value}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CWU: {
                      ...this.props.data.CWU,
                      additionalHeater: {
                        ...this.props.data.CWU.additionalHeater,
                        value: checked,
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CWU circulation visible:{' '}
              <input
                checked={this.props.data.CWU.circulation.visible}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CWU: {
                      ...this.props.data.CWU,
                      circulation: {
                        ...this.props.data.CWU.circulation,
                        visible: checked,
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CWU circulation value:{' '}
              <input
                checked={this.props.data.CWU.circulation.value}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CWU: {
                      ...this.props.data.CWU,
                      circulation: {
                        ...this.props.data.CWU.circulation,
                        value: checked,
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>

            <div>
              CO visible:{' '}
              <input
                checked={this.props.data.CO.visible}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CO: { ...this.props.data.CO, visible: checked },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CO value:{' '}
              <input
                checked={this.props.data.CO.value}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CO: { ...this.props.data.CO, value: checked },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CO type(on - boiler, off - no-boiler):{' '}
              <input
                checked={this.props.data.CO.type.name === 'boiler' ? true : false}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CO: {
                      ...this.props.data.CO,
                      type: { ...this.props.data.CO.type, name: checked ? 'boiler' : 'noBoiler' },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CO additional heater type(on - heater, off - automatic):{' '}
              <input
                checked={this.props.data.CO.additionalHeater.name === 'heater' ? true : false}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CO: {
                      ...this.props.data.CO,
                      additionalHeater: {
                        ...this.props.data.CO.additionalHeater,
                        name: checked ? 'heater' : 'automatic_boiler',
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CO additional heater value:{' '}
              <input
                checked={this.props.data.CO.additionalHeater.value}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    CO: {
                      ...this.props.data.CO,
                      additionalHeater: {
                        ...this.props.data.CO.additionalHeater,
                        value: checked,
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CO circuit1 visible:{' '}
              <input
                checked={this.props.data.Output.circuit1.visible}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    Output: {
                      ...this.props.data.Output,
                      circuit1: {
                        ...this.props.data.Output.circuit1,
                        visible: checked,
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CO circuit1 value:{' '}
              <input
                checked={this.props.data.Output.circuit1.value}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    Output: {
                      ...this.props.data.Output,
                      circuit1: {
                        ...this.props.data.Output.circuit1,
                        value: checked,
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CO circuit2 visible:{' '}
              <input
                checked={this.props.data.Output.circuit2.visible}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    Output: {
                      ...this.props.data.Output,
                      circuit2: {
                        ...this.props.data.Output.circuit2,
                        visible: checked,
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CO circuit2 value:{' '}
              <input
                checked={this.props.data.Output.circuit2.value}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    Output: {
                      ...this.props.data.Output,
                      circuit2: {
                        ...this.props.data.Output.circuit2,
                        value: checked,
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CO circuit3 visible:{' '}
              <input
                checked={this.props.data.Output.circuit3.visible}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    Output: {
                      ...this.props.data.Output,
                      circuit3: {
                        ...this.props.data.Output.circuit3,
                        visible: checked,
                      },
                    },
                  })
                }
                type="checkbox"
              />
            </div>
            <div>
              CO circuit3 value:{' '}
              <input
                checked={this.props.data.Output.circuit3.value}
                onChange={({ target: { checked } }) =>
                  this.props.updateData({
                    ...this.props.data,
                    Output: {
                      ...this.props.data.Output,
                      circuit3: {
                        ...this.props.data.Output.circuit3,
                        value: checked,
                      },
                    },
                  })
                }
                type="checkbox"
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
