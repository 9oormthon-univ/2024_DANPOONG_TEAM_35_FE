import { Container, Nav, Logo, UserIcon } from "./Header.style.js";
import NavItemContainer from "./NavItemContainer.jsx";
import LogoImage from "/src/assets/icons/logo.png";

const Header = () => {
  return (
    <Container>
      <Nav>
        <Logo src={LogoImage} alt="Logo" />
        <NavItemContainer path={"/experience-sheet"}>경험시트</NavItemContainer>
        <NavItemContainer path={"/write-letter"}>자기소개서</NavItemContainer>
        <NavItemContainer path={"/"}>AI 면접</NavItemContainer>
        <NavItemContainer path={"/"}>도식화</NavItemContainer>
        <NavItemContainer path={"/"}>
          <UserIcon />
          마이페이지
        </NavItemContainer>
      </Nav>
    </Container>
  );
};

export default Header;
