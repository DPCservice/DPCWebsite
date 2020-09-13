import React from 'react';
import { Site } from '../components/Site';
import { Hero } from '../components/Hero';
import { OurServices } from '../components/OurServices';
import { TheTeam } from '../components/TheTeam';
import { PhotoGallery } from '../components/Gallery';
import { graphql } from 'gatsby';

const seo = {
  title: 'Home',
};

const IndexPage = (props) => {
  console.log(props);

  return (
    <Site seo={seo} {...props}>
      {/* <video id="background-video" autoPlay loop muted preload='auto'>
        <source src={sample} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Hero
        heroTitle={props.data.prismic.allHome_pages.edges[0].node.hero_title}
        heroDescription={props.data.prismic.allHome_pages.edges[0].node.hero_title_description}
        heroImg={props.data.prismic.allHome_pages.edges[0].node.hero_title_image}
      />
      <OurServices body={props.data.prismic.allHome_pages.edges[0].node.body[0]} />
      <PhotoGallery Images={props.data.prismic.allHome_pages.edges[0].node.body[1]} />
      <TheTeam />
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
