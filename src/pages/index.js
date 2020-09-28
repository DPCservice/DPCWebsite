import React from 'react';
import { Layout } from '../components/Layout';
import SliceZone from '../components/sliceZone';
import { Hero } from '../components/Hero';
import { graphql } from 'gatsby';

const seo = {
  title: 'Home',
};

const IndexPage = (props) => {
  return (
    <Layout seo={seo} {...props}>
      <Hero
        heroTitle={props.data.prismic.allHome_pages.edges[0].node.hero_title}
        heroDescription={props.data.prismic.allHome_pages.edges[0].node.hero_title_description}
        heroImg={props.data.prismic.allHome_pages.edges[0].node.hero_title_image}
      />
      <SliceZone body={props.data.prismic.allHome_pages.edges[0].node.body} />
    </Layout>
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
              ... on PRISMIC_Home_pageBodyAbout {
                type
                label
                primary {
                  section_title
                  meet_the_people
                  description_company_culture
                }
                fields {
                  avatar
                  avatar_name
                  position_title
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
