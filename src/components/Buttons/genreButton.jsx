import * as S from "../Filter/Filter.styles"
import "./btnStyles.css"



function GenreButton({onClick, isActive}) {

    const handleButtonClick = () => {
      onClick(); 
    };
  
      return (
        <S.FilterButton onClick={handleButtonClick} 
        className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>жанру</S.FilterButton>
      );
    }
  
    export default GenreButton