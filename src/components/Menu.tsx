import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  background: #ffffff;
  position: relative;
`;

const Brand = styled.div`
  font-weight: 800;
  font-size: 20px;
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLink = styled(Link)<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "#b10000" : "#1f1f1f")};
  color: white;
  padding: 12px 22px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: #b10000;
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 6px;

  span {
    width: 26px;
    height: 3px;
    background: #1f1f1f;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNav = styled.nav<{ open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  transform: ${({ open }) =>
    open ? "translateY(0)" : "translateY(-20px)"};
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: all 0.25s ease;
`;

const MobileLink = styled(Link)`
  background: #1f1f1f;
  color: white;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;

  &:hover {
    background: #b10000;
  }
`;

const Menu = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <Brand>Asociación benéfica Unida Solidaria</Brand>

      <DesktopNav>
        <MenuLink to="/" $active={pathname === "/"}>
          Inicio
        </MenuLink>
        <MenuLink to="/mission" $active={pathname === "/mission"}>
          Misión
        </MenuLink>
        <MenuLink to="/services" $active={pathname === "/services"}>
          Servicios
        </MenuLink>
        <MenuLink to="/contacts" $active={pathname === "/contacts"}>
          Contactos
        </MenuLink>
      </DesktopNav>

      <Burger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Burger>

      <MobileNav open={open}>
        <MobileLink to="/" onClick={() => setOpen(false)}>
          Inicio
        </MobileLink>
        <MobileLink to="/mission" onClick={() => setOpen(false)}>
          Misión
        </MobileLink>
        <MobileLink to="/services" onClick={() => setOpen(false)}>
          Servicios
        </MobileLink>
        <MobileLink to="/contacts" onClick={() => setOpen(false)}>
          Contactos
        </MobileLink>
      </MobileNav>
    </Header>
  );
};

export default Menu;
