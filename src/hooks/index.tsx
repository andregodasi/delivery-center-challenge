import React from 'react';
import { PaginationProvider } from './pagination';

const AppProvider: React.FC = ({ children }) => {
  return <PaginationProvider>{children}</PaginationProvider>;
};

export default AppProvider;
