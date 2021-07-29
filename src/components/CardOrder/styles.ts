import { Link, LinkProps } from 'react-router-dom';
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

interface ContainerProps extends LinkProps {
  typeStore: string | undefined;
}

export const Container = styled(Link)<ContainerProps>`
  box-shadow: 0px 0px 5px var(--color-black-transparent);
  display: flex;
  border-radius: 6px;

  .card-order__img {
    width: 25%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 6px 0 0 6px;
    display: none;
    ${({ typeStore }) =>
      orderTypeVariations.find(t => t.type === typeStore)?.style}
  }

  .card-order__divider {
    margin: 0.5rem 0;
  }

  .card-order__address {
    font-size: 0.825rem;
  }

  .card-order__address-icon {
    margin-right: 0.5rem;
  }

  .card-order__container-content {
    flex: 1;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .card-order__img {
      display: flex;
    }
  }
`;
