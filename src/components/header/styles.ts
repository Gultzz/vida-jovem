import styled from "styled-components";
import { colors } from "../../utils/colors";

import { MenuItem, Menu, SxProps } from "@mui/material";

export const HeaderFull = styled.header`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple};
  z-index: 3;
  @media screen and (max-width: 1039px) {
    position: fixed;
  }
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

export const LinksContainer = styled.div<{ isOpenMenuMobile?: boolean }>`
  display: flex !important;
  gap: 2px !important;
  flex-direction: row !important;
  align-items: center !important;
  overflow: hidden;
  @media screen and (max-width: 1039px) {
    z-index: 2 !important;
    width: ${({ isOpenMenuMobile }) =>
      isOpenMenuMobile ? 300 : 0}px !important;
    height: 100% !important;
    text-align: right !important;
    align-items: end !important;
    position: fixed !important;
    flex-direction: column !important;
    top: 58px !important;
    right: 0 !important;
    background-color: ${colors.purple} !important;
    box-shadow: -2px 2px 3px #0004 !important;
  }
`;

export const BackgroundLinks = styled.div<{ isOpenMenuMobile?: boolean }>`
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #0004;
  z-index: 1;
  @media screen and (max-width: 1039px) {
    display: ${({ isOpenMenuMobile }) => (isOpenMenuMobile ? "flex" : "none")};
  }
`;

export const IconButtonContainer = styled.div`
  display: none;

  @media screen and (max-width: 1039px) {
    display: block;
  }
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
  @media screen and (max-width: 1039px) {
    margin-left: 0 !important;
    width: 100% !important;
    border-radius: 0px !important;
    padding: 12px 22px !important;
  }
`;

export const Link = styled(MenuItem)`
  padding: 4px 8px !important;
  cursor: pointer !important;
  color: #fff !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  font-family: "Rubik" !important;
  border-radius: 5px !important;
  background-color: ${colors.purple} !important;

  @media screen and (max-width: 1039px) {
    width: 100% !important;
    border-radius: 0px !important;
    padding: 12px 22px !important;
  }
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
