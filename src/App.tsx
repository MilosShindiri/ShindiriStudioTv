import { Outlet } from "react-router-dom";
import { AppContainer, GlobalStyle } from "./styles/globalStyles";
import { useBackspaceHandler } from "./hooks/backspaceHandler";

function App() {
  useBackspaceHandler();
  return (
    <AppContainer>
      <GlobalStyle />

      <Outlet />
    </AppContainer>
  );
}

export default App;
