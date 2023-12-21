import styled from "styled-components";

export const PercentageText = styled.p`
  font-size: 16px;
  margin-left: 208px;
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 99px;
  width: 200px;
  height: 12px;
  background-color: #383838;
  display: flex;
`;

export const ContainerOnlyProgress = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 99px 0 0 99px;
  width: 100px;
  height: 12px;
  background-color: #383838;
  display: flex;
`;

export const ProgressOnly = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #fff;
`;

export const Progress = styled.div<{value: number}>`
  width: ${({value}) => value}%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #fff;
`;

export const LinesContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 19px;
  bottom: 0;
  left: 19px;
`;

export const Line = styled.div`
  width: 1px;
  height: 6px;
  background-color: #737373;
`;
