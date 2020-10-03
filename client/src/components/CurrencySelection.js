import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  loadCurrencies,
  loadCurrenciesAccordingToCountry,
  hideCurrencyContainer,
} from '../actions/currency';

const CurrencySelection = ({
  loadCurrencies,
  currencies,
  loadCurrenciesAccordingToCountry,
  hideCurrencyContainer,
  isError,
}) => {
  useEffect(() => {
    loadCurrencies();
  }, [loadCurrencies]);

  const onCurrencySelectionChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === '0') {
      hideCurrencyContainer();
      return;
    }
    let startIndex = e.target.value.indexOf('(');
    loadCurrenciesAccordingToCountry(
      e.target.value.slice(startIndex + 1, e.target.value.length - 1)
    );
  };

  let options =
    currencies != null
      ? currencies.map((el, key) => {
          return (
            <option key={el._id} value={el.currencyType}>
              {el.currencyType}
            </option>
          );
        })
      : null;

  return (
    <div>
      {!isError ? (
        <select
          className='currency-select'
          onChange={(e) => onCurrencySelectionChange(e)}
        >
          <option value='0'>Please select currency</option>
          {options}
        </select>
      ) : (
        <h1 className='error'>Something went wrong please try again...</h1>
      )}
    </div>
  );
};

CurrencySelection.propTypes = {
  loadCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.array.isRequired,
  loadCurrenciesAccordingToCountry: PropTypes.func.isRequired,
  hideCurrencyContainer: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.currency.currencies,
  isError: state.currency.isError,
});

export default connect(mapStateToProps, {
  loadCurrencies,
  loadCurrenciesAccordingToCountry,
  hideCurrencyContainer,
})(CurrencySelection);
