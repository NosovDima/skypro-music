import * as S from "../App.styles"
import MediaPlayer from "../components/MediaPlayer/MediaPlayer"
import MainNav from "../components/MainNav/MainNav";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import Content from "../components/Content/Content";
import SideBarPersonal from "../components/SideBarPersonal/SideBarPersonal";
import SideBarBlock from "../components/SideBarBlock/SideBarBlock";



export function Main() {




    return (
    
    <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav/>
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
      </S.Wrapper>)

}