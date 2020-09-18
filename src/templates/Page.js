import PropTypes from 'prop-types';
import React from 'react';
import { Container } from '../components/Container';
import { Layout } from '../components/Site';

const Page = ({ children, ...other }) => {
  return (
    <Layout {...other}>
      <Container>{children}</Container>
    </Layout>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
