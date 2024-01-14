import * as S from "../Filter/Filter.styles"
import "./btnStyles.css"
function YearFilterOptions() {
    return (
        <S.FilterFrameYear>
            <S.FilterOptions>
                <S.Dropdown><a href="http://">2001-2010</a></S.Dropdown>
                <S.Dropdown><a href="http://">2010-2020</a></S.Dropdown>
                <S.Dropdown><a href="http://">2020-now</a></S.Dropdown>
            </S.FilterOptions>
        </S.FilterFrameYear>
    );
  };

export default YearFilterOptions;