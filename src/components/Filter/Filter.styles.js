import styled from 'styled-components';


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
gap: 15px;
align-items: center;`



export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid;
border-radius: 60px;
padding: 6px 20px;
position: relative`

export const FilterBox = styled.div`
display: flex;
gap: 15px;
align-items: center;
`



export const FilterFrameAuthor = styled.div`
position: relative
max-height: 305px;
max-width: 248px;
padding: 34px;
position: absolute;
background-color: #313131;
border-radius: 12px;
z-index: 2;
bottom: 590px;`



export const FilterFrameGenre = styled.div`
max-height: 305px;
max-width: 248px;
padding: 34px;
position: absolute;
background-color: #313131;
border-radius: 12px;
z-index: 2;
bottom: 590px;
`

export const FilterFrameYear = styled.div`
max-height: 305px;
max-width: 248px;
padding: 34px;
position: absolute;
background-color: #313131;
border-radius: 12px;
z-index: 2;
bottom: 590px;`


export const FilterOptions = styled.ul`
height: 160px;
overflow-y: auto;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
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


export const Dropdown = styled.a`
 color: #FFF;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-decoration: none;
  
  &:hover {
    color: #B672FF;
    text-decoration-line: underline;

  }`


