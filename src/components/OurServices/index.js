import React from 'react';
import { Container } from '../Container';
import styled from 'styled-components';
import { PrimaryButton } from '../Button';
import { RichText } from 'prismic-reactjs';


const InnerWrapper = styled.div`
  margin-bottom: 0;
  padding: var(--spacingSmall);
  margin-top: var(--overlapHeight) !important;
  background: #f6f6f6;
  border-radius: 15px;
  position: relative;
  /* margin: var(--spacingSmall) 0; */

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
    h3 {
      margin-top: 20px;
    }

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

  .c-verticalIconList__icon {
    height: 85px;
    display: flex;
    align-items: center;

    img {
      margin: 0 auto;
      display: block;
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
      :nth-of-type(3n) {
        border-right: 0;
      }

      :nth-of-type(1n + 4) {
        border-top: 1px solid #ececec;
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
    border-radius:15px;
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

const PageWrapper = styled.div`
  padding: var(--spacing) 0;
  position: relative;
  padding-bottom: ${(props) => (props.NoBottomPad ? '0' : null)};
  padding-top: ${(props) => (props.NoTopPad ? '0' : null)};

  @media screen and (max-width: 600px) {
    padding: var(--spacingMobile) 0;
  }
`;

const OurServices = ({ cards,title, ctaImage, ctaTitle }) => {

  const mappedCards = cards.map((card, i) => {
    return (
      <div className="verticalIconList__item" key={i}>
        <div className="c-verticalIconList__icon">
          <img src={card.service_illustration.url} alt={card.service_illustration.alt} />
        </div>
        <RichText render={card.service_title} />
        <RichText render={card.service_about} />
      </div>
    );
  });
  return (
    <PageWrapper NoBottomPad NoTopPad>

      <Container wide id="our_services">
        <InnerWrapper>
          <Inner>
            <div className="has-text-align-center">
              <RichText render={title} />
            </div>
            <div className="verticalIconList">
              {mappedCards}
              {/* <div className="verticalIconList__item">
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
            </div> */}
            </div>
            <div className="simpleCta">
              <img src={ctaImage.url} alt={ctaImage.alt} />
              <RichText render={ctaTitle} />
              <BtnWrapper>
                <PrimaryButton href="/contact">Book Now</PrimaryButton>
              </BtnWrapper>
            </div>
          </Inner>
        </InnerWrapper>
      </Container>
    </PageWrapper>
    
  );
};

export { OurServices };
