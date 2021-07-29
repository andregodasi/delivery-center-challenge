import React, { createContext, useContext, useEffect, useState } from 'react';
import data from '../store/mock.json';

export interface Customer {
  _id: string;
  name?: string;
}

export interface Address {
  number?: string;
  neighborhood?: string;
  complement?: string;
  city?: string;
  state?: string;
  street?: string;
}

export interface Payment {
  method?: string;
  amount?: number;
}

export interface Item {
  name?: string;
  amount?: string;
  quantity?: number;
  note?: number | string | null;
}

export interface Order {
  _id: string;
  reference?: number;
  store?: string;
  externalReference?: string | null;
  amount?: number;
  deliveryFee?: number;
  customer?: Customer;
  address?: Address;
  payments?: Payment[];
  items?: Item[];
}

export interface PaginationData {
  items: Order[];
  pageSize: number;
  currentPage: number;
  total: number;
  getItems(currentPage: number): void;
  getItemsByType(type?: string): void;
  getItem(id: string): Order | null | undefined;
  type: string | undefined;
  resumeOrders: ResumeOrders;
}

interface ResumeOrders {
  qtdDPIZZA?: number;
  qtdDBURGER?: number;
  qtdDSUSHI?: number;
  qtdDHOTDOG?: number;
}

const OrdersContext = createContext<PaginationData>({} as PaginationData);

export const PaginationProvider: React.FC = ({ children }) => {
  const [dataSource] = useState<Order[]>([...data.ordersData]);
  const [dataSourceCurrent, setDataSourceCurrent] = useState<Order[]>([
    ...data.ordersData,
  ]);
  const [items, setItems] = useState<Order[]>([...data.ordersData].slice(0, 5));
  const [pageSizeSource] = useState<number>(5);
  const [currentPageSource, setCurrentPageSource] = useState<number>(1);
  const [totalSource, setTotalSource] = useState<number>(
    [...data.ordersData].length,
  );
  const [resumeOrders, setResumeOrders] = useState<ResumeOrders>({
    qtdDPIZZA: 0,
    qtdDBURGER: 0,
    qtdDSUSHI: 0,
    qtdDHOTDOG: 0,
  });
  const [typeSource, setTypeSource] = useState<string | undefined>();

  const getItems = (currentPage: number): void => {
    setCurrentPageSource(currentPage);
  };

  const getItemsByType = (type: string | undefined): void => {
    if (type !== typeSource) {
      setCurrentPageSource(1);
      setTypeSource(type);
      setDataSourceCurrent(dataSource.filter(dt => type === dt.store));
    } else {
      setCurrentPageSource(1);
      setTypeSource('');
      setDataSourceCurrent([...dataSource]);
    }
  };

  const getItem = (id: string): Order | null | undefined => {
    if (id) {
      return dataSource.find(item => item._id === id);
    }
    return null;
  };

  useEffect(() => {
    const start: number = (currentPageSource - 1) * pageSizeSource;
    const end: number = currentPageSource * pageSizeSource;
    setItems(dataSourceCurrent.slice(start, end));
  }, [dataSourceCurrent, pageSizeSource, currentPageSource]);

  useEffect(() => {
    if (dataSource && Array.isArray(dataSource)) {
      setResumeOrders({
        qtdDPIZZA: dataSource.filter(item => item.store === 'DPIZZA').length,
        qtdDBURGER: dataSource.filter(item => item.store === 'DBURGER').length,
        qtdDSUSHI: dataSource.filter(item => item.store === 'DSUSHI').length,
        qtdDHOTDOG: dataSource.filter(item => item.store === 'DHOTDOG').length,
      });
    }
  }, [dataSource]);

  useEffect(() => {
    setTotalSource(dataSourceCurrent.length);
  }, [dataSourceCurrent]);

  return (
    <OrdersContext.Provider
      value={{
        items,
        pageSize: pageSizeSource,
        currentPage: currentPageSource,
        total: totalSource,
        getItems,
        getItemsByType,
        getItem,
        type: typeSource,
        resumeOrders,
      }}>
      {children}
    </OrdersContext.Provider>
  );
};

export function usePagination(): PaginationData {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('usePagination must be used within an PaginationProvider');
  }

  return context;
}
