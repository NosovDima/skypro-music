import * as S from "./Search.styles.js"

function Search() {
    return ( 
        <S.CenterblockSearch>
              <S.SearchSVG>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </S.SearchSVG>
              <S.SearchText
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </S.CenterblockSearch>


        );
    }
    
    export default Search;     