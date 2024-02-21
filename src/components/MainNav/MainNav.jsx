import { useState } from "react";
import * as S from "./MainNav.styles"
import { Link } from "react-router-dom";
 
  const MainNav = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleVisibility = () => setVisible(!visible);

    const handleLogOut = () => {
      localStorage.removeItem('login')
    }


    

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
                  <S.MenuLink>
                  <Link className="App-link" to="/registration">Главное</Link></S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink onClick={handleLogOut} to="/myPlaylist">Мой плейлист</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                <S.MenuLink onClick={handleLogOut} to="/login">
                  Выйти
                </S.MenuLink>
                </S.MenuItem>
              </S.MenuList>
            </S.NavMenu>
            )}
          </S.MainNav>



        );
}

export default MainNav;








