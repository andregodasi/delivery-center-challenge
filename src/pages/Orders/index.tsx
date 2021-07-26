import React from 'react';
import { Col, Divider, Pagination, Row, Typography } from 'antd';
import { Container } from './styles';
import { usePagination } from '../../hooks/pagination';

import CardOrder from '../../components/CardOrder';
import OrdersFilters from './components/OrdersFilters';

interface Order {
  _id: string;
}

const { Text, Title } = Typography;

const Orders: React.FC = () => {
  const { items, pageSize, currentPage, total, getItems } = usePagination();

  const handlePagination = (currentPageParam: number): void => {
    getItems(currentPageParam);
  };

  return (
    <Container className='container'>
      <Title level={1}>Orders</Title>
      <OrdersFilters />
      <Text className='orders__subtitle'>Orders</Text>
      <Divider className='orders__divider' />
      <Row gutter={[0, 16]} className='orders__container-orders'>
        {items.map((order: Order) => (
          <Col span={24} key={order._id}>
            <CardOrder order={order} />
          </Col>
        ))}
      </Row>
      <div className='orders__pagination'>
        <Pagination
          current={currentPage}
          total={total}
          pageSize={pageSize}
          onChange={handlePagination}
        />
      </div>
    </Container>
  );
};

export default Orders;
