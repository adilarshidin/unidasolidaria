import React from "react";
import styled from "styled-components";
import {
  FaHeart,
  FaGlobe,
  FaHandsHelping,
  FaQuestionCircle,
  FaClock,
} from "react-icons/fa";

import group from "../assets/group.webp";
import inStore from "../assets/in_store.webp";
import lection from "../assets/lection.webp";
import present from "../assets/present.webp";
import line from "../assets/line.webp";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 60px 20px;
  background: #A24857;
`;

const Section = styled.section<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 40px;
  padding: 40px 30px;
  background-color: #cd1c18;
  background-image: linear-gradient(326deg, #cd1c18 0%, #66023c 74%);
  border-radius: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const IconWrapper = styled.div`
  font-size: 48px;
  color: #b10000;
  margin-bottom: 16px;
`;

const TextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #DEDCCF;
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #DEDCCF;
`;

const SectionImage = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`;

const Home: React.FC = () => {
  const sections = [
    {
      icon: <FaQuestionCircle />,
      title: "QUÉ SOMOS?",
      text: "Pretendemos ser una luz en medio de la difícil situación que atraviesan familias de nuestra ciudad, mostrándoles el amor de Dios hacia ellos a través de nuestro trabajo.",
      img: group,
    },
    {
      icon: <FaHeart />,
      title: "LEMA",
      text: "Desde el corazón de Vigo con Vigo en el corazón",
      img: present,
      reverse: true,
    },
    {
      icon: <FaGlobe />,
      title: "ÁMBITO TERRITORIAL",
      text: "El proyecto del ministerio de Unida Solidaria se enfoca en la ciudad de Vigo, con ramificaciones en Órense y Ponteareas. La sede está en Taboada Leal 17. La mayor influencia se centra en barrios próximos como C/Venezuela, C/Pi y Margall, C/Camelias y C/Romil.",
      img: inStore,
    },
    {
      icon: <FaHandsHelping />,
      title: "NUESTRA VISIÓN",
      text: "En Unida Solidaria, como brazo solidario de la Iglesia Unida de Vigo, buscamos cubrir las necesidades básicas de las personas (bienes y servicios) a través del amor de Cristo.",
      img: lection,
      reverse: true,
    },
    {
      icon: <FaClock />,
      title: "HORARIO DE ATENCIÓN",
      text: "Por la mañana de 9 a 14 de lunes a sábado, y los miércoles y jueves por la tarde de 16 a 18:30.",
      img: line,
    },
  ];

  return (
    <Wrapper>
      {sections.map((section, idx) => (
        <Section key={idx} reverse={section.reverse}>
          <SectionImage src={section.img} alt={section.title} />
          <TextBlock>
            <IconWrapper>{section.icon}</IconWrapper>
            <Title>{section.title}</Title>
            <Text>{section.text}</Text>
          </TextBlock>
        </Section>
      ))}
    </Wrapper>
  );
};

export default Home;
