import styled from "styled-components";
import { FaHandshake } from "react-icons/fa";
import CopyField from "../utils/CopyField";

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

const CardsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardBase = styled.div`
  background-color: #cd1c18;
  background-image: linear-gradient(326deg, #cd1c18 0%, #66023c 74%);
  border-radius: 20px;
  padding: 30px;
  font-size: 18px;
  line-height: 1.4;
  position: relative;
  color: #DEDCCF;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 220px;
  max-width: 260px;
  text-align: center;
`;

const HandshakeIcon = styled(FaHandshake)`
  font-size: 56px;
  margin-top: 16px;
  opacity: 0.9;
`;

const HelpCard = ({ title }: { title: string }) => (
  <CardBase>
    <h3 style={{ marginBottom: "12px", fontSize: "22px" }}>{title}</h3>
    <HandshakeIcon />
  </CardBase>
);

const DonationCard = styled.div`
  background: #1f1b1c;
  color: #DEDCCF;
  border-radius: 24px;
  padding: 50px 40px;
  margin-bottom: 40px;

  h2 {
    font-size: 34px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    opacity: 0.9;
    margin-bottom: 10px;
  }

  span {
    font-weight: 700;
  }
`;

const Help = () => {
  return (
    <Container>
      <Title>¿CÓMO PUEDES AYUDAR?</Title>

      <DonationCard>
        <h2>Donaciones económicas</h2>

        <CopyField label="Bizum" value="+34639164866" />
        <CopyField label="IBAN" value="ES75 2080 5020 0830 4005 6547" />

        <p>
          Tu aportación nos permite cubrir necesidades básicas y mantener nuestros
          programas activos.
        </p>
      </DonationCard>

      <CardsRow>
        <HelpCard title="Cede espacio para almacenaje" />
        <HelpCard title="Comparte en redes" />
        <HelpCard title="Da cursos" />
        <HelpCard title="Colabora" />
        <HelpCard title="Dona" />
      </CardsRow>
    </Container>
  );
};

export default Help;
