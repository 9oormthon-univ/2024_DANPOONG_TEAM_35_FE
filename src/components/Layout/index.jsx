import { Outlet } from "react-router-dom";
import { Container, Content } from "./Layout.style.js";
import Header from "./Header/index.jsx";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
