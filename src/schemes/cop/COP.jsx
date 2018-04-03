import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Clock, SvgContainer, ValuesContainer, ArrowLine } from '../../components';
import PropTypes from 'prop-types';

class COP extends Component {
  render() {
    return <SvgContainer width={775} height={600} >
      <Clock left={735} />
      <ArrowLine width={210} direction={'bottom'} left={487} top={295} />
      <ArrowLine width={221} left={248} top={100} />
      <ArrowLine width={221} left={248} top={130} />

      <ValuesContainer
        name={'Zasilanie elektryczne'}
        params={['p160','p168','p238']}
        color={'#ed9c28'}
        textColor={'white'}
        top={40}
      />
      <ValuesContainer
        params={['p140','p148','p128']}
        left={235}
        top={0}
      />
      <ValuesContainer
        params={['p144','p152','p132']}
        left={235}
        top={140}
      />
      <ValuesContainer
        name={'Źródło ciepła'}
        params={['p200','p230_h_10','p230_l_10']} //sum of 230 lasting for a period of time h_10 >= 10min, l_10 < 10min
        color={'#ed9c28'}
        textColor={'white'}
        left={467}
        top={40}
      />
      <ValuesContainer
        params={['p184','p186','p186_p184','p192','p190']}
        left={562}
        top={215}
      />
      <ValuesContainer
        name={'Odbiornik ciepła'}
        params={['p208']}
        color={'#ed9c28'}
        textColor={'white'}
        left={467}
        top={400}
      />
    </SvgContainer>
  }
}

const mapStateToProps = (state) => {
  const { data } = state;
  return {
    data,
  };
};

const ConnectedCOP = connect(mapStateToProps)(COP);
export { ConnectedCOP as COP }

COP.propTypes = {
  data: PropTypes.object,
};

COP.defaultProps = {
  data: {}
};
