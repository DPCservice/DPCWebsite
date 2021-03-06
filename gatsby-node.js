/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
var fs = require("fs")
var dir = "./.cache/caches/@prismicio/gatsby-source-prismic-graphql"



exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}


exports.onCreateWebpackConfig = ({actions }) => {
  
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
        //   '@config': path.resolve(__dirname, 'src/config'),
          '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
        //   '@images': path.resolve(__dirname, 'src/images'),
        //   '@pages': path.resolve(__dirname, 'src/pages'),
        //   '@styles': path.resolve(__dirname, 'src/styles'),
        //   '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    });
  };