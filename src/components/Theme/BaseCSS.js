import { createGlobalStyle } from 'styled-components';

export const BaseCSS = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --color-primary: #0DC5A0;
    --color-secondary: #333235;
    --height-headerDesktop: 122px;
    --height-headerMobile: 70px;
    --spacing: 117px;
    --spacingMobile: 54px;
    --spacingSmall: 80px;
    --spacingSmallTablet: 60px;
    --spacingSmallMobile: 40px;
    --overlapHeight: -90px;
    --overlapHeightMobile: -30px;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
  }

  body {
    background-color: #EFF1F3;
    color: #292828;
    font-weight:500;
    font-family: 'Mulish', sans-serif; ;
    font-size:16px;
    margin: 0;
    position: relative;
    line-height: 1.6;
    @media screen and (max-width: 600px) {
      font-size: 15px;
      padding-top: var(--height-headerMobile);
      line-height: 1.4;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 16px 0;
  }

  h2 {
    margin-top: 32px;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.13);
  }

  p {
    margin-bottom: 16px;
  }

  a {
    :hover,
    :focus {}
  }

  ul, ol {
    margin-bottom: 16px;
    padding-left: 16px;

    ul, ol {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }

  pre {
    max-width: 100%;
    overflow: auto;
  }

  blockquote {
    padding-left: 16px;
    margin-left: 8px;
    border-left: 4px solid rgba(0, 0, 0, 0.13)
  }
  
`;
