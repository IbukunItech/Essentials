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
              <Navs to="/">
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
              <Navs style={navSignUp} to="/signup" activeStyle>
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
  border: "1px solid white",
};

const Icon = styled.div``;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin: 0 10px;
  padding: 10px 15px;
  color: white;
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
  color: white;
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
// {
//   !user && (
//     <>
//       <Navs to="/login" activeStyle>
//         {" "}
//         Login{" "}
//       </Navs>
//       <Navs to="/signup" style={navSignUp}>
//         {" "}
//         SignUp{" "}
//       </Navs>
//     </>
//   );
// }

// {
//   user && (
//     <div style={{ display: "flex" }}>
//       <Navs to="/">Profile</Navs>
//       <Navs to="/">Details</Navs>
//       <p style={{ color: "white" }}> Welcome {user.displayName}</p>
//       <NavBtn onClick={logout}> Logout </NavBtn>
//     </div>
//   );
// }
