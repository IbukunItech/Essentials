import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  const { logOut } = useLogout();
  const { user } = useAuthContext();

  const logout = () => {
    logOut();
  };
  console.log("user ", user);
  return (
    <Container>
      <Wrapper>
        <NavLink to="/">
          <Logo />
        </NavLink>

        <Navigation>
          {user && <p style={{ color: "white" }}> Welcome {user.displayName}</p>}
          {!user && (
            <>
              {user && <p style={{ color: "white" }}>{user.displayName}</p>}
              <Navs to="/login"> Login </Navs>
              <Navs to="/signup"> SignUp </Navs>
            </>
          )}

          {user && <NavBtn onClick={logout}> Logout </NavBtn>}
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default NavBar;

const NavBtn = styled.div`
  margin: 0 10px;
  color: red;
  cursor: pointer;
`;
const Navs = styled(NavLink)`
  margin: 0 10px;
  padding: 10px;
  color: red;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  // &.active {
  //   background: white;
  //   cursor: pointer;
  // }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

const Logo = styled.div`
  margin-left: 24px;
  background-color: teal;
  width: 150px;
  height: 40px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #101522;
`;
