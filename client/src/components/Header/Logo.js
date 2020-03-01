import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { headerItem } from '../shared/helpers';
import logoImage from './iuvo.png';

const Logo = styled(Link)`
  ${headerItem};

  margin-right: auto;
  height: 100px;
  width: auto;

  @media (max-width: 425px) {
    padding: 0 8px 0 20px;
    height: 50px;
    width: auto;
  }
`;

const HeaderLogo = () => <Logo to='/'><img src={logoImage} alt="Logo" /></Logo>;

export default HeaderLogo;
