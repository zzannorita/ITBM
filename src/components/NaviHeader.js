import React from 'react'
import {useNavigate, useLocation} from "react-router-dom";
import styled from 'styled-components'; 
import itbm from '../styles/img/itbm.png';

const NaviHeader = () => {
  const Navigate = useNavigate();
  const { pathname } = useLocation();
  const logoStyle = {
    width: "12rem",
    height: "8rem",
    marginTop: "1rem",
  };

  return (
    <>
      <Container>
        <img
          style={logoStyle}
          src={itbm}
          alt="logo"
          onClick={() => Navigate("/")}
        />
        <div>
          <MenuList>
            <MenuListContent
              style={{
                color: pathname === "/mbti" ? "gray" : "black",
              }}
              onClick={() => Navigate("/mbti")}
            >
              MBTI
            </MenuListContent>
            <MenuListContent
              style={{
                color: pathname === "/all" ? "gray" : "black",
              }}
              onClick={() => Navigate("/all")}
            >
              All
            </MenuListContent>
            <MenuListContent
              style={{
                color: pathname === "/members" ? "gray" : "black",
              }}
              onClick={() => Navigate("/members")}
            >
              Members
            </MenuListContent>
            <MenuListContent
              style={{
                color: pathname === "/login" ? "gray" : "black",
              }}
              onClick={() => Navigate("/login")}
            >
              Login
            </MenuListContent>
          </MenuList>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color:#fbf4ea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:20px;
`;

const MenuList = styled.ul`
  display: flex;
  margin-right:10px;
`;
const MenuListContent = styled.li`
  margin-right: 1rem;
  color: ${(props) => (props.isPathMatch ? "gray" : "black")};
  list-style:none;
  `;

export default NaviHeader;