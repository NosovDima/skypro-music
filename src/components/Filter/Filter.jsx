import "./Filter.css";
import { useState } from "react";
import AuthorFilterOptions from "../Buttons/AuthorFilterOptions";
import GenreFilterOptions from "../Buttons/GenreFilterOptions";
import YearFilterOptions from "../Buttons/YearFilterOptions";
import AuthorButton from "../Buttons/authorButton";
import YearButton from "../Buttons/yearButton";
import GenreButton from "../Buttons/genreButton"; 

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
      <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="button__block"> <AuthorButton onClick={() => {toggleVisibility("author"); handleButtonClick() }} isActive={isActive}/>
      {visible === "author" && <AuthorFilterOptions/>}
      <YearButton onClick={() => toggleVisibility("year")}/>
      {visible === "year" && <YearFilterOptions/>}
      <GenreButton onClick={() => {toggleVisibility("genre"); handleButtonClick()}}/>
      {visible === "genre" && <GenreFilterOptions/>}
      </div>
    </div>


        );
    }
    
    export default Filter; 