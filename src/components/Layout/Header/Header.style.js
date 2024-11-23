import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export const Container = styled.header`
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-white);
  z-index: 1000;

  border-bottom: 1px solid var(--color-light-gray);
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 5px;
`;

export const NavItem = styled(Link)`
  width: fit-content;

  display: flex;
  align-items: center;
  text-align: center;

  color: var(--color-gray);
  font-weight: var(--weight-bold);
  font-size: 12px;
  position: relative;
  padding: 5px 10px;

  &:hover {
    color: var(--color-black);
  }

  &:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 2px;
    background-color: var(--color-dark-blue);
  }

  /* 마지막 두 아이템 처리 */
  &:nth-last-of-type(2) {
    position: fixed;
    right: 180px; /* 마지막에서 두 번째 아이템 위치 설정 */
  }

  &:last-of-type {
    position: fixed;
    right: 80px; /* 마지막 아이템 위치 설정 */
  }

  &:nth-last-of-type(-n + 2):hover::after {
    content: none; /* 마지막 두 네비게이션 아이템 강조선 제거 */
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;
  object-fit: contain;
  margin: 0 20px;
`;

export const UserIcon = styled(FaUserCircle)`
  margin-right: 10px;
`;
