import  { useState, useEffect } from "react";
import ContentLoader from "react-content-loader"
import * as S from "./Content.styles";



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

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); 
  }, []);



    return ( 
      <S.MainContent>
      <S.ContentTitle>
        <S.PlaylistTitle01>Трек</S.PlaylistTitle01>
        <S.PlaylistTitle02>ИСПОЛНИТЕЛЬ</S.PlaylistTitle02>
        <S.PlaylistTitle03>АЛЬБОМ</S.PlaylistTitle03>
        <S.PlaylistTitle04>
          <S.PlaylistTitleSVG>
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSVG>
        </S.PlaylistTitle04>
      </S.ContentTitle>
      
      <S.ContentPlaylist>
        {isLoading ? <S.Skeleton>
      {[...Array(15)].map((_, index) => (
        <TrackSkeleton key={index} className="skeleton-element" />
      ))}
    </S.Skeleton> : <><S.PlaylistItem> 
            <S.PlaylistTrack>
              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSVG alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSVG>
                    </S.TrackTitleImage>
                    <S.TrackTitleText>
                      <S.TrackTitleLink href="http://"
                      >Elektro <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitleText>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="http://"
                    >Dynoro, Outwork, Mr. Gee</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="http://">Elektro</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSVG alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSVG>
                    <S.TrackTimeText>2:22</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>
            </S.PlaylistTrack>
          </S.PlaylistItem>
          <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >I’m Fire <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://"
                  >Ali Bakgor</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">I’m Fire</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>2:22</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Non Stop
                      <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://"
                  >Стоункат, Psychopath</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">Non Stop</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>4:12</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem><S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Run Run
                      <S.TrackTitleSpan
                      >(feat. AR/CO)</S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://"
                  >Jaded, Will Clarke, AR/CO</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">Run Run</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>2:54</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem><S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Eyes on Fire
                      <S.TrackTitleSpan
                      >(Zeds Dead Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://"
                  >Blue Foundation, Zeds Dead</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"
                  >Eyes on Fire</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>5:20</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Mucho Bien
                      <S.TrackTitleSpan
                      >(Hi Profile Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://"
                  >HYBIT, Mr. Black, Offer Nissim, Hi Profile</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">Mucho Bien</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>3:41</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem><S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"
                  >Captivating</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>1:48</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"
                  >Captivating</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>1:48</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"
                  >Captivating</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>1:48</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"
                  >Captivating</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>1:48</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"
                  >Captivating</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>1:48</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"
                  >Captivating</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>1:48</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"
                  >Captivating</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>1:48</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >How Deep Is Your Love
                      <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://"
                  >Calvin Harris, Disciples</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"
                  >How Deep Is Your Love</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>3:32</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://"
                    >Morena <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">Tom Boxer</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"
                  >Soundz Made in Romania</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText>3:36</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSVG>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://">
                      <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSVG alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSVG>
                  <S.TrackTimeText></S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem></>

    }
      </S.ContentPlaylist>
    </S.MainContent>
      );
    }
    
    export default Content; 