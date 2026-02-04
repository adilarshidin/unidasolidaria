import styled from "styled-components";
import { FaInstagram, FaFacebook, FaUniversity } from "react-icons/fa";
import { PiLinktreeLogoFill } from "react-icons/pi";
import { MdEmail, MdPhone } from "react-icons/md";
import CopyField from "../utils/CopyField";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2%;
  gap: 5%;
  background: #A24857;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 5%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: auto;
`;

const InfoCard = styled.div`
  background: #800000;
  padding: 4%;
  border-radius: 14px;
  color: #DEDCCF;

  h3 {
    margin-top: 0;
    margin-bottom: 1em;
  }

  p {
    line-height: 1.5;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #1f1f1f;
  color: #DEDCCF;
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 500;
  margin-bottom: 10px;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #1f1f1f;
  color: #DEDCCF;
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
        {/* Contact Info Card */}
        <InfoCard>
          <h3>Contactos</h3>
          <InfoItem>
            <MdEmail />
            <a href="emailto:info@unidasolidaria.org">info@unidasolidaria.org</a>
          </InfoItem>
          <InfoItem>
            <MdPhone />
            <a href="tel:+34600123456">+34 600 123 456</a>
          </InfoItem>
          <InfoItem>
            <FaUniversity />
            <CopyField label="IBAN" value="ES75 2080 5020 0830 4005 6547" />
          </InfoItem>
        </InfoCard>

        {/* Social Media Card */}
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

          <SocialLink
            href="https://linktr.ee/unidasolidaria"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#32CD32" }}
          >
            <PiLinktreeLogoFill />
            Linktree
          </SocialLink>
        </InfoCard>

        {/* Responsible People Card */}
        <InfoCard>
          <h3>Responsables</h3>
          <p>
            <strong>Encargada del ministerio:</strong> Ana López
          </p>
          <p>
            <strong>Pastor responsable:</strong> David Conde
          </p>
        </InfoCard>

        {/* Map Card */}
        <MapWrapper>
          <h3 style={{ color: "#DEDCCF" }}>Ubicación</h3>
          <iframe
            title="Ubicación de la organización"
            src="https://vigo.maps.arcgis.com/apps/webappviewer/index.html?id=95730d02d392425da3fe379a2336ac15&marker=-8.7233,42.2333&level=17"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapWrapper>
      </Content>
    </Container>
  );
};

export default Contacts;
