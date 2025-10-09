import { Content } from "./components/Content/Content";
import { Menu } from "./components/Menu/Menu";
import { AppContainer, GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Menu focusKey="MENU" />
      <Content />
    </AppContainer>
  );
}

export default App;
