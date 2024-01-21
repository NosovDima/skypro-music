import { useState } from "react";
import * as S from "./MainNav.styles"
// import { MenuLink } from "react-router-dom";
 
  const MainNav = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleVisibility = () => setVisible(!visible);


    

    return ( 

        <S.MainNav>
            <S.NavLogo>
              <S.LogoImage src="img/logo.png" alt="logo" />
            </S.NavLogo>
            <S.NavBurger onClick={toggleVisibility}>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
            </S.NavBurger>
            {visible && (
            <S.NavMenu>
              <S.MenuList>
                <S.MenuItem>
                  <S.MenuLink to="/registration">Главное</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink href="#">Мой плейлист</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink href="../signin.html">Войти</S.MenuLink>
                </S.MenuItem>
              </S.MenuList>
            </S.NavMenu>
            )}
          </S.MainNav>



        );
}

export default MainNav;








