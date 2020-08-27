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
    font-weight: 600;
    letter-spacing: -.036em;
    font-size: inherit;
    transition: .3s background,.3s color,.3s border,.3s opacity;
    cursor: pointer;

  &:hover,
  &:focus {
    color: #fff;
    background-color: var(--color-secondary);
  }
`;

Button.defaultProps = {
  type: 'button',
};

export { Button };
