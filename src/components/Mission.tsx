import styled from "styled-components";

const Container = styled.section`
  background: #A24857;
  padding: 80px 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 60px;
  letter-spacing: 2px;
  color: #DEDCCF;
`;

const CardBase = styled.div`
  background-color: #cd1c18;
  background-image: linear-gradient(326deg, #cd1c18 0%, #66023c 74%);
  border-radius: 20px;
  padding: 30px;
  font-size: 18px;
  line-height: 1.4;
  position: relative;
  margin: 1%;
  color: #DEDCCF;
`;

const ObjectiveCard = ({ text }: { text: string }) => (
  <CardBase>
    <p>{text}</p>
  </CardBase>
);

const MainObjective = styled.div`
  background: #1f1b1c;
  color: white;
  border-radius: 24px;
  padding: 50px 40px;
  grid-column: 2;
  grid-row: span 2;

  h2 {
    font-size: 34px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    opacity: 0.9;
  }
`;

const Mission = () => {
  return (
    <Container>
      <Title>OBJETIVOS</Title>

      <MainObjective>
        <h2 style={{ color: "#DEDCCF" }}>Principal</h2>
        <p>
          Combatir la exclusión social de familias afincadas en el centro de
          Vigo.
        </p>
      </MainObjective>

      <ObjectiveCard
        text="Poner a disposición de las familias un programa de ocio infantil y juvenil que promueva valores sanos (derivamos a neos y next)"
      />

      <ObjectiveCard
        text="Participar en campañas de entrega de regalos a niños desfavorecidos. (Reparto de regalos Navideño)."
      />

      <ObjectiveCard
        text="Promover actividades lúdicas para adultos que promuevan la unión y el aprender técnicas de importancia laboral. (Ej: Curso de costura)"
      />

      <ObjectiveCard
        text="Oferta de servicios de primera necesidad. (Ej: servicio de peluquería gratuito)"
      />

      <ObjectiveCard
        text="Adaptar la infraestructura para el reparto de alimentos y participar en la programa FEAD"
      />

      <ObjectiveCard
        text="Crear y poner a disposición de los usarios un mercadillo y ropero gratuito"
      />

      <ObjectiveCard
        text="Entregar una bolsa mensual de comida a familias con necesidad en Vigo, Orense y Ponteareas"
      />

      <ObjectiveCard
        text="Poner a disposición de las familias un programa socioeducativo para combatir la desventaja académica"
      />
    </Container>
  );
};

export default Mission;
