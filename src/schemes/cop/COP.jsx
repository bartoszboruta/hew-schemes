import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Clock, SvgContainer, ValuesContainer, ArrowLine } from '../../components'
import PropTypes from 'prop-types'

class COP extends Component {
  render() {
    return (
      <SvgContainer height={600} width={775}>
        <Clock left={735} />
        <ArrowLine direction={'bottom'} left={487} top={295} width={210} />
        <ArrowLine left={248} top={100} width={221} />
        <ArrowLine left={248} top={130} width={221} />

        <ValuesContainer
          color={'#ed9c28'}
          name={'Zasilanie elektryczne'}
          params={['p160', 'p168', 'p238']}
          textColor={'white'}
          top={40}
        />
        <ValuesContainer left={235} params={['p140', 'p148', 'p128']} top={0} />
        <ValuesContainer left={235} params={['p144', 'p152', 'p132']} top={140} />
        <ValuesContainer
          color={'#ed9c28'}
          left={467} //sum of 230 lasting for a period of time h_10 >= 10min, l_10 < 10min
          name={'Źródło ciepła'}
          params={['p200', 'p230_h_10', 'p230_l_10']}
          textColor={'white'}
          top={40}
        />
        <ValuesContainer
          left={562}
          params={['p184', 'p186', 'p186_p184', 'p192', 'p190']}
          top={215}
        />
        <ValuesContainer
          color={'#ed9c28'}
          left={467}
          name={'Odbiornik ciepła'}
          params={['p208']}
          textColor={'white'}
          top={400}
        />
      </SvgContainer>
    )
  }
}

const mapStateToProps = state => {
  const { data } = state
  return {
    data,
  }
}

const ConnectedCOP = connect(mapStateToProps)(COP)
export { ConnectedCOP as COP }

COP.propTypes = {
  data: PropTypes.object,
}

COP.defaultProps = {
  data: {},
}
