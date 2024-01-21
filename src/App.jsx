import { createGlobalStyle} from "styled-components";
import "./App.styles.js";
import * as S from "./App.styles.js"
import MediaPlayer from "./components/MediaPlayer/MediaPlayer"; 
import MainNav from "./components/MainNav/MainNav";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import Content from "./components/Content/Content";
import SideBarPersonal from "./components/SideBarPersonal/SideBarPersonal";
import SideBarBlock from "./components/SideBarBlock/SideBarBlock";
import { AppRoutes } from "./routes.jsx";


const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/fonts/StratosSkyeng.woff2") format("woff2"),
    url("/fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
  
} `

function App() {


  return (
    
    
    <> 
    
    <GlobalStyle />
    <S.Wrapper>

      <S.Container>
        <S.Main>
        <AppRoutes />
          <MainNav />
          <S.MainCenterblock>
            <Search />
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <Filter />
            <Content />
          </S.MainCenterblock>
          <S.MainSidebar>
           <SideBarPersonal />
           <SideBarBlock />
            
          </S.MainSidebar>
        </S.Main>
        <MediaPlayer />
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
    </>
  );
}
export default App;
