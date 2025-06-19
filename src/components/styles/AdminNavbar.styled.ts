import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  margin: 32px auto;
  max-width: 1080px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  background: white;

  h1 {
    font-size: 32px;
    margin-bottom: 4px;
  }

  p {
    font-size: 16px;
    color: #666;
  }

  @media (max-width: 480px) {
    padding: 16px;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  background: #f8f9fc;
  padding: 20px;
  border-radius: 12px;
  margin: 0 auto 32px;
  max-width: 1080px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    padding: 12px;
    gap: 12px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 8px;
  color: #1f3d7a;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease, color 0.2s ease;

  &.active {
    background: #426cc1;
    color: white;
  }

  &:hover {
    background: #dbe5ff;
  }
`;

export const Content = styled.main`
  padding: 0 32px;

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;
