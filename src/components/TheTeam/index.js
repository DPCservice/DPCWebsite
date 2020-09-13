import React from 'react';
import styled from 'styled-components';
import Avatar from '../../assets/avatar.png';
import { Container } from '../Container';

const Header = styled.h2`
  margin-top: -17px;
  text-align: center;
`;

const ThreeCol = styled.div`
  padding: var(--spacingSmall);
  margin: var(--spacingSmall) 0;
  z-index: 1;
  background: #f6f6f6;
  border-radius: 15px;

  @media screen and (min-width: 1201px) {
    position: relative;
  }

  @media screen and (max-width: 768px) {
    padding: var(--spacingSmallTablet);
  }
  @media screen and (max-width: 600px) {
    padding: var(--spacingSmallMobile);
  }
`;

const Inner = styled.div`
  padding: 0;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h3 {
    width: 290px;
    margin-right: 7%;
    flex-shrink: 0;
    margin-top: -11px;
    margin-bottom: 0;
    font-weight: 600;
  }

  @media screen and (max-width: 1100px) {
    text-align: center;
    flex-direction: column;

    h3 {
      margin-top: 20px;
      width: 100%;
      margin-right: 0;
      margin-top: 20px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    h3 {
      font-size: 24px;
      margin: 30px 0 13px;
      margin-top: 10px;
    }
  }
`;

const Excerpt = styled.div`
  width: calc(99.99% - 400px - 10%);
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const Team = styled.div`
  text-align: center;

  .team-carousel {
    margin: 0 auto;
    max-width: 1150px;
    position: relative;
  }

  .team-members {
    margin: 0 auto;
    max-width: 812px;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-around;
    }
  }
  ul {
    list-style: none;
  }

  li {
    margin: 3rem auto;
    width: 14.8125rem;
    @media (min-width: 768px) {
      margin: 0;
    }
  }
  a {
    color: black;
    text-decoration: none;

    h3 {
      color: black;
      font-size: 2.5rem;
      font-weight: 700;
      text-decoration: none;
      margin: 0;
    }

    h3:after {
      border-bottom: 2px solid black;
      content: '';
      display: block;
      margin: 0.75rem auto 1rem;
      width: 3.4375rem;
    }

    p {
      color: black;
      font-size: 1.125rem;
      font-weight: 300;
      text-decoration: none;
    }

    img {
      border-radius: 100%;
      margin: 0 auto;
      height: auto;
      max-width: 100%;
    }
  }
`;

const TheTeam = () => {
  return (
    <Container wide>
      <Header>
        <strong>cliche vice fashion axe deep cliche vice fashion </strong>
      </Header>
      <ThreeCol>
        <Inner>
          <h3>Meet the people behind the name</h3>
          <Excerpt>
            I'm baby poke portland wayfarers live-edge bushwick kickstarter four dollar toast gastropub seitan listicle
            fingerstache. Deep v bushwick rampsfour dollar toast gastropub seitan listicle fingerstache.
          </Excerpt>
        </Inner>
      </ThreeCol>
      <Team>
        <div className="team-carousel">
          <ul className="team-members">
            <li>
              <a href="#">
                <img src={Avatar} alt="" />
                <h3>Marian Rhodes</h3>
                <p>art director</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src={Avatar} alt="" />
                <h3>Genesis Hanson</h3>
                <p>founder</p>
              </a>
            </li>
          </ul>
        </div>
      </Team>
    </Container>
  );
};

export { TheTeam };
