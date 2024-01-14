import * as S from "../Filter/Filter.styles"
import "./btnStyles.css"
function YearButton({onClick, isActive}) {

    const handleButtonClick = () => {
      onClick(); 
    };
  
    return (
      <S.FilterButton onClick={handleButtonClick} 
      className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>году выпуска</S.FilterButton>
    );
  }
  
  export default YearButton