import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../NavigationBar/NavigationBar';
import PonderaForm from '../Pondera/PonderaForm';
import Page from '../Layout/Page';

const Pondera = ({ logOut, onSubmit }) => (
  <Page>
    <NavigationBar pondera logOut={logOut} />
    <PonderaForm onSubmit={onSubmit} />
  </Page>
);


Pondera.propTypes = {
  logOut: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Pondera;