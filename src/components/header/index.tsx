import React from "react";
import * as S from "./styles";
import VidaJovemLogo from "../../assets/vida_jovem_logo.png";
import VidaJovemMiniLogo from "../../assets/vida_jovem_mini_logo.png";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  function documentToScoll(e: any, id: string) {
    e.preventDefault();
    let doc = document.getElementById(id);
    doc && doc.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <S.HeaderFull>
      <S.CenterHeader>
        <div>
          <S.LogoImg onClick={() => navigate("/")} src={VidaJovemLogo} />
          <S.LogoMiniImg
            onClick={() => navigate("/")}
            src={VidaJovemMiniLogo}
          />
        </div>
        <S.LinksContainer>
          <S.Link onClick={(e) => documentToScoll(e, "sejasocio")}>
            Seja Sócio
          </S.Link>
          <S.Link onClick={(e) => documentToScoll(e, "galeria")}>
            Galeria
          </S.Link>
          <S.Link onClick={(e) => documentToScoll(e, "quemsomos")}>
            Quem Somos
          </S.Link>
          <S.Link onClick={(e) => documentToScoll(e, "contato")}>
            Contato
          </S.Link>
          <S.LinkButton onClick={() => navigate("/score")}>
            Pontuação
          </S.LinkButton>
        </S.LinksContainer>
      </S.CenterHeader>
    </S.HeaderFull>
  );
}
