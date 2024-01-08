import "./Content.css";
import  { useState, useEffect } from "react";
// import React from "react"
import ContentLoader from "react-content-loader"



const TrackSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={1107}
    height={50}
    viewBox="0 0 1107 50"
    backgroundColor="#f2f2f2"
    foregroundColor="#c47878"
    spacing={1}
  >
    <rect x="802" y="25" rx="5" ry="5" width="305" height="19" /> 
    <rect x="481" y="25" rx="5" ry="5" width="271" height="19" />
    <rect x="65" y="25" rx="5" ry="5" width="356" height="19" />  
    <rect x="1" y="10" rx="0" ry="0" width="51" height="51" />
  </ContentLoader>
);

const Content = () => {

  const [isLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
    }, 500000); 
  }, []);



    return ( 
      <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      
      <div className="content__playlist playlist">
        {isLoading ? <div className="skeleton">
      {[...Array(15)].map((_, index) => (
        <TrackSkeleton key={index} className="skeleton-element" />
      ))}
    </div> : <><div className="playlist__item"> 
            <div className="playlist__track track">
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://"
                      >Elektro <span className="track__title-span"></span></a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://"
                    >Dynoro, Outwork, Mr. Gee</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Elektro</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >I’m Fire <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://"
                  >Ali Bakgor</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">I’m Fire</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">2:22</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Non Stop
                      <span className="track__title-span">(Remix)</span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://"
                  >Стоункат, Psychopath</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">Non Stop</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">4:12</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Run Run
                      <span className="track__title-span"
                      >(feat. AR/CO)</span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://"
                  >Jaded, Will Clarke, AR/CO</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">Run Run</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">2:54</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Eyes on Fire
                      <span className="track__title-span"
                      >(Zeds Dead Remix)</span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://"
                  >Blue Foundation, Zeds Dead</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"
                  >Eyes on Fire</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">5:20</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Mucho Bien
                      <span className="track__title-span"
                      >(Hi Profile Remix)</span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://"
                  >HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">Mucho Bien</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">3:41</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Knives n Cherries
                      <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">minthaze</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"
                  >Captivating</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Knives n Cherries
                      <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">minthaze</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"
                  >Captivating</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Knives n Cherries
                      <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">minthaze</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"
                  >Captivating</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Knives n Cherries
                      <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">minthaze</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"
                  >Captivating</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Knives n Cherries
                      <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">minthaze</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"
                  >Captivating</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Knives n Cherries
                      <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">minthaze</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"
                  >Captivating</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Knives n Cherries
                      <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">minthaze</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"
                  >Captivating</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >How Deep Is Your Love
                      <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://"
                  >Calvin Harris, Disciples</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"
                  >How Deep Is Your Love</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">3:32</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://"
                    >Morena <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">Tom Boxer</a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"
                  >Soundz Made in Romania</a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">3:36</span>
                </div>
              </div>
            </div><div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      <span className="track__title-span"></span></a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://"></a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://"></a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text"></span>
                </div>
              </div>
            </div></>

    }
      </div>
    </div>
      );
    }
    
    export default Content; 