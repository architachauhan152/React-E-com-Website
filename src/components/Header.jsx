import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="https://tse4.mm.bing.net/th?id=OIP.Hq41eSyRqD6qNRoZDPqtogHaI0&pid=Api&P=0" className="logo" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
height:100vh;
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 7rem;
    width:15rem;
  }
`;
export default Header;