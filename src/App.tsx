import { Menu } from "./components/Menu/Menu";
import { AppContainer, GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Menu focusKey="MENU" />
    </AppContainer>
  );
}

export default App;
