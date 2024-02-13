import { createGlobalStyle} from "styled-components";
import "./App.styles.js";
import * as S from "./App.styles.js"
import { AppRoutes } from "./routes.jsx";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/fonts/StratosSkyeng.woff2") format("woff2"),
    url("/fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
  
} `

export function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    localStorage.setItem('login', 'SetLogin');
    const getuser = localStorage.getItem('login');
    setUser(getuser);
  };

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <AppRoutes user={user} setUser={setUser} onClick={handleLogin} />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
