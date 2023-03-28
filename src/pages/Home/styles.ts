import styled from "styled-components";
import { colors } from "../../utils/colors";

function filterCards(value: number) {
  switch (value) {
    case 1:
      return 1;
      break;
    case 2:
      return 0.92;
      break;
    case 3:
      return 0.84;
      break;
  }
}

export const ContainerFullPage = styled.div`
  width: 100%;
  min-height: 100%;
`;

export const Section = styled.div<{ color?: string }>`
  background-color: ${({ color }) => color || "#fff"};
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterPage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  padding: 0 4%;
`;

export const ContainerBase = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

export const ContainerContentSocio = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  max-width: 1000px;
  background-color: ${colors.yellow};
  flex-direction: row;
  border-radius: 8px;
  box-shadow: 0 2px 6px #0004;
  gap: 32px;
  padding: 20px 48px;
  @media screen and (max-width: 1039px) {
    width: auto;
    gap: 20px;
    padding: 20px 24px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

export const ContainerContentAbout = styled.div`
  width: 100%;
  gap: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px 48px;
`;

export const ContainerContentGaleria = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  padding: 20px 48px;
`;

export const ContainerContentContato = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  padding: 20px 48px;
`;

export const ContainerImage = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: cover;
`;

export const CardContinerSocio = styled.div<{ main: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
  width: 100%;
  min-width: 260px;
  max-width: 290px;
  height: 100%;
  background-color: #fff;
  border-radius: 6px;
  scale: ${({ main }) => filterCards(main)};
  box-shadow: 0 1px 8px #0004;
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;
  margin-top: 18px;
`;

export const ButtonPrice = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: ${colors.purple};
  margin-top: 15px;
  outline: none;
  border: none;
  border-radius: 3px;
  transition: 0.2s;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  border: 2px solid ${colors.purple};
  :hover {
    box-shadow: 0 1px 8px #0006, inset 0 0px 6px #0004;
    color: ${colors.purple};
    background-color: #fff;
  }
`;

export const BenefitCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.lightYellow};
  padding: 10px;
  width: 100%;
  border-radius: 6px;
`;

export const SectionsTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  align-self: flex-start;
`;

export const SectionsTitleWhite = styled.p`
  font-size: 20px;
  font-weight: 700;
  align-self: flex-start;
  color: #fff;
`;

export const CardTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const BenefitText = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const ImageTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const ImageText = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const AboutTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const AboutText = styled.p`
  font-size: 15px;
  font-weight: 400;
`;
