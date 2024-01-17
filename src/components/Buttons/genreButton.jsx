import * as S from "../Filter/Filter.styles"
import "./BtnStyles.css"
import { useState } from "react";


    
    
    
function GenreButton({ onClick, isActive }) {
  return (
    <S.FilterButton
      className={`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}
      onClick={onClick}
      >жанру
      </S.FilterButton>
      );
}
    
function GenreFilterOptions() {
      const [isOptionsVisible, setOptionsVisible] = useState(false);
    
      const toggleOptionsVisibility = () => {
        setOptionsVisible(!isOptionsVisible);
      };
    
      return (
        <S.FilterBox>
          <GenreButton onClick={toggleOptionsVisibility} />
          {isOptionsVisible && (
          <S.FilterFrameGenre>
             <S.FilterOptions>
                 <S.Dropdown href="http://">Hip-Hop</S.Dropdown>
                 <S.Dropdown href="http://">Rock</S.Dropdown>
                 <S.Dropdown href="http://">Classic</S.Dropdown>
                 <S.Dropdown href="http://">Elektro</S.Dropdown>
             </S.FilterOptions>
         </S.FilterFrameGenre>
          )}
        </S.FilterBox>
      );
    }
    
export default GenreFilterOptions;







// return (
//   <S.FilterButton
//     className={`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}
//     onClick={onClick}
//   >
//     исполнителю
//     <div>
//      <AuthorButton onClick={toggleOptionsVisibility} />
//     {isOptionsVisible && (
//       <S.FilterFrameAuthor>
//         <S.FilterOptions>
//           <S.Dropdown href="http://">Calvin Harris</S.Dropdown>
//           <S.Dropdown href="http://">Tom Boxer</S.Dropdown>
//           <S.Dropdown href="http://">Ali Bakgor</S.Dropdown>
//           <S.Dropdown href="http://">minthaze</S.Dropdown>
//           <S.Dropdown href="http://">Стоункат</S.Dropdown>
//           <S.Dropdown href="http://">Blue Foundation</S.Dropdown>
//         </S.FilterOptions>
//       </S.FilterFrameAuthor>
//     )}
//   </div>
//   </S.FilterButton>
// );
// }