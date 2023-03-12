import React from "react";
import * as S from "./styles";
import VidaJovemLogo from "../../assets/vida_jovem_logo.png";
import VidaJovemMiniLogo from "../../assets/vida_jovem_mini_logo.png";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

export function Header({ links, isOpenMenuMobile, setIsOpenMenuMobile }: any) {
  const navigate = useNavigate();

  return (
    <>
      <S.HeaderFull>
        <S.CenterHeader>
          <div>
            <S.LogoImg
              onClick={() => {
                navigate("/");
                setIsOpenMenuMobile(false);
              }}
              src={VidaJovemLogo}
            />
            <S.LogoMiniImg
              onClick={() => {
                navigate("/");
                setIsOpenMenuMobile(false);
              }}
              src={VidaJovemMiniLogo}
            />
          </div>
          <S.LinksContainer isOpenMenuMobile={isOpenMenuMobile}>
            {links?.map((link: any) =>
              link.button ? (
                <S.LinkButton
                  sx={{
                    minHeight: "auto",
                  }}
                  onClick={(e) => {
                    link.onClick(e);
                    setIsOpenMenuMobile(false);
                  }}
                >
                  {link.name}
                </S.LinkButton>
              ) : (
                <S.Link
                  sx={{
                    minHeight: "auto",
                  }}
                  onClick={(e) => {
                    link.onClick(e);
                    setIsOpenMenuMobile(false);
                  }}
                >
                  {link.name}
                </S.Link>
              )
            )}
          </S.LinksContainer>
          <S.IconButtonContainer>
            <IconButton
              onClick={() => setIsOpenMenuMobile(!isOpenMenuMobile)}
              sx={{ width: 40, height: 40 }}
            >
              <MenuIcon sx={{ color: "#fff", fontSize: 27 }} />
            </IconButton>
          </S.IconButtonContainer>
        </S.CenterHeader>
      </S.HeaderFull>
      <S.BackgroundLinks
        onClick={() => setIsOpenMenuMobile(false)}
        isOpenMenuMobile={isOpenMenuMobile}
      />
    </>
  );
}
