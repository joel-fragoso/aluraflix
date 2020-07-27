import styled, { css } from 'styled-components';
import { tint } from 'polished';

interface IContainerProps {
  outlined?: boolean;
}

export const Container = styled.a<IContainerProps>`
  height: 32px;
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 5px;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;

  &:hover {
    background: ${tint(0.2, '#2a7ae4')};
    border-color: ${tint(0.2, '#2a7ae4')};
  }

  ${props =>
    props.outlined &&
    css`
      color: var(--primary);
      background: transparent;
      border-color: var(--primary);

      &:hover {
        color: var(--white);
      }
    `}
`;
