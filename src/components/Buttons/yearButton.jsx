import * as S from "../Filter/Filter.styles"
import "./BtnStyles.css"
import { useState } from "react";




function YearButton({ onClick, isActive }) {
  return (
    <S.FilterButton
      className={`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}
      onClick={onClick}
    >
      исполнителю
    </S.FilterButton>
  );
}

function YearFilterOptions() {
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const toggleOptionsVisibility = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  return (
    <S.FilterBox>
      <YearButton onClick={toggleOptionsVisibility} />
      {isOptionsVisible && (
        <S.FilterFrameYear>
        <S.FilterOptions>
            <S.Dropdown href="http://">2001-2010</S.Dropdown>
            <S.Dropdown href="http://">2010-2020</S.Dropdown>
            <S.Dropdown href="http://">2020-now</S.Dropdown>
        </S.FilterOptions>
    </S.FilterFrameYear>
      )}
    </S.FilterBox>
  );
}

export default YearFilterOptions;




// import * as S from "../Filter/Filter.styles"
// import "./BtnStyles.css"
// import { useState } from "react";



// // {/* <AuthorButton onClick={() => {toggleVisibility("author"); handleButtonClick() }} isActive={isActive}/>
// //       {visible === "author" && <AuthorFilterOptions/>} */}



// const [visible, setVisible] = useState(null)
//   const toggleVisibility = (filter) => {
//     setVisible(visible === filter ? null : filter)
//   }
//   const [isActive, setIsActive] = useState(false);
//   const handleButtonClick = () => {
//     setIsActive(!isActive);
//   };  

// function AuthorButton({ onClick, isActive }) {
//   return (
//     <S.FilterButton
//       className={`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}
//       onClick={onClick}
//     >
//       исполнителю
    
//     <div>
//     <AuthorButton onClick={() => {toggleVisibility("author"); handleButtonClick() }} isActive={isActive}/>
//    {visible === "author" && (
//      <S.FilterFrameAuthor>
//        <S.FilterOptions>
//          <S.Dropdown href="http://">Calvin Harris</S.Dropdown>
//          <S.Dropdown href="http://">Tom Boxer</S.Dropdown>
//          <S.Dropdown href="http://">Ali Bakgor</S.Dropdown>
//          <S.Dropdown href="http://">minthaze</S.Dropdown>
//          <S.Dropdown href="http://">Стоункат</S.Dropdown>
//          <S.Dropdown href="http://">Blue Foundation</S.Dropdown>
//        </S.FilterOptions>
//      </S.FilterFrameAuthor>
//    )}
//  </div>
//  </S.FilterButton>
//   );
// }


// export default AuthorButton;