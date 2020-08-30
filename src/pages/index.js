import React from 'react';
import { Container } from '../components/Container';
import { Site } from '../components/Site';
import { Hero } from '../components/Hero';
import { OurServices } from '../components/OurServices';
import sample from '../assets/Paper.mp4';
import styled from 'styled-components';
import { PhotoGallery } from '../components/Gallery';

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

  #background-video {
    height: 100%;
    width: 100vw;
    top: 0;
    padding: none;
    position: absolute;
    object-fit: cover;
    z-index: 0;
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
      {/* <video id="background-video" autoPlay loop muted preload='auto'>
        <source src={sample} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Hero />
    </HeroWrapper>

    <PageWrapper NoBottomPad NoTopPad>
      <OurServices />
    </PageWrapper>

    <PageWrapper>
      <PhotoGallery />
    </PageWrapper>
  </Site>
);

export default IndexPage;
