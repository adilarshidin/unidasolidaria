import styled from "styled-components";
import Menu from "./components/Menu";
import ViewRoutes from "./ViewRoutes";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <MainContainer>
      <Menu />
      <ViewRoutes />
    </MainContainer>
  )
};

export default App;
