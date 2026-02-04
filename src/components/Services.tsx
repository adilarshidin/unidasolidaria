import styled from "styled-components";
import meeting from "../assets/meeting.webp";
import birthday from "../assets/birthday.webp";
import truck from "../assets/truck.webp";

const Container = styled.div`
  display: flex;
  padding: 2%;
  background: #fff5f8;
  gap: 2%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const LeftPanel = styled.div`
  position: relative;
  min-width: 260px;

  @media (max-width: 1024px) {
    min-width: 100px;
  }
`;

const Dot = styled.div`
  width: 80px;
  height: 80px;
  background: #b10000;
  border-radius: 50%;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const BlackDotAndLine = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background: #1f1f1f;
  border-radius: 50%;

  @media (max-width: 1024px) {
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 1000%; /* length of the horizontal line */
    height: 2px;
    background: #b10000;
  }
`;

const LeftTitle = styled.div`
  background: #1f1f1f;
  color: white;
  padding: 30px;
  border-radius: 12px;

  h2 {
    margin: 0;
    font-size: 24px;
    line-height: 1.3;
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 16px;
    opacity: 0.8;
  }
`;

const ServicesWrapper = styled.div`
  position: relative;
  display: flex;
`;

const VerticalLine = styled.div`
  width: 2px;
  background: #1f1f1f;
  margin-right: 40px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ServiceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

const ServiceTitle = styled.div`
  background: #1f1f1f;
  color: white;
  padding: 14px 20px;
  border-radius: 10px;
  min-width: 260px;
  font-weight: 600;

  @media (max-width: 1024px) {
    min-width: unset;
    width: 100%;
  }
`;

const ServiceDescription = styled.div`
  background: #b10000;
  color: white;
  padding: 18px 24px;
  border-radius: 10px;
  max-width: 520px;
  line-height: 1.4;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Connector = styled.div`
  width: 40px;
  height: 2px;
  background: #1f1f1f;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProjectsHeader = styled.h2`
  color: #b10000;
  margin-top: 5%;
`;

const Header = styled.h3`
  color: #b10000;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 5%;
`;

const ProjectCard = styled.div`
  display: flex;
  gap: 10%;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Images = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const CircleImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #b10000;
`;

const ProjectContent = styled.div`
  max-width: 520px;

  h3 {
    margin: 0 0 8px;
    font-size: 20px;
  }

  p {
    margin: 0;
    line-height: 1.4;
  }
`;

const Service = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <ServiceRow>
    <ServiceTitle>{title}</ServiceTitle>
    <Connector />
    <ServiceDescription>{description}</ServiceDescription>
  </ServiceRow>
);

const Home = () => {
  return (
    <>
      <Container>
        <LeftPanel>
          <Dot />
          <LeftTitle>
            <h2>Servicios que ofrecemos</h2>
            <span>2026</span>
          </LeftTitle>
        </LeftPanel>

        <ServicesWrapper>
          <VerticalLine />

          <Services>
            <Service
              title="Peluquería"
              description="Damos sesiones de peluquería unisex donde personas sin recursos pueden cortarse el pelo de forma gratuita."
            />

            <Service
              title="Canastilla y Biblia para los recién nacidos"
              description="Regalamos a mujeres embarazadas una biblia y un conjunto de productos para bebés (pañales, toallitas, etc.)."
            />

            <Service
              title="Curso de costura"
              description="Ofrecemos un curso de costura por 5€ con plazas limitadas de hasta 15 personas. Todos los miércoles de 16:30 a 18:30."
            />

            <Service
              title="Roperos para adultos y niños"
              description="Ofrecemos prendas de ropa y calzado a personas en necesidad, de manera gratuita. En cada visita pueden escoger 3 prendas."
            />

            <Service
              title="Mercadillo solidario"
              description="Para conseguir fondos para la asociación ponemos a la venta objetos donados por personas."
            />

            <Service
              title="Grupo de Conexión"
              description="Invitamos a las personas a un café para compartir, conectar y conocer más sobre la Palabra de Dios."
            />

            <Service
              title="Repartos"
              description="Reparto de alimentos y de regalos."
            />
          </Services>
        </ServicesWrapper>
      </Container>

      <Container>
        <BlackDotAndLine />
        <ProjectsHeader>Otros proyectos</ProjectsHeader>

        <Projects>
          <ProjectCard>
            <Images>
              <CircleImage src={meeting} />
              <CircleImage src={birthday} />
            </Images>

            <ProjectContent>
              <Header>Comidas de voluntarios y cumpleaños</Header>
              <p>
                Realizamos comidas de voluntarios y celebramos los cumpleaños
                del mes todos juntos.
              </p>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <Images>
              <CircleImage src={truck} />
            </Images>

            <ProjectContent>
              <Header>Mudanzas</Header>
              <p>
                Ayudamos en las mudanzas mediante la furgoneta del banco de
                alimentos y damos salida a muebles de segunda mano.
              </p>
            </ProjectContent>
          </ProjectCard>
        </Projects>
      </Container>
    </>
  );
};

export default Home;
