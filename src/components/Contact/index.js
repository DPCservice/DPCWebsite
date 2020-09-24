import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import * as Yup from 'yup';
import 'yup-phone';
import { Formik } from 'formik';
import { Box, Button, TextField, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#F6F6F6',
    borderBlockColor: '#DADCE0',
    '& label.Mui-focused': {
      color: 'var(--color-primary)',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--color-primary)',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--color-secondary)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--color-primary)',
      },
    },
  },
});

const HeroWrapper = styled.div`
  background: var(--color-secondary);
  color: #fff;
  padding: var(--spacing) 0;
  position: relative;
  padding-bottom: calc(var(--spacing) - var(--overlapHeight));

  @media screen and (max-width: 600px) {
    padding-bottom: calc(var(--spacingMobile) - var(--overlapHeightMobile));
    padding: var(--spacingMobile) 0;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 10;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

const Columns = styled.div`
  display: flex;
  margin-bottom: 28px;
  flex-wrap: wrap;
  margin: var(--spacingSmall) 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 600px) {
    margin: var(--spacingSmallMobile) 0;
  }
  @media screen and (max-width: 1120px) {
    display: block;
  }
  @media (min-width: 782px) {
    flex-wrap: nowrap;
  }
`;

const InnerWrapper = styled.div`
  margin-bottom: 0;
  /* padding: var(--spacingSmall); */
  padding: var(--spacing) 0;
  margin-top: var(--overlapHeight) !important;
  background: #fff;
  border-radius: 15px;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.15),
    0 8px 8px rgba(0, 0, 0, 0.15);
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

const InnerForm = styled.div`
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
    margin: var(--spacingSmallMobile) 0;
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

const PageWrapper = styled.div`
  padding: var(--spacing) 0;
  position: relative;
  padding-bottom: ${(props) => (props.NoBottomPad ? '0' : null)};
  padding-top: ${(props) => (props.NoTopPad ? '0' : null)};

  @media screen and (max-width: 600px) {
    padding: var(--spacingMobile) 0;
  }
`;

const Contact = () => {
  const classes = useStyles();
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <>
      <HeroWrapper>
        <Inner>
          <h1>
            Let’s discuss what
            <br />
            we can do for you .
          </h1>
          <p>
            Whether you’re looking for pricing or have questions, we’ll provide the information you need to make the
            right decision for your business.
          </p>
        </Inner>
      </HeroWrapper>
      <PageWrapper NoBottomPad NoTopPad>
        <Container wide id="our_services">
          <InnerWrapper>
            <InnerForm>
              <div className="has-text-align-center">
                <h3>Get your free quote</h3>
              </div>
              <div className="verticalIconList">
                <Formik
                  initialValues={{
                    'form-name': 'contact',
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    projectDetails: '',
                  }}
                  validationSchema={Yup.object().shape({
                    fullName: Yup.string().max(255).required('This field is required'),
                    email: Yup.string()
                      .email('The e-mail address entered is invalid')
                      .max(255)
                      .required('This field is required'),
                    phoneNumber: Yup.string().phone().required(),
                  })}
                  onSubmit={(values, actions) => {
                    console.log(values);
                    fetch('/', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      body: encode({ 'form-name': 'contact-demo', ...values }),
                    })
                      .then(() => {
                        alert('Success');
                        actions.resetForm();
                      })
                      .catch(() => {
                        alert('Error');
                      })
                      .finally(() => actions.setSubmitting(false));
                  }}
                >
                  {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form data-netlify="true" name="contact" onSubmit={handleSubmit}>
                      <TextField
                        error={Boolean(touched.fullName && errors.fullName)}
                        fullWidth
                        helperText={touched.fullName && errors.fullName}
                        label="Your full name"
                        margin="normal"
                        name="fullName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.fullName}
                        variant="outlined"
                      />

                      <TextField
                        error={Boolean(touched.email && errors.email)}
                        fullWidth
                        helperText={touched.email && errors.email}
                        label="Email Address"
                        margin="normal"
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="email"
                        value={values.email}
                        variant="outlined"
                      />
                      <TextField
                        error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                        fullWidth
                        helperText={touched.phoneNumber && errors.phoneNumber}
                        label="Enter your phone number"
                        margin="normal"
                        name="phoneNumber"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="tel"
                        value={values.phoneNumber}
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Please enter your project details (scope,timing, budget, etc.)"
                        margin="normal"
                        name="projectDetails"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.projectDetails}
                        variant="outlined"
                        rows={6}
                        multiline
                      />
                      <Box mt={2}>
                        <Button
                          color="primary"
                          disabled={isSubmitting}
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                        >
                          Submit Request
                        </Button>
                        {errors.submit && (
                          <Box mt={3}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                          </Box>
                        )}
                      </Box>
                    </form>
                  )}
                </Formik>
              </div>
            </InnerForm>
          </InnerWrapper>
        </Container>
      </PageWrapper>
    </>
  );
};

export { Contact };