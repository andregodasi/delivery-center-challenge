import styled, { css } from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 15px;
  box-shadow: 0px 0px 5px var(--color-black-transparent);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  ${props =>
    props.isActive &&
    css`
      background-color: var(--lt-color-background-default);
    `};

  .card-food__icon {
    width: 4rem;
    margin-bottom: 0.5rem;
  }

  .card-food__quantity {
    ${props =>
      props.isActive &&
      css`
        color: var(--lt-color-blue-default) !important;
      `};
  }

  .card-food__description {
    ${props =>
      props.isActive &&
      css`
        color: var(--lt-color-blue-default) !important;
      `};
  }

  &:hover {
    background-color: var(--lt-color-background-default);

    .card-food__description,
    .card-food__quantity {
      color: var(--lt-color-blue-default) !important;
    }
  }
`;
