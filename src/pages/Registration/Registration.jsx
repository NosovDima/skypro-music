import * as S from "../Login/LoginStyles"
import { Link } from "react-router-dom";

export const Registration = () => {
  return (
    <S.LoginBox>
      <Link to="/Login">
      <S.LoginImg src="img/logo_modal.png" alt="" />
      </Link>
      <S.LoginInputEmail placeholder="Почта" type="text" />
      <S.LoginInputPassword placeholder="Пароль" type="text" />
      <S.LoginInputPasswordRepeat placeholder="Повторите пароль" type="text" />
      <Link to="/Login">
        <S.LoginButtonIn>Зарегистрироваться</S.LoginButtonIn>
      </Link>
    </S.LoginBox>

  );
};