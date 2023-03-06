import styled from "styled-components";
import { colors } from "../../utils/colors";

import { MenuItem, SxProps } from "@mui/material";

export const HeaderFull = styled.header`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple};
`;

export const CenterHeader = styled.div`
  padding: 0 4%;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: row;
  align-items: center;
`;

export const LinkButton = styled(MenuItem)`
  cursor: pointer !important;
  border: none !important;
  font-size: 15px !important;
  font-weight: 500 !important;
  font-family: "Rubik" !important;
  padding: 7px 22px !important;
  margin-left: 20px !important;
  border-radius: 999px !important;
  background-color: ${colors.yellow} !important;
  color: #fff !important;
`;

export const Link = styled(MenuItem)`
  padding: 4px 8px !important;
  cursor: pointer !important;
  color: #fff !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  font-family: "Rubik" !important;
  border-radius: 5px !important;
`;

export const LogoImg = styled.img`
  cursor: pointer;
  width: 200px;
  @media screen and (max-width: 1039px) {
    display: none;
  }
`;

export const LogoMiniImg = styled.img`
  cursor: pointer;
  width: 60px;
  display: none;
  @media screen and (max-width: 1039px) {
    display: flex;
  }
`;
