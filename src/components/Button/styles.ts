import styled, { css } from 'styled-components';
import { tint } from 'polished';

interface IContainerProps {
  outlined?: boolean;
}

export const Container = styled.button<IContainerProps>`
  height: 40px;
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 5px;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  font-size: 1rem;
  font-weight: bold;
  color: var(--black);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;

  svg {
    stroke-width: 3px;
    margin-right: 8px;
    transition: stroke 0.3s;
  }

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

      svg {
        stroke: var(--primary);
      }

      &:hover {
        color: var(--black);
        background: var(--primary);
        border-color: var(--primary);

        svg {
          stroke: var(--black);
        }
      }
    `}

  @media (max-width: 468px) {
    height: 32px;
    padding: 0 0.5rem;
  }
`;
