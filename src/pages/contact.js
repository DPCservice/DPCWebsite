import React from 'react';
import { Layout } from '../components/Layout';
import { Contact } from '../components/Contact';

const seo = {
  title: 'Contact',
};

const ContactPage = (props) => {
  return <Layout seo={seo} {...props} simple >
      <Contact/>
  </Layout>;
};

export default ContactPage;
