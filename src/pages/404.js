import React from 'react';

import { Layout } from '../components/Layout';

const seo = {
  title: 'PageNotFound',
};

const NotFoundPage = (props) => (
  <Layout seo={seo} {...props}>
    <h1>404 Page Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
