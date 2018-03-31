import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Clock, SvgContainer, LongReadField, ValuesContainer, ArrowLine } from '../../components';
import PropTypes from 'prop-types';

class COP extends Component {
  render() {
    return <SvgContainer height={775} width={600} >
      <Clock left={735} />
      <ArrowLine width={210} direction={'bottom'} left={487} top={295} />
      <ArrowLine width={221} left={248} top={100} />
      <ArrowLine width={221} left={248} top={130} />

      <ValuesContainer name={'Zasilanie elektryczne'} top={40}>
        <LongReadField param={'p160'} left={50} top={40}/>
        <LongReadField param={'p168'} left={50} top={70}/>
        <LongReadField param={'p238'} left={50} top={100}/>
      </ValuesContainer>

        <LongReadField param={'p140'} left={285} top={0}/>
        <LongReadField param={'p148'} left={285} top={30}/>
        <LongReadField param={'p128'} left={285} top={60}/>

        <LongReadField param={'p144'} left={285} top={150}/>
        <LongReadField param={'p152'} left={285} top={180}/>
        <LongReadField param={'p132'} left={285} top={210}/>

      <ValuesContainer name={'Źródło ciepła'} left={467} top={40}>
        <LongReadField param={'p200'} left={50} top={40}/>
        <LongReadField param={'p230'} left={50} top={70}/>
        <LongReadField param={'p232'} left={50} top={100}/>
      </ValuesContainer>

      <LongReadField param={'p184'} left={612} top={225}/>
      <LongReadField param={'p186'} left={612} top={255}/>
      <LongReadField param={'p186_p184'} left={612} top={285}/>
      <LongReadField param={'p192'} left={612} top={315}/>
      <LongReadField param={'p190'} left={612} top={345}/>

      <ValuesContainer name={'Odbiornik ciepła'} height={90} left={467} top={400}>
        <LongReadField param={'p208'} left={50} top={40}/>
      </ValuesContainer>
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