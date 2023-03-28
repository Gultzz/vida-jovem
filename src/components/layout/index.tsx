import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../header";
import * as S from "./styles";

interface ILayout {
  children?: any;
}

function Layout({ children }: ILayout) {
  const navigate = useNavigate();

  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

  async function documentToScoll(e: any, id: string) {
    if (window.location.pathname !== "/") {
      await navigate("/");
    }
    e.preventDefault();
    let doc = document.getElementById(id);
    doc && doc.scrollIntoView({ behavior: "smooth" });
  }

  const links = [
    {
      name: "Seja Sócio",
      button: false,
      onClick: (e: any) => documentToScoll(e, "sejasocio"),
    },
    {
      name: "Galeria",
      button: false,
      onClick: (e: any) => documentToScoll(e, "galeria"),
    },
    {
      name: "Quem Somos",
      button: false,
      onClick: (e: any) => documentToScoll(e, "quemsomos"),
    },
    {
      name: "Contato",
      button: false,
      onClick: (e: any) => documentToScoll(e, "contato"),
    },
    {
      name: "Pontuação",
      button: true,
      onClick: () => navigate("/score"),
    },
  ];

  return (
    <S.FullPage>
      <Header
        links={links}
        isOpenMenuMobile={isOpenMenuMobile}
        setIsOpenMenuMobile={setIsOpenMenuMobile}
      />
      <S.ChildrenContainer>{children}</S.ChildrenContainer>
    </S.FullPage>
  );
}

export default Layout;
