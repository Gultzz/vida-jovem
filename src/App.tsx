import React from "react";

import Left from "./components/Left";
import Right from "./components/Right";

import * as S from "./styles";

function App() {
  return (
    <S.Screen>
      <Left />
      <Right />
    </S.Screen>
  );
}

export default App;
