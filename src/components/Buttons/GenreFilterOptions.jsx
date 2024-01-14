import * as S from "../Filter/Filter.styles"
import "./btnStyles.css"
function GenreFilterOptions() {
    return (
        <S.FilterFrameGenre>
            <S.FilterOptions>
                <S.Dropdown><a href="http://">Hip-Hop</a></S.Dropdown>
                <S.Dropdown><a href="http://">Rock</a></S.Dropdown>
                <S.Dropdown><a href="http://">Classic</a></S.Dropdown>
                <S.Dropdown><a href="http://">Elektro</a></S.Dropdown>
            </S.FilterOptions>
        </S.FilterFrameGenre>
    );
  };

export default GenreFilterOptions;