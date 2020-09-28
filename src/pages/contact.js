import React from 'react';
import { Layout } from '../components/Layout';
import { Contact } from '../components/Contact';
import {SimpNav} from '../components/Navigation/SimpNav'
import { graphql } from 'gatsby';

const seo = {
  title: 'Contact',
};

const ContactPage = (props) => {
  return (
    <Layout seo={seo} {...props}>
        <SimpNav
          brandImg={props.data.prismic.allNavigations.edges[0].node.branding_logo}
        />
      <Contact />
    </Layout>
  );
};

export default ContactPage;

export const SimplNavQuery = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            branding_logo
          }
        }
      }
    }
  }
`;

