import { Outlet } from "react-router-dom";
import { Content, Header, NavBar, StyledLink } from "./styles/AdminNavbar.styled";


const AdminNavbar = () => {
  return (
    <>
      <Header>
        <h1>🐾 Pet Shop Admin Panel</h1>
        <p>Manage your pets and categories with elegance</p>
      </Header>

      <NavBar>
        <StyledLink to="/">Pets</StyledLink>
        <StyledLink to="/categories">Categories</StyledLink>
        <StyledLink to="/add">Add Pet</StyledLink>
        <StyledLink to="/add-category">Add Category</StyledLink>
      </NavBar>

      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default AdminNavbar;
