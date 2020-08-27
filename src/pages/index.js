import React from 'react';
import { Container } from '../components/Container';
import { Site } from '../components/Site';
import { Hero } from '../components/Hero';
import { OurServices } from '../components/OurServices';
import styled from 'styled-components';

const seo = {
  title: 'Home',
};

const HeroWrapper = styled.div`
  background: var(--color-secondary);
  color: #fff;
  padding: var(--spacing) 0;
  position: relative;
  padding-bottom: calc(var(--spacing) - var(--overlapHeight));

  @media screen and (max-width: 600px) {
    padding-bottom: calc(var(--spacingMobile) - var(--overlapHeightMobile));
    padding: var(--spacingMobile) 0;
  }
`;

const PageWrapper = styled.div`
  padding: var(--spacing) 0;
  position: relative;
  padding-bottom: ${(props) => (props.NoBottomPad ? '0' : null)};
  padding-top: ${(props) => (props.NoTopPad ? '0' : null)};

  @media screen and (max-width: 600px) {
    padding: var(--spacingMobile) 0;
  }
`;

const IndexPage = (props) => (
  <Site seo={seo} {...props}>
    <HeroWrapper>
      <Hero />
    </HeroWrapper>

    <PageWrapper NoBottomPad NoTopPad>
      <OurServices />
    </PageWrapper>
  </Site>
);

export default IndexPage;
