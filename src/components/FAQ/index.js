import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Container } from '../Container';

const PageWrapper = styled.div`
  padding: var(--spacing) 0;
  position: relative;
  padding-bottom: ${(props) => (props.NoBottomPad ? '0' : null)};
  padding-top: ${(props) => (props.NoTopPad ? '0' : null)};

  @media screen and (max-width: 600px) {
    padding: var(--spacingMobile) 0;
  }
`;
const Header = styled.h2`
  margin-top: -17px;
  text-align: center;
`;

const FAQDrawer = styled.div`
  h3 {
    margin: 0;
  }

  .faq-drawer {
    margin-bottom: 30px;
  }

  .faq-drawer__content-wrapper {
    font-size: 1.25em;
    line-height: 1.4em;
    max-height: 0px;
    overflow: hidden;
    transition: 0.25s ease-in-out;
  }
  .faq-drawer__title {
    border-top: #666 1px solid;
    cursor: pointer;
    display: block;
    font-size: 1.25em;
    font-weight: 700;
    padding: 30px 0 0 0;
    position: relative;
    margin-bottom: 0;
    transition: all 0.25s ease-out;
  }
  .faq-drawer__title::after {
    border-style: solid;
    border-width: 1px 1px 0 0;
    content: ' ';
    display: inline-block;
    float: right;
    height: 10px;
    left: 2px;
    position: relative;
    right: 20px;
    top: 2px;
    transform: rotate(135deg);
    transition: 0.35s ease-in-out;
    vertical-align: top;
    width: 10px;
  }

  /* OPTIONAL HOVER STATE */
  .faq-drawer__title:hover {
    color: #4e4b52;
  }

  .faq-drawer__trigger:checked + .faq-drawer__title + .faq-drawer__content-wrapper {
    max-height: 350px;
  }

  .faq-drawer__trigger:checked + .faq-drawer__title::after {
    transform: rotate(-45deg);
    transition: 0.25s ease-in-out;
  }

  input[type='checkbox'] {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .container {
      padding: 80px;
    }
  }
`;

const FAQ = ({ title, allFAQ }) => {
  const factsAndAnswers = allFAQ.map((faq, i) => {
    return (
      <di className="faq-drawer" key={i}>
        <input className="faq-drawer__trigger" id="faq-drawer" type="checkbox" />
        <label className="faq-drawer__title" for="faq-drawer">
          <RichText render={faq.faq_question} />
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <p>
              <RichText render={faq.faq_answer} />
            </p>
          </div>
        </div>
      </di>
    );
  });

  return (
    <PageWrapper>
      <Container wide id="faq">
        <Header>
          <RichText render={title} />
        </Header>
        <FAQDrawer>{factsAndAnswers}</FAQDrawer>
      </Container>
    </PageWrapper>
  );
};

export { FAQ };
