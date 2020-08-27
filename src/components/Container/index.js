import styled from 'styled-components';

const Container = styled('div')`
  width: 100%;
  max-width: ${(props) => (props.wide ? '1600px' : '1360px')};
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

export { Container };
