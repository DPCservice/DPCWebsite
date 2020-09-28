import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BaseCSS } from './BaseCSS';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const system = {};

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={system}>
      <>
        <ToastContainer />
        <Normalize />
        <BaseCSS />
        {children}
      </>
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Theme };
