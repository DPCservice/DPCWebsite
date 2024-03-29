import PropTypes from 'prop-types';
import React from 'react';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';
import { StaticQuery, graphql } from 'gatsby';
import { Theme } from '../Theme';

import { Seo } from './Seo';

const Layout = ({ location, pageContext, seo, children, path }) => {
  return (
    <Theme>
      <Seo location={location} pageContext={pageContext} seo={seo} />
      <StaticQuery
        query={`${navigationQuery}`}
        render={(data) => {
          return (
            <>
              {location.pathname === '/' && (
                <Navigation
                  brandImg={data.prismic.allNavigations.edges[0].node.branding_logo}
                  navLinks={data.prismic.allNavigations.edges[0].node.navigation_links}
                />
              )}
              <main>{children}</main>
              <Footer
                branding={data.prismic.allFooters.edges[0].node.branding}
                proudlyMade={data.prismic.allFooters.edges[0].node.proudly_made}
                socialLinks={data.prismic.allFooters.edges[0].node.social_links}
              />
            </>
          );
        }}
      />
    </Theme>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
  path: PropTypes.string.isRequired,
  seo: PropTypes.shape({
    name: PropTypes.string,
    basepath: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    image: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  pageContext: {},
  seo: {},
};

export { Layout };

const navigationQuery = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            navigation_links {
              label
            }
            branding_logo
          }
        }
      }
      allFooters {
        edges {
          node {
            proudly_made
            branding
            _linkType
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
