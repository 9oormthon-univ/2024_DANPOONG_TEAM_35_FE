import { NavItem } from "./Header.style.js";
import { useLocation } from "react-router-dom";

const NavItemContainer = ({ children, path }) => {
  const location = useLocation();

  return (
    <NavItem to={path} $isActive={path === location.pathname}>
      {children}
    </NavItem>
  );
};

export default NavItemContainer;
