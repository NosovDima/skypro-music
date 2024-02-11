import * as S from "./SideBarPersonal.styles"
import PlayLists from "../PlayListP/PlayListP"
import { useNavigate } from "react-router-dom"

function SideBarPersonal({setUser}) {
  const navigate = useNavigate()

  const handleLogOut = () =>  {
    localStorage.removeItem('user')
    setUser('null')
    navigate('/login')
  }
  
    return (
      <S.MainSidebar>
        <S.SidebarPersonal>
        <S.SidebarPersonalName>Dima</S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleLogOut}>
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