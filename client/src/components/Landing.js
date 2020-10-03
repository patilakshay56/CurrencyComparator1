import React from 'react';
import PropTypes from 'prop-types';
import CurrencySeletion from './CurrencySelection';
import { connect } from 'react-redux';
import Currencies from './Currencies';

const Landing = ({ selectedCurrencies, loading }) => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <CurrencySeletion />
          {((selectedCurrencies &&
            Object.keys(selectedCurrencies).length > 0) ||
            loading) && (
            <Currencies selectedCurreniesByCountry={selectedCurrencies} />
          )}
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  selectedCurrencies: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  selectedCurrencies: state.currency.selectedCurreniesByCountry,
  loading: state.currency.isLoading,
});

export default connect(mapStateToProps, null)(Landing);
