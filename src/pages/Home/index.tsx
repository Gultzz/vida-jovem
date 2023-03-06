import React from "react";
import * as S from "./styles";

interface ICard {
  title: string;
  benefits: string[];
  price: number;
  main: 1 | 2 | 3;
}

function Home() {
  function filterCards(itens: ICard[]) {
    let array: ICard[] = [];
    itens.forEach((item) => {
      switch (item.main) {
        case 1:
          array[1] = item;
          break;
        case 2:
          array[2] = item;
          break;
        case 3:
          array[0] = item;
          break;
      }
    });
    return array;
  }

  const cards: ICard[] = filterCards([
    {
      title: "Sócio Bronze",
      benefits: [
        "Ganha boné e camiseta do clube",
        "Ganha xícara do clube",
        "Participa do sorteio mensal",
      ],
      price: 14.9,
      main: 3,
    },
    {
      title: "Sócio Ouro",
      benefits: [
        "Ganha boné e camiseta do clube",
        "Ganha xícara do clube",
        "Participa do sorteio mensal",
      ],
      price: 29.9,
      main: 1,
    },
    {
      title: "Sócio Prata",
      benefits: [
        "Ganha boné e camiseta do clube",
        "Ganha xícara do clube",
        "Participa do sorteio mensal",
      ],
      price: 49.9,
      main: 2,
    },
  ]);

  return (
    <S.ContainerFullPage>
      <S.CenterPage>
        <S.ContainerSocio>
          <S.SectionsTitle>Seja Sócio</S.SectionsTitle>
          <S.ContainerContentSocio>
            {cards.map((item) => (
              <S.CardContinerSocio main={item.main}>
                <S.CardTitle>{item?.title}</S.CardTitle>
                <S.BenefitsContainer>
                  {item.benefits.map((bnft) => (
                    <S.BenefitCard>
                      <S.BenefitText>{bnft}</S.BenefitText>
                    </S.BenefitCard>
                  ))}
                </S.BenefitsContainer>
                <S.ButtonPrice>
                  R$ {item.price.toFixed(2).replace(".", ",")}
                </S.ButtonPrice>
              </S.CardContinerSocio>
            ))}
          </S.ContainerContentSocio>
        </S.ContainerSocio>
      </S.CenterPage>
    </S.ContainerFullPage>
  );
}

export default Home;
