import styled from "styled-components";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2%;
  gap: 5%;
  background: #ffffff;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 5%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 640px;
`;

const InfoCard = styled.div`
  background: #f6f6f6;
  padding: 4%;
  border-radius: 14px;

  h3 {
    margin-top: 0;
    margin-bottom: 1em;
  }

  p {
    line-height: 1.5;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #1f1f1f;
  color: white;
  padding: 14px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 12px;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #b10000;
    color: white;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 3%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);

  h3 {
    margin-top: 0;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Contacts = () => {
  return (
    <Container>
      <Content>
        <InfoCard>
          <h3>Redes sociales</h3>

          <SocialLink
            href="https://www.instagram.com/unidasolidaria"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#E1306C" }}
          >
            <FaInstagram />
            @unidasolidaria
          </SocialLink>

          <SocialLink
            href="https://www.facebook.com/UnidaSolidaria"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#1877F2" }}
          >
            <FaFacebook />
            Unida Solidaria
          </SocialLink>
        </InfoCard>

        <InfoCard>
          <h3>Responsables</h3>
          <p>
            <strong>Encargada del ministerio:</strong> Ana López
          </p>
          <p>
            <strong>Pastor responsable:</strong> David Conde
          </p>
        </InfoCard>

        <InfoCard>
          <h3>Colaboradores</h3>
          <p>
            Algunos de los colaboradores son también usuarios del banco de
            alimentos, participando activamente en las labores de apoyo y
            solidaridad.
          </p>
        </InfoCard>

        <MapWrapper>
          <h3>Ubicación</h3>
          <iframe
            title="Ubicación de la organización"
            src="https://vigo.maps.arcgis.com/apps/webappviewer/index.html?id=95730d02d392425da3fe379a2336ac15&marker=-8.72439,42.23467&level=17"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapWrapper>
      </Content>
    </Container>
  );
};

export default Contacts;
