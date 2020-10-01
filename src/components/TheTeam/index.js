import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { RichText } from 'prismic-reactjs';

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
    p{
      margin-bottom:2px;
      font-size:16px !important;
    }
    h5{
      margin: 0 14px;
      margin-bottom:4px;
    }

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
  .avatar {
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

const PageWrapper = styled.div`
  padding: var(--spacing) 0;
  position: relative;
  padding-bottom: ${(props) => (props.NoBottomPad ? '0' : null)};
  padding-top: ${(props) => (props.NoTopPad ? '0' : null)};

  @media screen and (max-width: 600px) {
    padding: var(--spacingMobile) 0;
  }
`;

const TheTeam = ({ teamMembers, sectionTitle, sectionSubTitle, companyDescription }) => {

  const teamMember = teamMembers.map((member,i) => {
    return (
      <li key={i}>
        <div className="avatar" >
          <img src={member.avatar.url} alt={member.avatar.alt} />
          <RichText render={member.avatar_name} />
          <RichText render={member.position_title} />
        </div>
      </li>
    );
  });

  return (
    <PageWrapper>
      <Container wide id="about">
        <Header>
          <strong>
            <RichText render={sectionTitle} />
          </strong>
        </Header>
        <ThreeCol>
          <Inner>
            <RichText render={sectionSubTitle} />
            <Excerpt>{companyDescription}</Excerpt>
          </Inner>
        </ThreeCol>
        <Team>
          <div className="team-carousel">
            <ul className="team-members">
             {teamMember}
            </ul>
          </div>
        </Team>
      </Container>
    </PageWrapper>
  );
};

export { TheTeam };
