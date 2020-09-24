import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { uid } from 'react-uid';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

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

    img {
      width: 190px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px;

    img {
      width: 132px;
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
  @media screen and (max-width: 600px) {
    padding: 30px 20px 0;
    top: var(--height-headerMobile);
    height: calc(100vh - var(--height-headerMobile));
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

  .NavLink {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    position: relative;
    padding-bottom: 4px;
    text-decoration: none;
    letter-spacing: -0.04em;
    cursor: pointer;

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
  }
  .active {
    :before {
      right: 0;
      opacity: 1;
    }
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
    background: var(--color-primary);
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

const MainHeader = styled.header`
  height: var(--height-headerDesktop);
  position: fixed;
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

const Navigation = ({ brandImg, navLinks, path }) => {
  console.log(path);
  const [isActive, setIsActive] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <MainHeader className={path === '/contact/' ? 'navStatic' : null}>
      <Wrapper>
        <div>
          <a href="/">
            <img src={brandImg.url} alt={brandImg.alt} />
          </a>
        </div>
        <NavIcon onClick={() => setIsActive(!isActive)} className={isActive ? 'navIcon--active' : null}>
          <div className={path === '/contact/' ? 'linksNone' : null}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </NavIcon>
        <Nav className={isActive ? 'nav--active' : null}>
          <NavItems className={path === '/contact/' ? 'linksNone' : null}>
            <NavItem>
              <Link
                onClick={() => setIsActive(!isActive)}
                activeClass="active"
                className="NavLink"
                to="hero"
                smooth={true}
                spy={true}
                offset={-200}
                duration={500}
              >
                Why Choose Us?
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setIsActive(!isActive)}
                className="NavLink"
                activeClass="active"
                to="our_services"
                smooth={true}
                spy={true}
                offset={-150}
                duration={500}
              >
                How We Can Help
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setIsActive(!isActive)}
                activeClass="active"
                className="NavLink"
                to="our_work"
                smooth={true}
                spy={true}
                offset={-150}
                duration={500}
              >
                Our Work
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setIsActive(!isActive)}
                activeClass="active"
                className="NavLink"
                to="about"
                smooth={true}
                spy={true}
                offset={-150}
                duration={500}
              >
                About
              </Link>
            </NavItem>
            <NavItem>
              <Navbutton href="/contact">Get A Free Quote</Navbutton>
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
    </MainHeader>
  );
};

export { Navigation };
