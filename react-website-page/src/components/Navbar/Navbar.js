import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,NavbarContainer, Logo, HotbarIcon, MIcon, NavMenu, PageItem, PageItemBtn, SiteLinks, NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <Logo to='/' onClick={closeMobileMenu}>
              <HotbarIcon />
              GAMES
            </Logo>
            <MIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MIcon>
            <NavMenu onClick={handleClick} click={click}>
              <PageItem>
                <SiteLinks to='/homepage' onClick={closeMobileMenu}>
                  Home
                </SiteLinks>
              </PageItem>
              <PageItem>
                <SiteLinks to='/News' onClick={closeMobileMenu}>
                  News
                </SiteLinks>
              </PageItem>
              <PageItem>
                <SiteLinks to='/Recent Releases' onClick={closeMobileMenu}>
                  Recent Releases
                </SiteLinks>
              </PageItem>
              <PageItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </PageItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    
  );
}

export default Navbar;