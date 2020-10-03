import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ currency, currencyRate }) => {
  return (
    <li className='currency-line'>
      <strong>
        <span className='currency'>{currency} : </span>
      </strong>
      <strong>
        <span className='currency-rate'> {currencyRate}</span>
      </strong>
    </li>
  );
};

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
  currencyRate: PropTypes.string.isRequired,
};

export default Currency;
