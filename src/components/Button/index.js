import styled from 'styled-components';

const Button = styled('a')`
  flex-shrink: 0;
  text-decoration: none;
  background: var(--color-primary);
  border-radius: 40px;
  color: #fff;
  display: inline-block;
  padding: 0 30px;
  height: 51px;
  line-height: 49px;
  font-weight: 700;
  letter-spacing: -0.036em;
  font-size: inherit;
  transition: 0.3s background, 0.3s color, 0.3s border, 0.3s opacity;
  cursor: pointer;

  :hover{
    color: #fff;
    background-color: var(--color-secondary);
  }

  @media screen and (max-width: 600px) {
    height: 42px;
    line-height: 38px;
    padding: 0 20px;
  }
`;

Button.defaultProps = {
  type: 'button',
};

export { Button };
