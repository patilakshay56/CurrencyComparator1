import {
  GET_CURRENCIES,
  GET_CURRENCIES_ACCORDING_TO_COUNTRY,
  GET_CURRENCIES_START,
  CLEAR_CURRENCIES,
  GET_DEFAULT_CURRENCIES_ERROR,
} from './types';
import axios from 'axios';

export const loadCurrencies = () => async (dispatch) => {
  try {
    let currencies = await axios.get('api/currencies');
    console.log(currencies);

    dispatch({
      type: GET_CURRENCIES,
      payload: currencies.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DEFAULT_CURRENCIES_ERROR,
    });
  }
};

export const loadCurrenciesAccordingToCountry = (currencyType) => async (
  dispatch
) => {
  try {
    dispatch({
      type: GET_CURRENCIES_START,
    });
    let currencies = await axios.get(
      `api/currencies/specific?currencyType=${currencyType}`
    );
    console.log(currencies.data);

    dispatch({
      type: GET_CURRENCIES_ACCORDING_TO_COUNTRY,
      payload: currencies.data.rates,
    });
  } catch (error) {}
};

export const hideCurrencyContainer = () => {
  return {
    type: CLEAR_CURRENCIES,
  };
};
