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
      <Contact socialLinks={props.data.prismic.allFooters.edges[0].node.social_links} />
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
      allFooters {
        edges {
          node {
            social_links {
              link {
                ... on PRISMIC__ExternalLink {
                  url
                  _linkType
                }
              }
            }
          }
        }
      }
    }
  }
`;

