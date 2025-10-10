import { Outlet } from "react-router-dom";
import { AppContainer, GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />

      <Outlet />
    </AppContainer>
  );
}

export default App;
