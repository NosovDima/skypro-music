import * as S from "./PlayList.styles"
import { useEffect } from "react";
import { useState } from "react";
import ContentLoader from "react-content-loader"


export const playLists = [
  {
    id: 1,
    name: "day's playlist",
    src: "img/playlist01.png",
  },
  {
    id: 2,
    name: "100 dance hits",
    src: "img/playlist02.png",
  },
  {
    id: 3,
    name: "indie music",
    src: "img/playlist03.png",
  }
]

const SideBarSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={250}
    height={150}
    viewBox="0 0 250 150"
    backgroundColor="#f2f2f2"
    foregroundColor="#c47878"
    spacing={1}
  >

    <rect x="1" y="10" rx="0" ry="0" width="250" height="150" />
  </ContentLoader>
);



export const PlayList  = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); 
  }, []);

  
  return ( 
    <S.SidebarBlock>
      <S.SidebarList>
        {isLoading ? (
          <S.SideBarSkeleton>
            {[...Array(3)].map((_, index) => (
              <SideBarSkeleton key={index} className="skeleton-element" />
            ))}
          </S.SideBarSkeleton>
        ) : (
          playLists.map((playListItem) => (
            <S.SidebarItem key={playListItem.id}>
            <S.SidebarLink to={`/category/${playListItem.id}`}>
              <S.SidebarImg
               src={playListItem.src}
               alt={playListItem.name}
              />
            </S.SidebarLink>
          </S.SidebarItem>
          ))
          )}
        </S.SidebarList>
      </S.SidebarBlock>
    );
  };
  

export default PlayList ;
