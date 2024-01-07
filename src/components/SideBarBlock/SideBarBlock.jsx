import "./SideBarBlock.css";
import  { useState, useEffect } from "react";
import ContentLoader from "react-content-loader"






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
    <div className="sidebar__block">
      <div className="sidebar__list">
        {isLoading ? (
          <div className="SideBarSkeleton">
            {[...Array(3)].map((_, index) => (
              <SideBarSkeleton key={index} className="skeleton-element" />
            ))}
          </div>
        ) : (
          <>
            <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
            <img
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBarBlock;




























    