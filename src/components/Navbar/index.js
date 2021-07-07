import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import logimg from "../../images/brake.svg";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  NavLinks,
  MobileIcon,
  NavItem,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logonot,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <Navlogo onClick={toggleHome} to="/">
              {" "}
              <Logonot>KAPtex</Logonot>
              <img
                style={{ marginLeft: 5, marginRight: 5 }}
                width="30"
                src={logimg}
                alt="logo"
              />
              <br />
              <Logonot> auto service</Logonot>
            </Navlogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="garanty"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Гарантия
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Контакты
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Услуги
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="usaaa"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true"
                >
                  Галерея
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  to="Signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/chat"> chat</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
