import styled from "styled-components";
import Menu from "./components/Menu";
import ViewRoutes from "./ViewRoutes";
import Footer from "./components/Footer";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <MainContainer>
      <Menu />
      <ViewRoutes />
      <Footer />
    </MainContainer>
  );
};

export default App;
