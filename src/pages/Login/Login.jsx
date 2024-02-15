import * as S from "./LoginStyles"
import { Link } from "react-router-dom";
import { useState } from "react";



export const Login = ({onClick}) => {

    const [user, setUser] = useState(null);
  
    const handleLogin = () => setUser({ login: "SetLogin" },
    localStorage.setItem('login', 'SetLogin')
    );
    return (
      <S.LoginBox>
         <Link to="/Registration">
        <S.LoginImg src="img/logo_modal.png" alt="" />
        </Link>
        <S.LoginInputEmail placeholder="Почта" type="text" />
        <S.LoginInputPassword placeholder="Пароль" type="text" />
        <S.LinkS onClick={onClick} to="/">
        <S.LoginButtonIn onClick={handleLogin}>Войти</S.LoginButtonIn>
        {console.log(user)}
      </S.LinkS>
      <Link to="/Registration">
        <S.LoginButtonReg>Зарегистрироваться</S.LoginButtonReg>
      </Link>
    </S.LoginBox>
  );
};