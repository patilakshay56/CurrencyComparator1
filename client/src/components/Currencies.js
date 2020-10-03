import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';
import { connect } from 'react-redux';
import Spinner from './Spinner';

const Currencies = ({ selectedCurreniesByCountry, loading }) => {
  let currencies = Object.keys(selectedCurreniesByCountry).map((el, key) => {
    return (
      <Currency
        currency={el}
        currencyRate={selectedCurreniesByCountry[el]}
        key={key}
      />
    );
  });

  if (loading) {
    currencies = <Spinner />;
  }

  return <div className='currencies'>{currencies}</div>;
};

Currencies.propTypes = {
  selectedCurreniesByCountry: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.currency.isLoading,
});

export default connect(mapStateToProps, null)(Currencies);
