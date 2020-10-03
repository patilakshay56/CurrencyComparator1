import {
  GET_CURRENCIES,
  GET_CURRENCIES_ACCORDING_TO_COUNTRY,
  GET_CURRENCIES_START,
  CLEAR_CURRENCIES,
  GET_DEFAULT_CURRENCIES_ERROR,
} from '../actions/types';

const initialState = {
  currencies: [],
  selectedCurreniesByCountry: {},
  isLoading: false,
  isError: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENCIES:
      return {
        ...state,
        currencies: payload,
        isLoading: false,
      };
    case GET_CURRENCIES_ACCORDING_TO_COUNTRY:
      return {
        ...state,
        selectedCurreniesByCountry: payload,
        isLoading: false,
      };
    case GET_CURRENCIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR_CURRENCIES:
      return {
        ...state,
        isLoading: false,
        selectedCurreniesByCountry: {},
      };
    case GET_DEFAULT_CURRENCIES_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
