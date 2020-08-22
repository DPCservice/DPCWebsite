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
    font-family: 'Mulish', sans-serif; ;
    background: #fff;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    color: var(--color-secondary);
    position: relative;
    line-height: 1.6;
    padding-top: var(--height-headerDesktop);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    @media screen and (max-width: 600px) {
      font-size: 15px;
      padding-top: var(--height-headerMobile);
      line-height: 1.4;
    }
  }

  p, h1, h2, h3, h4, h5, h6, ul {
    margin: 0;
  }
  h3:last-child, h4:last-child, h5:last-child, h6:last-child, p:last-child {
    margin-bottom: 0;
  }

  h3 {
    font-size: 44px;
    line-height: 1.15;
    font-weight: 700;
    letter-spacing: -.015em;
    margin: 78px 0 30px;
  }
  h4 {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -.015em;
    margin: 75px 0 20px;
 }

  h5 {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -.015em;
    margin: 55px 0 14px;
    line-height: 1.3;
  }

  h1, h2 {
    font-size: 60px;
    line-height: 1.15;
    letter-spacing: -.015em;
    margin: 90px 0 54px;
    @media screen and (max-width: 600px){
      font-size: 34px;
      margin: 30px 0 25px;
    }
  }
  h1:first-child, h2:first-child {
    margin-top: -17px;
  }

  p {
    margin-bottom: 10px;
    max-width: 1020px;
    margin-left: auto;
    margin-right: auto;
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
