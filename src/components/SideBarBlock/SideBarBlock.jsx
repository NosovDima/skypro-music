import "./SideBarBlock.css";
import  { useState, useEffect } from "react";
import ContentLoader from "react-content-loader"






const SideBarSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={250}
    height={150}
    viewBox="0 0 1107 200"
    backgroundColor="#f2f2f2"
    foregroundColor="#c47878"
    spacing={1}
  >  
    <rect x="400" y="10" rx="0" ry="0" width="250" height="150" />
  </ContentLoader>
);



const SideBarBlock = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500000); 
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
            {/* Ваш остальной контент, который отображается после загрузки */}
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </a>
            </div>
            {/* Остальные элементы */}
          </>
        )}
      </div>
    </div>
  );
};

export default SideBarBlock;  