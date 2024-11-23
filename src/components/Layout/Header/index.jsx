import { Container, Nav, Logo, UserIcon } from "./Header.style.js";
import NavItemContainer from "./NavItemContainer.jsx";
import LogoImage from "/src/assets/icons/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <Logo src={LogoImage} alt="Logo" style={{ cursor: "pointer" }} />
        </Link>
        <NavItemContainer path={"/"}>홈</NavItemContainer>
        <NavItemContainer path={"/experience-sheet"}>경험시트</NavItemContainer>
        <NavItemContainer path={"/write-letter"}>자기소개서</NavItemContainer>
        <NavItemContainer path={"/mypage"}>
          <UserIcon />
          마이페이지
        </NavItemContainer>
        <NavItemContainer path={"/login"}>로그인/회원가입</NavItemContainer>
      </Nav>
    </Container>
  );
};

export default Header;
