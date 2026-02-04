import styled from "styled-components";
import Menu from "./components/Menu";
import ViewRoutes from "./ViewRoutes";
import Footer from "./components/Footer";
import { GlobalStyles } from "./GlobalStyles";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Menu />
        <ViewRoutes />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
