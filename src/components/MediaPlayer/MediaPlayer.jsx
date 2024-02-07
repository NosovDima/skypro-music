import "./MediaPlayer.styles.js";
import  { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import * as S from "./MediaPlayer.styles.js"

const MediaPlayerSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={122}
    height={51}
    viewBox="0 0 122 51"
    backgroundColor="#f2f2f2"
    foregroundColor="#c47878"
    spacing={1}
  >
    
    <rect x="63" y="4" rx="5" ry="5" width="59" height="15" />
    <rect x="63" y="31" rx="5" ry="5" width="59" height="15" />
    <rect x="1" y="0" rx="0" ry="0" width="51" height="51" />
  </ContentLoader>
);

const MediaPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <S.Bar>
      <S.BarContent>
        <S.PlayerProgress></S.PlayerProgress>
        <S.PlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerButtonPrev>
                <S.PlayerButtonPrevSVG alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerButtonPrevSVG>
              </S.PlayerButtonPrev>
              <S.PlayerButtonPlay>
                <S.PlayerButtonPlaySVG alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.PlayerButtonPlaySVG>
              </S.PlayerButtonPlay>
              <S.PlayerButtonNext>
                <S.PlayerButtonNextSVG alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.PlayerButtonNextSVG>
              </S.PlayerButtonNext>
              <S.PlayerButtonRepeat>
                <S.PlayerButtonRepeatSVG alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerButtonRepeatSVG>
              </S.PlayerButtonRepeat>
              <S.PlayerButtonShuffle>
                <S.PlayerButtonShuffleSVG alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerButtonShuffleSVG>
              </S.PlayerButtonShuffle>
            </S.PlayerControls>
            {isLoading ? (
              <S.MediaPlayerSkeleton>
                <MediaPlayerSkeleton className="skeleton-element" />
              </S.MediaPlayerSkeleton>
            ) : (
              <S.PlayerTrack>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySVG alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySVG>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink href="http://">
                      Ты та...
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      Баста
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike className="track-play__like _btn-icon">
                    <S.TrackPlayLikeSVG alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSVG>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike className="track-play__dislike _btn-icon">
                    <S.TrackPlayDislikeSVG
                      alt="dislike"
                    >
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDislikeSVG>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrack>
            )}
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSVG alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSVG>
              </S.VolumeImage>
              <S.VolumeProgress className="volume__progress _btn">
                <S.VolumeProgressLine
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.PlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};

export default MediaPlayer;

