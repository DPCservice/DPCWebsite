import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { uid } from 'react-uid';
import styled from 'styled-components';
import { Container } from '../Container';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;

  .navIcon--active {
    span:nth-child(1) {
      transform: rotate(45deg) !important;
      top: -1px;
      left: 3px;
    }
    span:nth-child(2) {
      width: 0%;
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
      top: 19px;
      left: 3px;
    }
  }

  @media screen and (max-width: 1100px) {
    .nav--active {
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
      transform: none;
    }
  }
`;

const Logo = styled.a`
  display: block;
  color: white;
`;

const Nav = styled.nav`
  @media screen and (max-width: 1100px) {
    position: fixed;
    top: var(--height-headerDesktop);
    left: 0;
    right: 0;
    height: calc(100vh - var(--height-headerDesktop));
    background: var(--color-secondary);
    overflow-y: auto;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s opacity, 0s visibility 0.3s, 0.3s transform;
    transform: translateY(-10px);
    padding: 10px 60px 0;
  }
  @media screen and (max-width: 1100px) {
    ul {
      padding-bottom: 40px;
    }
  }
`;

const NavItems = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  margin-bottom: 0px;

  li:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1200px) {
    li {
      margin-right: 25px;
    }
  }
  @media screen and (max-width: 1100px) {
    display: block;

    li {
      margin: 0 0 20px;
    }
    li:last-child {
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 600px) {
    li:last-child a {
      height: 42px;
      line-height: 38px;
      padding: 0 20px;
    }
  }
`;

const NavItem = styled.li`
  position: relative;
  margin: 0 40px 0 0;
  padding: 0;
`;

const NavLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  position: relative;
  padding-bottom: 4px;
  text-decoration: none;
  letter-spacing: -0.04em;

  :before {
    content: '';
    position: absolute;
    left: 0;
    height: 1px;
    bottom: -1px;
    right: 100%;
    background: #fff;
    opacity: 0;
    transition: 0.3s right, 0.3s opacity, 0.3s background;
  }
  :hover:before {
    right: 0;
    opacity: 1;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Navbutton = styled.a`
  cursor: pointer;
  flex-shrink: 0;
  text-decoration: none;
  background: #fff;
  border-radius: 40px;
  color: black;
  display: inline-block;
  padding: 0 30px;
  height: 51px;
  line-height: 49px;
  font-weight: 700;
  letter-spacing: -0.036em;
  font-size: inherit;
  transition: 0.3s background, 0.3s color, 0.3s border, 0.3s opacity;

  :hover {
    background: green;
    color: white;
  }
`;

const NavIcon = styled.a`
  display: none;
  float: right;
  width: 28px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 10;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #fff;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
    border-radius: 2px;
  }

  span:nth-child(1) {
    top: 0;
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: 9px;
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: 18px;
    transform-origin: left center;
  }

  :active,
  :hover {
    outline: 0;
  }

  @media screen and (max-width: 1100px) {
    display: block;
  }
`;

const Item = styled(Link).withConfig({ shouldForwardProp: (prop) => !['isActive'].includes(prop) })`
  padding: 16px 8px;
  color: #fff;
  font-weight: 500;
  line-height: 24px;
  opacity: ${(p) => (p.isActive ? '1' : '0.6')};
  text-decoration: none;

  :hover {
    opacity: 1;
    text-decoration: none;
  }

  @media (max-width: 648px) {
    padding: 8px;
  }
`;

const Navigation = (props) => {
  const [isActive, setIsActive] = useState(false);
  console.log(props);
  return (
    <Wrapper>
      <Logo to="/">Logo</Logo>
      <NavIcon onClick={() => setIsActive(!isActive)} className={isActive ? 'navIcon--active' : null}>
        <span></span>
        <span></span>
        <span></span>
      </NavIcon>
      <Nav className={isActive ? 'nav--active' : null}>
        <NavItems>
          <NavItem>
            <NavLink href="/" class="link">
              Why Choose Us?
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">How We Can Help</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Our Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">About</NavLink>
          </NavItem>
          <NavItem>
            <Navbutton>Get A Free Quote</Navbutton>
          </NavItem>
          {/* {items.map(({ label, to, href }) =>
              to ? (
                <Item key={uid(label)} to={to} isActive={to === path}>
                  {label}
                </Item>
              ) : (
                <Item key={uid(label)} as="a" href={href}>
                  {label}
                </Item>
              ), 
            )}*/}
        </NavItems>
      </Nav>
    </Wrapper>
  );
};

export { Navigation };
