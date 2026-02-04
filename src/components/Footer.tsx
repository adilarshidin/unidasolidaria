import styled from "styled-components";
import { FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";

const StyledFooter = styled.footer`
  background: background-color: #cd1c18;
  background-image: linear-gradient(326deg, #cd1c18 0%, #66023c 74%);;
  color: #DEDCCF;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Credits = styled.p`
  margin: 0;
  opacity: 0.8;
  font-size: 0.95rem;
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 12px;
`;

const SocialLink = styled.a<{ color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  border-radius: 50%;
  background: pink;
  color: ${({ color }) => color};

  transition: all 0.25s ease;
  text-decoration: none;
  font-size: 22px;

  &:hover {
    background: rgba(191, 163, 74, 0.15);
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid ${({ color }) => color};
    outline-offset: 2px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Credits>Hecho con respeto por Adil Arshidin</Credits>

      <Socials>
        <SocialLink
          href="https://wa.me/34603249025"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          color="#25D366" // WhatsApp green
        >
          <FaWhatsapp />
        </SocialLink>

        <SocialLink
          href="https://t.me/adiltherunningman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por Telegram"
          color="#0088cc" // Telegram blue
        >
          <FaTelegram />
        </SocialLink>

        <SocialLink
          href="https://www.instagram.com/adil_the_running_man/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por Instagram"
          color="#E1306C" // Instagram pink
        >
          <FaInstagram />
        </SocialLink>
      </Socials>
    </StyledFooter>
  );
};

export default Footer;
