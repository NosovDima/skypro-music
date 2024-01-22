
import { useState } from "react";
import * as S from "../Filter/Filter.styles";



function Filter() {

      const [visibleAuthor, setVisibleAuthor] = useState(false)
      const [visibleYear, setVisibleYear] = useState(false)
      const [visibleGenre, setVisibleGenre] = useState(false)
    
      const toggleVisibilityAuthor = () => {
        setVisibleAuthor(!visibleAuthor)
        setVisibleGenre(false)
        setVisibleYear(false)
      }
    
      const toggleVisibilityYear = () => {
        setVisibleAuthor(false)
        setVisibleGenre(false)
        setVisibleYear(!visibleYear)
      }
    
      const toggleVisibilityGenre = () => {
        setVisibleAuthor(false)
        setVisibleGenre(!visibleGenre)
        setVisibleYear(false)
      }
    
      return (
        <>
        <S.FilterContainer>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterBox>

          <S.ButtonBlock onClick={toggleVisibilityAuthor} >
            <S.FilterButton $props={visibleAuthor}>
              исполнителю
            </S.FilterButton>
            {visibleAuthor &&
              (<S.FilterFrameAuthor>
                <S.FilterOptions>
                  <S.Dropdown href="http://">Calvin Harris</S.Dropdown>
                  <S.Dropdown href="http://">Tom Boxer</S.Dropdown>
                  <S.Dropdown href="http://">Ali Bakgor</S.Dropdown>
                  <S.Dropdown href="http://">minthaze</S.Dropdown>
                  <S.Dropdown href="http://">Стоункат</S.Dropdown>
                  <S.Dropdown href="http://">Blue Foundation</S.Dropdown>
                </S.FilterOptions>
              </S.FilterFrameAuthor>)}
          </S.ButtonBlock>
    
          <S.ButtonBlock onClick={toggleVisibilityYear}>
            <S.FilterButton $props={visibleYear}>
              году выпуска
            </S.FilterButton>
            {visibleYear &&
              (<S.FilterFrameYear>
                <S.FilterOptions>
                    <S.Dropdown href="http://">2001-2010</S.Dropdown>
                    <S.Dropdown href="http://">2010-2020</S.Dropdown>
                    <S.Dropdown href="http://">2020-now</S.Dropdown>
                </S.FilterOptions>
            </S.FilterFrameYear>)}
          </S.ButtonBlock>
    
          <S.ButtonBlock onClick={toggleVisibilityGenre}>
            <S.FilterButton $props={visibleGenre}>
              жанру
            </S.FilterButton>
            {visibleGenre && (
              <S.FilterFrameGenre>
              <S.FilterOptions>
                  <S.Dropdown href="http://">Hip-Hop</S.Dropdown>
                  <S.Dropdown href="http://">Rock</S.Dropdown>
                  <S.Dropdown href="http://">Classic</S.Dropdown>
                  <S.Dropdown href="http://">Elektro</S.Dropdown>
              </S.FilterOptions>
          </S.FilterFrameGenre>)}
          
          </S.ButtonBlock>
          </S.FilterBox>
          </S.FilterContainer>
        </>
      );
    };
    
    export default Filter













