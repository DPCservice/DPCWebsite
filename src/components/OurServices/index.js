import React from 'react';
import { Container } from '../Container';
import styled from 'styled-components';
import { PrimaryButton } from '../Button';

const InnerWrapper = styled.div`
  margin-bottom: 0;
  padding: var(--spacingSmall);
  margin-top: var(--overlapHeight) !important;
  background: #f6f6f6;
  border-radius: 15px;
  position: relative;
  margin: var(--spacingSmall) 0;

  @media screen and (max-width: 768px) {
    padding: var(--spacingSmallTablet);
  }
  @media screen and (max-width: 600px) {
    padding: var(--spacingSmallMobile);
    margin: var(--spacingSmallMobile) 0;
  }
  @media screen and (max-width: 400px) {
    padding: 30px 20px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;

  .has-text-align-center {
    text-align: center;
    margin-top: 20px;
    @media screen and (max-width: 600px) {
      margin-top: 10px;
    }
  }

  .verticalIconList {
    margin: var(--spacingSmall) 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 600px) {
      margin: var(--spacingSmallMobile) 0;
    }
  }

  .verticalIconList__item {
    text-align: center;
    padding: 40px 30px;
    border-right: 1px solid #ececec;

    @media screen and (max-width: 860px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 350px;
    }

    h5 {
      margin-top: 10px;
      margin-left: auto;
      margin-right: auto;

      /* @media screen and (max-width: 600px) {
        font-size: 20px;
        margin: 28px 0 10px;
      } */
    }

    @media screen and (min-width: 1081px) {
      width: calc(99.99% / 3);
    }
    @media screen and (min-width: 1081px) {
      :nth-of-type(-n + 3) {
        padding-top: 0;
      }
    }

    @media screen and (max-width: 860px) {
      :first-child {
        padding-top: 0;
      }
      width: 100%;
      border-right: 0;
      padding: 20px 0;
    }
  }

  .simpleCta {
    background: #fff;
    border: 1px solid #f6f6f6;
    padding: 60px 75px;
    margin: var(--spacingSmall) 0;
    margin-bottom: 0;

    @media screen and (max-width: 400px) {
      padding: 30px 20px !important;
      :last-child {
        margin-bottom: -10px;
      }
    }

    @media screen and (max-width: 1080px) {
      text-align: center;
      padding-left: 50px;
      padding-right: 50px;

      h4 {
        max-width: 470px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media screen and (min-width: 1081px) {
      display: flex;
      align-items: center;
      margin-top: 0;
      margin-bottom: 0;

      h4 {
        max-width: 820px;
        margin: 0 50px;
      }

      img {
        flex-shrink: 0;
      }
    }
  }
`;

const BtnWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  margin-bottom: 0;

  @media screen and (max-width: 1080px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1081px) {
    margin-top: 0;
    margin-bottom: 0;
    flex-shrink: 0;
    margin-left: auto;
  }
`;

const OurServices = () => {
  return (
    <Container wide>
      <InnerWrapper>
        <Inner>
          <h3 className="has-text-align-center">Why work with us?</h3>

          <div className="verticalIconList">
            <div className="verticalIconList__item">
              <div></div>
              <h5>
                this is a test
                <br />
                of a bigger test
              </h5>
              <p>
                I'm baby cupidatat nulla palo santo ut, nisi vexillologist pinterest thundercats roof party aute
                fingerstache blue bottle messenger bag.
              </p>
            </div>
          </div>
          <div className="simpleCta">
            <img src="_blank" alt="Illustration" />
            <h4>Get started with your free 30 minute design strategy call.</h4>
            <BtnWrapper>
              <PrimaryButton href="/">Book Now</PrimaryButton>
            </BtnWrapper>
          </div>
        </Inner>
      </InnerWrapper>
    </Container>
  );
};

export { OurServices };
