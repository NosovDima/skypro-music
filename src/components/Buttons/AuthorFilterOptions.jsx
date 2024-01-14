import * as S from "../Filter/Filter.styles"
import "./btnStyles.css"
function AuthorFilterOptions() {
    return (
        <S.FilterFrameAuthor>
            <S.FilterOptions>
                <S.Dropdown><span href="http://">Calvin Harris</span></S.Dropdown>
                <S.Dropdown><a href="http://">Tom Boxer</a></S.Dropdown>
                <S.Dropdown><a href="http://">Ali Bakgor</a></S.Dropdown>
                <S.Dropdown><a href="http://">minthaze</a></S.Dropdown>
                <S.Dropdown><a href="http://">Стоункат</a></S.Dropdown>
                <S.Dropdown><a href="http://">Blue Foundation</a></S.Dropdown>
            </S.FilterOptions>
        </S.FilterFrameAuthor>
    );
  };

export default AuthorFilterOptions;
