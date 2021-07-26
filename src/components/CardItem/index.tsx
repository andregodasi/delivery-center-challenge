import React from 'react';
import { Typography } from 'antd';
import { Container } from './styles';
import { formatIntegerToCurrencyString } from '../../shared/util/transforms';

const { Text } = Typography;

interface CardItemProps {
  name?: string;
  amount?: string;
  quantity?: number;
}

const CardItem: React.FC<CardItemProps> = ({ name, amount, quantity }) => {
  return (
    <Container>
      <div className='card-item__container-title'>
        <Text strong>{name}</Text>
      </div>
      <div className='card-item__content'>
        <Text className='card-item__quantity'>
          Quantity: <br />
          {quantity}
        </Text>
        <Text className='card-item__amount'>
          Amount <br />
          R${formatIntegerToCurrencyString(amount)}
        </Text>
      </div>
    </Container>
  );
};

export default CardItem;
