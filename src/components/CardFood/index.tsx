import React from 'react';
import { Typography } from 'antd';
import { Container } from './styles';

const { Text, Title } = Typography;

interface CardFoodProps {
  type: string;
  typeSelected: string | undefined;
  description: string;
  quantity: number | undefined;
  icon: string;
  handleFilterSelect: (typeCurrentSelect: string) => void;
}

const CardFood: React.FC<CardFoodProps> = ({
  type,
  typeSelected,
  description,
  quantity = 0,
  icon,
  handleFilterSelect,
}) => {
  return (
    <Container
      onClick={() => handleFilterSelect(type)}
      isActive={typeSelected === type}>
      <img src={icon} className='card-food__icon' alt={description} />
      <Text type='secondary' className='card-food__description mt-1'>
        {description}
      </Text>
      <Title level={4} className='card-food__quantity'>
        {quantity}
      </Title>
    </Container>
  );
};

export default CardFood;
