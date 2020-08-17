import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

const Wrapper = styled('footer')`
  background: var(--color-secondary);
  color: #9b9b9b;
  padding: 29px 0;
  border-top: 1px solid #606060;
  @media screen and (max-width: 600px) {
    padding: 17px 0;
  }
`;

const Inner = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  position: relative;
  width: 100%;
  max-width: 1600px;
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  @media screen and (max-width: 1044px) {
    display: block;
  }
  @media screen and (max-width: 600px) {
  }
`;

const Left = styled.p`
  margin: 0 auto 0 0;
  @media screen and (max-width: 1044px) {
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Center = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: center;
  @media screen and (max-width: 1044px) {
    position: static;
    transform: none;
    margin: 20px 0 25px;
  }
  @media screen and (max-width: 600px) {
    margin: 0 0 14px;
    font-size: 15px;
    display: block;
    text-align: center;
  }
`;

const Right = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0 0 0 auto !important;
  padding: 0;

  li:last-child {
    margin-right: 0;
  }

  li {
    margin: 0 10px 0 0;
    padding: 0;
  }

  a {
    transition: 0.3s opacity;
  }

  svg:hover {
    opacity: 0.8;
  }

  svg {
    fill: #939598;
  }

  svg:not(:root) {
    overflow: hidden;
  }
  @media screen and (max-width: 1044px) {
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <Left>
          <span>© {new Date().getFullYear()} Design Prototype Consult LLC</span>
        </Left>
        <Center>Proudly located in Corpus Christi, Texas</Center>
        <Right>
          <li>
            <a href="" target="_blank">
              <svg width="37px" height="37px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="soc-1"
                  d="M21.86,18.25H19.34v9.11H15.6V18.25H13.82V15H15.6V12.94a3.54,3.54,0,0,1,3.22-3.82h3.32v3.13h-2a.78.78,0,0,0-.8.74.66.66,0,0,0,0,.14V15H22.2ZM18,0A18.12,18.12,0,0,0,0,18.24,18.12,18.12,0,0,0,18,36.52h0A18.12,18.12,0,0,0,36,18.28v0A18.12,18.12,0,0,0,18,0Z"
                  transform="translate(0)"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <svg
                width="37px"
                height="37px"
                viewBox="0 0 38 38"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  class="soc-1"
                  d="M22.7,10.82l0,0H14.35a4.05,4.05,0,0,0-3,1.09,4.2,4.2,0,0,0-1.08,3v8.44a4.17,4.17,0,0,0,1.13,3.06,4.14,4.14,0,0,0,3,1.09h8.29a3.79,3.79,0,0,0,4.1-3.45,3.53,3.53,0,0,0,0-.65V14.94a4.14,4.14,0,0,0-1.09-3A4,4,0,0,0,22.7,10.82ZM18.55,24.39A5.27,5.27,0,1,1,23.74,19v.09A5.23,5.23,0,0,1,18.55,24.39Zm5.36-9.46h0a1.2,1.2,0,1,1,1.18-1.22v0A1.19,1.19,0,0,1,23.91,14.93Zm-2,4.2v0a3.38,3.38,0,1,1-3.36-3.4h0A3.35,3.35,0,0,1,21.91,19.13ZM37.43,19A18.84,18.84,0,0,0,18.71,0h0A18.83,18.83,0,0,0,0,19H0A18.83,18.83,0,0,0,18.66,38h.05A18.84,18.84,0,0,0,37.43,19ZM23.37,29.43a4.33,4.33,0,0,1-.72,0H14.4a5.87,5.87,0,0,1-4.25-1.62,6,6,0,0,1-1.7-4.4V14.94a5.62,5.62,0,0,1,5.24-6,4.85,4.85,0,0,1,.66,0h8.39A5.82,5.82,0,0,1,27,10.66,6,6,0,0,1,28.65,15v8.46A5.65,5.65,0,0,1,23.37,29.43Z"
                  transform="translate(0 0)"
                ></path>
              </svg>
            </a>
          </li>
        </Right>
      </Inner>
    </Wrapper>
  );
};

export { Footer };
