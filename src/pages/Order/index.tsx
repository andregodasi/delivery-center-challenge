import React, { useEffect, useState } from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { LeftOutlined, EnvironmentOutlined } from '@ant-design/icons';
import CardItem from '../../components/CardItem';
import { Container } from './styles';
import { usePagination, Order as OrderType } from '../../hooks/pagination';
import {
  formatAddressToString,
  formatIntegerToCurrencyString,
} from '../../shared/util/transforms';

const { Text, Title } = Typography;

const Order: React.FC = () => {
  const { getItem } = usePagination();
  const [order, setOrder] = useState<OrderType | null | undefined>();
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (id) {
      setOrder(getItem(id));
    }
  }, [id]);
  return (
    <Container typeStore={order?.store} className='container'>
      <Title level={1}>Order</Title>
      <Link to='/order' className='order__link'>
        <Button type='link' className='order__back'>
          <LeftOutlined />
          Back
        </Button>
      </Link>
      <Row gutter={16}>
        <Col xs={24} md={8} className='order__img' />
        <Col xs={24} md={8} style={{ padding: '1rem' }}>
          <Text className='order__subtitle'>Store</Text>
          <Divider className='order__divider' />
          <Text className='order__label'>{order?.store}</Text>
          <Text className='order__subtitle'>Curtomer</Text>
          <Divider className='order__divider' />
          <Text className='order__label'>{order?.customer?.name}</Text>
          <Text className='order__subtitle'>Address</Text>
          <Divider className='order__divider' />
          <Text className='order__label'>
            <EnvironmentOutlined className='order__address-icon' />
            {formatAddressToString(order?.address)}
          </Text>
        </Col>
        <Col xs={24} md={8} style={{ padding: '1rem' }}>
          <Text className='order__subtitle'>Amount</Text>
          <Divider className='order__divider' />
          <Text className='order__amount-order'>
            ${formatIntegerToCurrencyString(order?.amount)}
          </Text>
        </Col>
      </Row>
      <Text className='order__subtitle order__subtitle-items'>Items</Text>
      <Divider className='order__divider' />
      <Row gutter={[16, 16]}>
        {order?.items?.map(item => (
          <Col xs={24} md={12} lg={6}>
            <CardItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Order;
