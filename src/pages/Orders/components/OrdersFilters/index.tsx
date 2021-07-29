import React from 'react';
import { Col, Divider, Row, Typography } from 'antd';
import CardFood from '../../../../components/CardFood';
import PizzaIcon from '../../../../assets/icons/pizza.png';
import HamburguerIcon from '../../../../assets/icons/hamburguer.png';
import SushiIcon from '../../../../assets/icons/sushi.png';
import HotdogIcon from '../../../../assets/icons/hot_dog.png';
import { usePagination } from '../../../../hooks/pagination';
import { Container } from './styles';

const { Text } = Typography;

const OrdersFilters: React.FC = () => {
  const { getItemsByType, type, resumeOrders } = usePagination();
  const handleFilterSelect = (t: string): void => {
    getItemsByType(t);
  };

  return (
    <Container>
      <Text style={{ fontSize: '0.825rem' }}>Filter</Text>
      <Divider className='orders-filters__divider' />
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={6}>
          <CardFood
            description='Pizza'
            quantity={resumeOrders.qtdDPIZZA}
            type='DPIZZA'
            handleFilterSelect={handleFilterSelect}
            icon={PizzaIcon}
            typeSelected={type}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <CardFood
            description='Hambúrguer'
            quantity={resumeOrders.qtdDBURGER}
            type='DBURGER'
            handleFilterSelect={handleFilterSelect}
            icon={HamburguerIcon}
            typeSelected={type}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <CardFood
            description='Sushi'
            quantity={resumeOrders.qtdDSUSHI}
            type='DSUSHI'
            handleFilterSelect={handleFilterSelect}
            icon={SushiIcon}
            typeSelected={type}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <CardFood
            description='Hot-dog'
            quantity={resumeOrders.qtdDHOTDOG}
            type='DHOTDOG'
            handleFilterSelect={handleFilterSelect}
            icon={HotdogIcon}
            typeSelected={type}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersFilters;
