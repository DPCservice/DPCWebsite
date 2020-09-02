import React from 'react';
import styled from 'styled-components';
import { FaArrowCircleRight } from 'react-icons/fa';
import { RichText } from 'prismic-reactjs';

const Inner = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 10;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

const Columns = styled.div`
  display: flex;
  margin-bottom: 28px;
  flex-wrap: wrap;
  margin: var(--spacingSmall) 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 600px) {
    margin: var(--spacingSmallMobile) 0;
  }
  @media screen and (max-width: 1120px) {
    display: block;
  }
  @media (min-width: 782px) {
    flex-wrap: nowrap;
  }
`;

const Column = styled.div`
  flex-grow: 1;
  min-width: 0;
  word-break: break-word;
  overflow-wrap: break-word;

  .has-large-font-size {
    font-size: 20px;
    margin-bottom: 18px;
  }

  :not(:last-child) {
    margin-right: 10%;
  }

  :not(:first-child) {
    margin-left: 0;
  }

  :first-child {
    margin-left: 80px;
    max-width: 600px;
    flex-basis: 41%;
    @media screen and (max-width: 1120px) {
      margin-left: 0;
      width: 100% !important;
      margin-bottom: var(--spacingSmall);
    }
    @media (min-width: 782px) {
    flex-grow: 0;
    }
    @media screen and (max-width: 600px) {
      margin-bottom: var(--spacingSmallMobile);
    }
    @media (max-width: 599px) {
      flex-basis: 100% !important;
    }
  }

  @media (min-width: 782px) {
    flex-basis: 0;
    flex-grow: 1;
    :not(:first-child) {
      margin-left: 32px;
    }
  }

  @media screen and (max-width: 1120px) {
    :not(:last-child) {
      margin-right: 0;
    }
  }
  @media (max-width: 781px) and (min-width: 600px) {
    flex-basis: calc(50% - 16px) !important;
    flex-grow: 0;
  }

  @media screen and (max-width: 600px) {
    h1:first-child,
    h2:first-child {
      margin-top: -9px;
    }

    .has-large-font-size {
      font-size: 17px;
      line-height: 1.3;
    }
  }
`;

const Buttons = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  :last-child {
    margin-bottom: 0;
  }

  .button {
    display: inline-block;
    margin: 0;
    align-items: center;

    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-left: 30px;
    }
  }

  .wp-block-button__link {
    flex-shrink: 0;
    text-decoration: none;
    background: var(--color-primary);
    border-radius: 40px;
    color: #fff;
    display: inline-block;
    padding: 0 30px;
    height: 51px;
    line-height: 49px;
    font-weight: 700;
    letter-spacing: -0.036em;
    font-size: inherit;
    transition: 0.3s background, 0.3s color, 0.3s border, 0.3s opacity;

    :hover {
      background: #fff;
      color: black;
    }
  }

  .secondary-button {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 600px) {
      margin-top: 10px;
      margin-left: 0;
    }

    a {
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
      line-height: 1.3;
      background: 0 0;
      padding: 0;
      letter-spacing: -0.02em;
      font-weight: 600;
      transition: 0.3s background, 0.3s color, 0.3s border, 0.3s opacity;

      :hover {
        color: var(--color-primary);
      }
    }

    svg {
      height: 34px;
      width: 34px;
      padding-left: 8px;
    }
  }
`;

const Figure = styled.figure`
  img {
    display: block;
    max-width: 100%;
    height: auto;
    border: 0;
    width: 1024px;
  }
`;

const Hero = ({ heroTitle, heroDescription, heroImg }) => {
  // console.log(props);
  return (
    <Inner>
      <Columns>
        <Column>
          <RichText render={heroTitle} />
          <div className="has-large-font-size">
            <RichText render={heroDescription} />
          </div>
          <Buttons>
            <div className="button">
              <a href="/" className="wp-block-button__link">
                Get your Free Quote
              </a>
            </div>
            <div className="button ">
              <div className="secondary-button">
                <a href="/">
                  <span>View Our Work</span>
                  <FaArrowCircleRight />
                </a>
              </div>
            </div>
          </Buttons>
        </Column>
        <Column>
          <Figure>
            <img src={heroImg.url} alt={heroImg.alt} />
          </Figure>
        </Column>
      </Columns>
    </Inner>
  );
};

export { Hero };
