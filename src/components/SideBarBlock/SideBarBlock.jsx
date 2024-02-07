import * as S from "./SideBarBlock.styles"
import  { useState, useEffect } from "react";
import ContentLoader from "react-content-loader"
import { PlayList } from "../PlayList/PlayList"







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



const SideBarBlock = () => {
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
          <>
            <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SidebarIMG
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SidebarIMG
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
            <S.SidebarIMG
                src="img/playlist01.png"
                alt="day's playlist"
              />
              </S.SidebarLink>
            </S.SidebarItem>
          </>
        )}
        <PlayList />
      </S.SidebarList>
    </S.SidebarBlock>
  );
};

export default SideBarBlock;




























    