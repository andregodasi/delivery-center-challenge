import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 5px var(--color-black-transparent);
  border-radius: 6px;
  .card-item__content {
    width: 100%;
    display: flex;
    padding: 1rem;
    min-height: 120px;
  }

  .card-item__container-title {
    background-color: var(--lt-color-background-default);
    display: flex;
    justify-content: center;
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  .card-item__quantity {
    border-right: 1px solid rgba(0, 0, 0, 0.06);
  }

  .card-item__quantity,
  .card-item__amount {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
