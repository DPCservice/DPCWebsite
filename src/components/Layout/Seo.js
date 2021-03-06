import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';


const Seo = ({ location: { pathname }, pageContext, seo }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
          basepath
          description
          keywords
          type
          image
        }
      }
    }
  `);

  const { name, basepath, title, description, keywords, type, image } = {
    ...siteMetadata,
    ...seo,
    ...pageContext.frontmatter,
  };

  const url = `${basepath}${pathname}`;
  // console.log(name, basepath, title, description, keywords, type, image);


  return (
    <Helmet titleTemplate={`%s • ${name}`} defaultTitle={name}>
      <html lang="en" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join(', ')} />

      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      
    </Helmet>
  );
};

Seo.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
  seo: PropTypes.shape({
    name: PropTypes.string,
    basepath: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    image: PropTypes.string,
  }),
};

Seo.defaultProps = {
  pageContext: {},
  seo: {},
};

export { Seo };