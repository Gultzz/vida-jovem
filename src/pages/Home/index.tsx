import React from "react";
import { colors } from "../../utils/colors";
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
      price: 49.9,
      main: 1,
    },
    {
      title: "Sócio Prata",
      benefits: [
        "Ganha boné e camiseta do clube",
        "Ganha xícara do clube",
        "Participa do sorteio mensal",
      ],
      price: 29.9,
      main: 2,
    },
  ]);

  return (
    <S.ContainerFullPage>
      <S.Section id="sejasocio">
        <S.CenterPage>
          <S.ContainerBase>
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
          </S.ContainerBase>
        </S.CenterPage>
      </S.Section>
      <S.Section id="galeria" color={colors.purple}>
        <S.CenterPage>
          <S.ContainerBase>
            <S.SectionsTitleWhite>Galeria</S.SectionsTitleWhite>
            <S.ContainerContentGaleria>
              <S.ContainerImage>
                <S.Image src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?pid=ImgDet&rs=1" />
                <S.ImageTitle>Imagem 1</S.ImageTitle>
                <S.ImageText>
                  Texto na imagem 2 porque estou testando
                </S.ImageText>
              </S.ContainerImage>
              <S.ContainerImage>
                <S.Image src="https://th.bing.com/th/id/OIP.0gb8a1wWDrR3DZiUXGFL-AHaFj?w=220&h=180&c=7&r=0&o=5&pid=1.7" />
                <S.ImageTitle>Imagem 2</S.ImageTitle>
                <S.ImageText>
                  Texto na imagem 2 porque estou testando Texto na imagem 2
                  porque estou testando Texto na imagem 2 porque estou testando
                </S.ImageText>
              </S.ContainerImage>
              <S.ContainerImage>
                <S.Image src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?pid=ImgDet&rs=1" />
                <S.ImageTitle>Imagem 1</S.ImageTitle>
                <S.ImageText>
                  Texto na imagem 2 porque estou testando
                </S.ImageText>
              </S.ContainerImage>
              <S.ContainerImage>
                <S.Image src="https://th.bing.com/th/id/OIP.0gb8a1wWDrR3DZiUXGFL-AHaFj?w=220&h=180&c=7&r=0&o=5&pid=1.7" />
                <S.ImageTitle>Imagem 2</S.ImageTitle>
                <S.ImageText>
                  Texto na imagem 2 porque estou testando Texto na imagem 2
                  porque estou testando Texto na imagem 2 porque estou testando
                </S.ImageText>
              </S.ContainerImage>
              <S.ContainerImage>
                <S.Image src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?pid=ImgDet&rs=1" />
                <S.ImageTitle>Imagem 1</S.ImageTitle>
                <S.ImageText>
                  Texto na imagem 2 porque estou testando
                </S.ImageText>
              </S.ContainerImage>
              <S.ContainerImage>
                <S.Image src="https://th.bing.com/th/id/OIP.0gb8a1wWDrR3DZiUXGFL-AHaFj?w=220&h=180&c=7&r=0&o=5&pid=1.7" />
                <S.ImageTitle>Imagem 2</S.ImageTitle>
                <S.ImageText>
                  Texto na imagem 2 porque estou testando Texto na imagem 2
                  porque estou testando Texto na imagem 2 porque estou testando
                </S.ImageText>
              </S.ContainerImage>
            </S.ContainerContentGaleria>
          </S.ContainerBase>
        </S.CenterPage>
      </S.Section>
      <S.Section id="quemsomos">
        <S.CenterPage>
          <S.ContainerBase>
            <S.SectionsTitle>Quem Somos</S.SectionsTitle>
            <S.ContainerContentAbout>
              <S.AboutTitle>Somos os DESBRAVADORES</S.AboutTitle>
              <S.AboutText>
                E quem são os desbravadores? <br />
                <br />
                Meninos e meninas com idades entre 10 e 15 anos, de diferentes
                classes sociais, cor, ou religião. Reunem-se uma vez por semana
                para aprender a desenvolver talentos, habilidades, percepções e
                o gosto pela natureza.
                <br />
                <br /> Vibram com atividades ao ar livre. Gostam de
                acampamentos, caminhadas, escaladas, explorações nas matas e
                cavernas. Sabem cozinhar ao ar livre, fazendo fogo sem fósforo.
                Demonstramos habilidade com a disciplina através de ordem unida,
                e têm a criatividade despertada pelas artes manuais. Combatem,
                também, o uso do fumo, álcool e drogas.
                <br />
                <br /> Trabalham em equipe procurando sempre serem úteis à
                comunidade. Prestam, também, socorro em calamidades e participam
                ativamente de campanhas comunitárias para ajudar pessoas
                carentes. Em tudo o que fazem procuram desenvolver amor a Deus e
                à Pátria e, além disso, fazem muitos amigos!
                <br />
                <br /> O Clube de Desbravadores está presente em mais de 160
                países, com 90.000 sedes e mais de dois milhões de
                participantes. Existem oficialmente desde 1950, como um programa
                oficial da Igreja Adventista do 7º Dia.
                <br />
                <br /> Meninos e meninas de qualquer fé religiosa podem
                participar conosco deste movimento que tira da diversidade, o
                colorido da energia juvenil.
                <br />
                <br />
                <a
                  href="https://igrejas.adventistas.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clique aqui
                </a>{" "}
                e procure um Clube de Desbravadores, em uma Igreja Adventista
                mais próxima de você e terá uma surpresa agradável!
              </S.AboutText>
            </S.ContainerContentAbout>
          </S.ContainerBase>
        </S.CenterPage>
      </S.Section>
      <S.Section id="galeria" color={colors.purple}>
        <S.CenterPage>
          <S.ContainerBase>
            <S.SectionsTitleWhite>Contato</S.SectionsTitleWhite>
            <S.ContainerContentContato></S.ContainerContentContato>
          </S.ContainerBase>
        </S.CenterPage>
      </S.Section>
    </S.ContainerFullPage>
  );
}

export default Home;
