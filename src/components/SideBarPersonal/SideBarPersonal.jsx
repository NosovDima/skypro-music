import * as S from "./SideBarPersonal.styles"
import PlayLists from "../PlayListP/PlayListP"

function SideBarPersonal() {

  const handleLogOut = () =>  {
    localStorage.removeItem('login')
  }
  
    return (
      <S.MainSidebar>
        <S.SidebarPersonal>
        <S.SidebarPersonalName>Dima</S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleLogOut} to="/login">
          <S.LogoutSVG alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </S.LogoutSVG>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
      <PlayLists />
    </S.SidebarBlock>
    </S.MainSidebar>
        );
    }
    
    export default SideBarPersonal;  