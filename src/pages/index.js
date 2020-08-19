import React from 'react';
import { Container } from '../components/Container';
import { Site } from '../components/Site';
import { Hero } from '../components/Hero';
import styled from 'styled-components';

const seo = {
  title: 'Home',
};

const HeroWrapper = styled.div`
  background: var(--color-secondary);
  color: #fff;
  padding-bottom: calc(var(--spacing) - var(--overlapHeight));
  padding: var(--spacing) 0;
  position: relative;

  @media screen and (max-width: 600px) {
    padding-bottom: calc(var(--spacingMobile) - var(--overlapHeightMobile));
    padding: var(--spacingMobile) 0;
  }
`;

const IndexPage = (props) => (
  <Site seo={seo} {...props}>
    <HeroWrapper>
      <Hero />
    </HeroWrapper>
  </Site>
);

export default IndexPage;
