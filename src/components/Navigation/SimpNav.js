import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1600px;
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Logo = styled.div`
 margin-top:16px;
`;

const MainHeader = styled.header`
  height: var(--height-headerDesktop);
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    height: var(--height-headerMobile);
  }
`;

const SimpNav = ({ brandImg }) => {
  return (
    <MainHeader>
      <Wrapper>
        <Logo>
          <a href="/">
            <img src={brandImg.url} alt={brandImg.alt} />
          </a>
        </Logo>
      </Wrapper>
    </MainHeader>
  );
};

export { SimpNav };
