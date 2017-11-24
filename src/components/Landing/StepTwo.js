import React from 'react';
import PropTypes from 'prop-types';
import RegisterFormTwo from './RegisterFormTwo';
import Page from '../Layout/Page';
import NavigationBar from '../NavigationBar/NavigationBar';

const StepTwo = ({
  goBack, isLogged, regions, onSubmit,
}) => (
  <Page>
    <NavigationBar back onBackClick={goBack} />
    <RegisterFormTwo
      onSubmit={onSubmit}
      triggerAnimation={isLogged}
      regions={regions}
    />
  </Page>
);

StepTwo.defaultProps = {
  regions: null,
};

StepTwo.propTypes = {
  goBack: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

export default StepTwo;
