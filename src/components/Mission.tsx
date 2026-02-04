import styled from "styled-components";

const Container = styled.section`
  background: #fff5f8;
  padding: 80px 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 60px;
  letter-spacing: 2px;
`;

const CardBase = styled.div`
  background: #8fd1e0;
  border-radius: 20px;
  padding: 30px;
  font-size: 18px;
  line-height: 1.4;
  position: relative;
  margin: 1%;
`;

const Badge = styled.div<{ success?: boolean }>`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ success }) => (success ? "#9bbd3b" : "#ff4d4d")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const ObjectiveCard = ({ success, text }: { success: boolean, text: string }) => (
  <CardBase>
    {success ? <Badge success={success}>✓</Badge> : <Badge success={success}>✕</Badge>}
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
        <h2>Principal</h2>
        <p>
          Combatir la exclusión social de familias afincadas en el centro de
          Vigo.
        </p>
      </MainObjective>

      <ObjectiveCard
        success={true}
        text="Poner a disposición de las familias un programa de ocio infantil y juvenil que promueva valores sanos (derivamos a neos y next)"
      />

      <ObjectiveCard
        success={true}
        text="Participar en campañas de entrega de regalos a niños desfavorecidos. (Reparto de regalos Navideño)."
      />

      <ObjectiveCard
        success={true}
        text="Promover actividades lúdicas para adultos que promuevan la unión y el aprender técnicas de importancia laboral. (Ej: Curso de costura)"
      />

      <ObjectiveCard
        success={true}
        text="Oferta de servicios de primera necesidad. (Ej: servicio de peluquería gratuito)"
      />

      <ObjectiveCard
        success={true}
        text="Adaptar la infraestructura para el reparto de alimentos y participar en la programa FEAD"
      />

      <ObjectiveCard
        success={true}
        text="Crear y poner a disposición de los usarios un mercadillo y ropero gratuito"
      />

      <ObjectiveCard
        success={true}
        text="Entregar una bolsa mensual de comida a familias con necesidad en Vigo, Orense y Ponteareas"
      />

      <ObjectiveCard
        success={false}
        text="Poner a disposición de las familias un programa socioeducativo para combatir la desventaja académica"
      />
    </Container>
  );
};

export default Mission;
