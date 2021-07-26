import React from 'react';
import { Divider, Typography } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Order } from '../../hooks/pagination';
import { Container } from './styles';
import {
  formatAddressToString,
  formatIntegerToCurrencyString,
} from '../../shared/util/transforms';

const { Text, Title } = Typography;

interface CardOrderProps {
  order: Order;
}

const CardOrder: React.FC<CardOrderProps> = ({ order }) => {
  return (
    <Container to={`/order/${order._id}`} typeStore={order?.store}>
      <div className='card-order__img' />
      <div className='card-order__container-content'>
        <Title level={4}>{order?.customer?.name}</Title>
        <Divider className='card-order__divider' />
        <Text type='secondary' className='card-order__address'>
          <EnvironmentOutlined className='card-order__address-icon' />
          {formatAddressToString(order?.address)}
        </Text>
        <Divider className='card-order__divider' />
        <Text>R$ {formatIntegerToCurrencyString(order?.amount)}</Text>
      </div>
    </Container>
  );
};

export default CardOrder;
