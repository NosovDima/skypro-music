import * as S from "./SideBarPersonal.styles"

function SideBarPersonal() {
    return ( 
        <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <S.LogoutSVG alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </S.LogoutSVG>
        </S.SidebarIcon>
      </S.SidebarPersonal>
        );
    }
    
    export default SideBarPersonal;  