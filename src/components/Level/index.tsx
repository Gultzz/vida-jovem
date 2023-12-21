import React from "react";
import * as S from "./styles";

function Level({
  value = 0,
  onlyProgress,
}: {
  value?: number;
  onlyProgress?: boolean;
}) {
  if (onlyProgress) {
    return (
      <S.ContainerOnlyProgress>
        <S.ProgressOnly />
        <S.LinesContainer>
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
        </S.LinesContainer>
      </S.ContainerOnlyProgress>
    );
  }
  return (
    <S.Container>
      <S.Progress value={value} />
      <S.LinesContainer>
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
      </S.LinesContainer>
    </S.Container>
  );
}

export default Level;
