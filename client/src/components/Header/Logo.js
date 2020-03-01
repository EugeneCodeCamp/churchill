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
    padding: 0 8px 0 16px;
    height: 50px;
    width: auto;
  }
`;

function HeaderLogo() {
  return <a href="/"><img src={logoImage} alt="Logo" /></a>;
}

export default HeaderLogo;
