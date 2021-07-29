import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from './styles';
import logo from '../../assets/png/logo.png';

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <div className='container'>
        <Link to='/'>
          <img src={logo} alt='Delivery Center' className='header__logo' />
        </Link>
      </div>
    </HeaderStyle>
  );
};

export default Header;
