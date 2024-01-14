import styled from 'styled-components';
// .centerblock__filter {
// display: -webkit-box;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-orient: horizontal;
// -webkit-box-direction: normal;
// -ms-flex-direction: row;
// flex-direction: row;
// -webkit-box-align: center;
// -ms-flex-align: center;
// align-items: center;
// margin-bottom: 51px;
// }


// .filter__options {
// height: 160px;
// overflow-y: auto;


// display: flex;
// flex-direction: column;
// align-items: flex-start;
// gap: 10px;

// font-weight: 400;
// font-size: 20px;
// line-height: 24px;
// text-decoration-line: underline;
// color: #B672FF;
// padding: 20px;
// margin: 0;

// }

// ::-webkit-scrollbar {
//   width: 8px; 
// }


// ::-webkit-scrollbar-thumb {
//   background-color: #ffffff; 
//   border-radius: 40px; 
// }


// ::-webkit-scrollbar-track {
//   background-color: #313131;
//   border-radius: 4px;
// }



export const FilterContainer = styled.div`
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
margin-bottom: 51px;`


export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;`

export const ButtonBlock = styled.div`
display: flex;
gap: 10px;
align-items: center;`

export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid;
border-radius: 60px;
padding: 6px 20px;`



export const FilterFrameAuthor = styled.div`
max-height: 305px;
max-width: 248px;
padding: 34px;
position: absolute;
background-color: #313131;
border-radius: 12px;
z-index: 2;
bottom: 530px;`



export const FilterFrameGenre = styled.div`
max-height: 305px;
max-width: 248px;
padding: 34px;
position: absolute;
background-color: #313131;
border-radius: 12px;
z-index: 2;
bottom: 530px;`

export const FilterFrameYear = styled.div`
max-height: 305px;
max-width: 248px;
padding: 34px;
position: absolute;
background-color: #313131;
border-radius: 12px;
z-index: 2;
bottom: 530px;;`


export const FilterOptions = styled.ul`
height: 160px;
overflow-y: auto;




display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;

font-weight: 400;
font-size: 20px;
line-height: 24px;
text-decoration-line: underline;
color: #B672FF;
padding: 20px;
margin: 0;
&::-webkit-scrollbar {
  width: 8px;
}

&::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border-radius: 40px;
}

&::-webkit-scrollbar-track {
  background-color: #313131;
  border-radius: 4px;
}`


export const Dropdown = styled.li`
font-weight: 400;
font-size: 20px;
line-height: 24px;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #B672FF;
font-family: StratosSkyeng;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;`


