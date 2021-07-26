import styled, { css } from 'styled-components';
import pizzaImg from '../../assets/jpg/pizza.jpg';
import hamburguerImg from '../../assets/jpg/hamburguer.jpg';
import sushiImg from '../../assets/jpg/sushi.jpg';
import hotdogImg from '../../assets/jpg/hot_dog.jpg';

const orderTypeVariations = [
  {
    type: 'DPIZZA',
    style: css`
      background-image: url(${pizzaImg});
    `,
  },
  {
    type: 'DBURGER',
    style: css`
      background-image: url(${hamburguerImg});
    `,
  },
  {
    type: 'DSUSHI',
    style: css`
      background-image: url(${sushiImg});
    `,
  },
  {
    type: 'DHOTDOG',
    style: css`
      background-image: url(${hotdogImg});
    `,
  },
];

interface ContainerProps {
  typeStore: string | undefined;
}

export const Container = styled.main<ContainerProps>`
  padding-bottom: 2rem;
  .order__img {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 6px;
    min-height: 200px;
    ${({ typeStore }) =>
      orderTypeVariations.find(t => t.type === typeStore)?.style}
  }

  .order__link {
    margin-bottom: 1.5rem;
    display: block;
  }

  .order__back {
    padding-left: 0;
    color: var(--color-dl);
  }

  .order__divider {
    margin: 0.3rem 0 0.5rem;
  }

  .order__label {
    font-size: 0.825rem;
    display: block;
    margin-bottom: 1rem;
  }

  .order__address-icon {
    margin-right: 0.5rem;
  }

  .order__amount-order {
    font-size: 4rem;
  }

  .order__subtitle-items {
    display: block;
    margin-top: 2rem;
  }
`;
