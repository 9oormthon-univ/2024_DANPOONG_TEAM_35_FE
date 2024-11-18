import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 1000;

  border-bottom: 1px solid lightgray;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 20px;
`;

export const NavItem = styled(Link)`
  width: 70px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  color: gray;
  font-weight: 600;
  font-size: 12px;
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;
  object-fit: contain;
  margin: 0 20px;
`;
