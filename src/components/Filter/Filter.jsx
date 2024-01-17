
import { useState } from "react";
// import AuthorFilterOptions from "../Buttons/AuthorFilterOptions";
// import GenreFilterOptions from "../Buttons/GenreFilterOptions";
// import YearFilterOptions from "../Buttons/YearFilterOptions";
import AuthorButton from "../Buttons/AuthorButton";
import YearButton from "../Buttons/YearButton";
import GenreButton from "../Buttons/GenreButton"; 
import * as S from "../Filter/Filter.styles"

function Filter() {

  const [visible, setVisible] = useState(null)
  const toggleVisibility = (filter) => {
    setVisible(visible === filter ? null : filter)
  }
  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };  

    return ( 
      <>
      <S.FilterContainer>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.ButtonBlock> <AuthorButton onClick={() => {toggleVisibility("author"); handleButtonClick() }} isActive={isActive}/>
      {visible === "author" && <AuthorButton/>}
      <YearButton onClick={() => toggleVisibility("year")}/>
      {visible === "year" && <YearButton/>}
      <GenreButton onClick={() => {toggleVisibility("genre"); handleButtonClick()}}/>
      {visible === "genre" && <GenreButton/>}
      </S.ButtonBlock>
    </S.FilterContainer>
    </>


        );
    }
    
    export default Filter; 



