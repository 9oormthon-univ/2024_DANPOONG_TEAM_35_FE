import { Container, Nav, Logo } from "./Header.style.js";
import NavItemContainer from "./NavItemContainer.jsx";
import LogoImage from "/src/assets/icons/logo.png";

const Header = () => {
  return (
    <Container>
      <Nav>
        <Logo src={LogoImage} alt="Logo" />
        <NavItemContainer path={"/"}>채용공고</NavItemContainer>
        <NavItemContainer path={"/"}>자기소개서</NavItemContainer>
        <NavItemContainer path={"/"}>AI 면접</NavItemContainer>
        <NavItemContainer path={"/"}>도식화</NavItemContainer>
        <NavItemContainer path={"/"}>마이페이지</NavItemContainer>
      </Nav>
    </Container>
  );
};

export default Header;
