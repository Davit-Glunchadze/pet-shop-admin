import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  margin: 32px auto;
  max-width: 1080px;

  h1 {
    font-size: 32px;
    margin-bottom: 4px;
  }

  p {
    font-size: 16px;
    color: #666;
  }
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 16px;
  background: #f8f9fc;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 32px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  margin: 0 auto 32px;
  max-width: 1080px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 19px;
  border-radius: 8px;
  color: #1f3d7a;
  text-decoration: none;
  font-weight: 500;

  &.active {
    background: #426cc1;
    color: white;
  }
`;

export const Content = styled.main`
  padding: 0 32px;
`;
