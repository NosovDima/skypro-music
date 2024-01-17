import * as S from "../Filter/Filter.styles"
import "./BtnStyles.css"
import { useState } from "react";



function AuthorButton({ onClick, isActive }) {
  return (
    <S.FilterButton
      className={`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}
      onClick={onClick}
    >
      исполнителю
    </S.FilterButton>
  );
}

function AuthorFilterOptions() {
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const toggleOptionsVisibility = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  return (
    <div>
       <AuthorButton onClick={toggleOptionsVisibility} />
      {isOptionsVisible && (
        <S.FilterFrameAuthor>
          <S.FilterOptions>
            <S.Dropdown href="http://">Calvin Harris</S.Dropdown>
            <S.Dropdown href="http://">Tom Boxer</S.Dropdown>
            <S.Dropdown href="http://">Ali Bakgor</S.Dropdown>
            <S.Dropdown href="http://">minthaze</S.Dropdown>
            <S.Dropdown href="http://">Стоункат</S.Dropdown>
            <S.Dropdown href="http://">Blue Foundation</S.Dropdown>
          </S.FilterOptions>
        </S.FilterFrameAuthor>
      )}
    </div>
  );
}

export default AuthorFilterOptions;