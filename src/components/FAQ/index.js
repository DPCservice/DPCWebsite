import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import { RichText } from 'prismic-reactjs';
import { Container } from '../Container';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: ' var(--spacingSmall) 0',

    '& h5': {
      margin: 0,
    },
    '@media screen and (max-width: 600px)': {
      margin: 'var(--spacingSmallMobile) 0',
      '& h5': {
        fontSize: '15px',
      },
    },
  },
  accordion: {
    backgroundColor: '#F6F6F6 !important',
    boxShadow: 'none !important',
  },

  summary: {
    padding: '12px 24px;',
  },

  details: {
    padding: '8px 26px 16px',

    '& li': {
      margin: '8px 0px',
    },

    '& p': {
      maxWidth: '100%',
      margin: 0,
    },
  },

  heading: {
    marginTop: 0,
  },
}));

const PageWrapper = styled.div`
  padding: var(--spacing) 0;
  position: relative;
  padding-bottom: ${(props) => (props.NoBottomPad ? '0' : null)};
  padding-top: ${(props) => (props.NoTopPad ? '0' : null)};

  @media screen and (max-width: 600px) {
    padding: var(--spacingMobile) 0;
  }
`;
const InnerWrapper = styled.div`
  padding: var(--spacingSmall);
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

const Header = styled.h3`
  margin-top: 20px;
  text-align: center;
`;

const FAQ = ({ title, allFAQ }) => {
  const classes = useStyles();

  const factsAndAnswers = allFAQ.map((faq, i) => {
    return (
      <Accordion className={classes.accordion}>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${i++}a-content`}
          id={`panel${i++}a-header`}
        >
          <RichText render={faq.faq_question} />
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {/* <Typography>{RichText.asText(faq.faq_answer)}</Typography> */}

          <RichText render={faq.faq_answer} />
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <PageWrapper>
      <Container wide id="faq">
        <InnerWrapper>
          <Header>{RichText.asText(title)}</Header>
          <div className={classes.root}>{factsAndAnswers}</div>
        </InnerWrapper>
      </Container>
    </PageWrapper>
  );
};

export { FAQ };
