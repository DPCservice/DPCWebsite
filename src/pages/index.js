import React from 'react';
import { Container } from '../components/Container';
import { Site } from '../components/Site';
import { Hero } from '../components/Hero';
import { OurServices } from '../components/OurServices';
import {TheTeam} from '../components/TheTeam'
// import sample from '../assets/Paper.mp4';
import styled from 'styled-components';
import { PhotoGallery } from '../components/Gallery';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';

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

const IndexPage = (props) => {
  console.log(props);

  return (
    <Site seo={seo} {...props}>
      <HeroWrapper>
        {/* <video id="background-video" autoPlay loop muted preload='auto'>
        <source src={sample} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        <Hero
          heroTitle={props.data.prismic.allHome_pages.edges[0].node.hero_title}
          heroDescription={props.data.prismic.allHome_pages.edges[0].node.hero_title_description}
          heroImg={props.data.prismic.allHome_pages.edges[0].node.hero_title_image}
        />
      </HeroWrapper>
      <PageWrapper NoBottomPad NoTopPad>
        <OurServices 
        body ={props.data.prismic.allHome_pages.edges[0].node.body[0]}/>
      </PageWrapper>
      <PageWrapper>
        <PhotoGallery Images ={props.data.prismic.allHome_pages.edges[0].node.body[1]}/>
      </PageWrapper>
      <PageWrapper>
        <TheTeam />
      </PageWrapper>
    </Site>
  );
};

export default IndexPage;

export const query = graphql`
  {
    prismic {
      allHome_pages {
        edges {
          node {
            body {
              ... on PRISMIC_Home_pageBodyService {
                type
                primary {
                  service_section_header
                  service_cta_phrase
                  service_cta_image
                }
                fields {
                  service_about
                  service_illustration
                  service_title
                }
              }
              ... on PRISMIC_Home_pageBodyPhoto_galllery_ {
                type
                primary {
                  gallery_title
                }
                fields {
                  work_photos
                }
              }
            }
            hero_title
            hero_title_image
            hero_title_description
          }
        }
      }
    }
  }
`;
