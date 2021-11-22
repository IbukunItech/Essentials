import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineLogin } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SiGnuprivacyguard } from "react-icons/si";
import Header from "../../Header/Header";

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
        <Logo to="/">Essentials</Logo>
        {user && (
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <Navigation>
              <Navs to="/">
                <Icon>
                  <AiOutlineHome />
                </Icon>
                <span>Home</span>
              </Navs>
              <Navs to="/detail">
                <Icon>
                  <AiOutlineInfoCircle />
                </Icon>
                <span>details</span>
              </Navs>{" "}
              <Navs to="/">
                <Icon>
                  <CgProfile />
                </Icon>
                <span>Profile</span>
              </Navs>
            </Navigation>
            <Header />
            <p style={{ color: "white" }}> Welcome {user.displayName}</p>
            <NavBtn onClick={logout} style={navSignUp}>
              {" "}
              Logout{" "}
            </NavBtn>
          </div>
        )}
        <Navigation></Navigation>

        {!user && (
          <>
            <div style={{ display: "flex" }}>
              <Navs to="/login">
                <Icon>
                  <AiOutlineLogin />
                </Icon>
                <span>Login</span>
              </Navs>
              <Navs style={navSignUp} to="/signup">
                <Icon>
                  <SiGnuprivacyguard />
                </Icon>
                <span>SIGN up</span>
              </Navs>
            </div>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default NavBar;

const navSignUp = {
  border: "1px solid #db9b34",
};

const Icon = styled.div``;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin: 0 10px;
  padding: 10px 15px;
  color: #db9b34;

  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  transition: all 350ms;
  :hover {
    background: rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
  span {
    margin: 0 5px;
  }
`;
const Navs = styled(NavLink)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin: 0 10px;
  padding: 10px 15px;
  color: #db9b34;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  transition: all 350ms;
  :hover {
    background: rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
  span {
    margin: 0 5px;
  }
  // &.active {
  //   background: rgb(0, 0, 0, 0.3);
  //   cursor: pointer;
  // }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  flex: 1;
`;

const Logo = styled(NavLink)`
  text-decoration: none;
  margin-left: 24px;
  color: white;
  width: 150px;
  height: 40px;
  font-size: 35px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #db9b34;
  font-weight: bold;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #387546;
`;
