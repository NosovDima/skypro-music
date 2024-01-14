import { useState } from "react";
import * as S from "./MainNav.styles"
 
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
                  <S.MenuLink href="#">Главное</S.MenuLink>
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




// import { createGlobalStyle} from "styled-components";
// import "./App.styles.js";
// import * as S from "./App.styles.js"
// import MediaPlayer from "./components/MediaPlayer/MediaPlayer"; 
// import MainNav from "./components/MainNav/MainNav";
// import Search from "./components/Search/Search";
// import Filter from "./components/Filter/Filter";
// import Content from "./components/Content/Content";
// import SideBarPersonal from "./components/SideBarPersonal/SideBarPersonal";
// import SideBarBlock from "./components/SideBarBlock/SideBarBlock";


// const GlobalStyle = createGlobalStyle`

// * {
//   margin: 0;
//   padding: 0;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
// }

// *:before,
// *:after {
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
// }

// a,
// a:visited {
//   text-decoration: none;
//   font-family: "StratosSkyeng", sans-serif;
//   cursor: pointer;
// }

// button,
// ._btn {
//   cursor: pointer;
// }

// ul li {
//   list-style: none;
// }

// @font-face {
//   font-family: "StratosSkyeng";
//   src: local("StratosSkyeng"), local("StratosSkyeng"),
//     url("../public/fonts/StratosSkyeng.woff2") format("woff2"),
//     url("../public/fonts/StratosSkyeng.woff") format("woff");
//   font-weight: 400;
//   font-style: normal;
// }

// html,
// body {
//   width: 100%;
//   height: 100%;
//   font-family: "StratosSkyeng", sans-serif;
//   color: #ffffff;
  
// } `

// function App() {


//   return (
    
//     <> 
//     <S.GlobalStyle />
//     <S.Wrapper>
//       <S.Container>
//         <S.Main>
//           <S.MainNav />
//           <S.MainCenterblock>
//             <S.Search />
//             <S.CenterblockH2>Треки</S.CenterblockH2>
//             <S.Filter />
//             <S.Content />
//           </S.MainCenterblock>
//           <S.MainSidebar>
//            <S.SideBarPersonal />
//            <S.SideBarBlock />
            
//           </S.MainSidebar>
//         </S.Main>
//         <S.MediaPlayer />
//         <S.Footer></S.Footer>
//       </S.Container>
//     </S.Wrapper>
//     </>
//   );
// }
// export default App;







