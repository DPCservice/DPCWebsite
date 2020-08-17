import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';
import { Theme } from '../Theme';
import { Seo } from './Seo';

const Main = styled.div`
  margin: 32px 0;
  min-height: calc(100vh - 56px - 64px - 97px);
`;

const MainHeader = styled.header`
    height: var(--height-headerDesktop);
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    background: var(--color-secondary);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Site = ({ location, pageContext, path, seo, children }) => (
  <Theme>
    <MainHeader>
    <Seo location={location} pageContext={pageContext} seo={seo} />
    <Navigation path={path} />
    </MainHeader>
    <Main>{children}</Main>
    <Footer />
  </Theme>
);

Site.propTypes = {
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

Site.defaultProps = {
  pageContext: {},
  seo: {},
};

export { Site };
