// import "./Filter.css";
import { useState } from "react";
import AuthorFilterOptions from "../Buttons/AuthorFilterOptions";
import GenreFilterOptions from "../Buttons/GenreFilterOptions";
import YearFilterOptions from "../Buttons/YearFilterOptions";
import AuthorButton from "../Buttons/authorButton";
import YearButton from "../Buttons/yearButton";
import GenreButton from "../Buttons/genreButton"; 
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
      <S.FilterContainer>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.ButtonBlock> <AuthorButton onClick={() => {toggleVisibility("author"); handleButtonClick() }} isActive={isActive}/>
      {visible === "author" && <AuthorFilterOptions/>}
      <YearButton onClick={() => toggleVisibility("year")}/>
      {visible === "year" && <YearFilterOptions/>}
      <GenreButton onClick={() => {toggleVisibility("genre"); handleButtonClick()}}/>
      {visible === "genre" && <GenreFilterOptions/>}
      </S.ButtonBlock>
    </S.FilterContainer>


        );
    }
    
    export default Filter; 