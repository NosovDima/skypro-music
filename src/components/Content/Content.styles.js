import styled from 'styled-components';

export const MainContent  = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;`


  
export const ContentTitle  = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;`


export const PlaylistTitle01  = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
width: 447px;`



export const PlaylistTitle02  = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
width: 321px;`


export const PlaylistTitle03  = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
width: 245px;;`


export const PlaylistTitle04  = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
width: 60px;
text-align: end`

  
export const PlaylistTitleSVG  = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;`

export const ContentPlaylist  = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: auto;`
  
export const Skeleton  = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;`

export const PlaylistItem   = styled.div`
width: 100%;
display: block;
margin-bottom: 12px;`

  
export const PlaylistTrack  = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;`

export const TrackTitle  = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
width: 447px;`
  
export const TrackTitleImage  = styled.div`
width: 51px;
height: 51px;
padding: 16px;
background: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 17px;`

export const TrackTitleSVG = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;`
  
export const TrackTitleText = styled.div`
// color: #ffffff;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
`


export const TrackAuthor  = styled.div`
width: 321px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`

export const TrackTitleLink  = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
`


export const TrackTitleSpan  = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4e4e4e;
`

export const TrackAuthorLink  = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
text-align: left;
`



export const TrackAlbum = styled.div`
width: 245px;
`

export const TrackAlbumLink  = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`
export const TrackTime  = styled.div`

`
export const TrackTimeSVG = styled.svg`
width: 14px;
height: 12px;
margin-right: 17px;
fill: transparent;
stroke: #696969;
`
export const TrackTimeText  = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`