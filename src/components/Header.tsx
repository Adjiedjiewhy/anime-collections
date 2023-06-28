import React from 'react';
import styled from '@emotion/styled';
import { Primary } from '../styles/variables/colors';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>AniColle</Title>
      <nav>
        <NavList>
          <NavItem>
            <NavLink>Anime List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Collections</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: ${Primary.base};
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  flex-grow: 1;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin-left: 10px;
`;

const NavLink = styled.a`
  color: ${Primary.light};
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: ${Primary.highlight};
  }
`;

export default Header;
