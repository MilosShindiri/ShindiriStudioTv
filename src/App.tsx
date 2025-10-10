import { Content } from "./components/Content/Content";
import { Menu } from "./components/Menu/Menu";
import { TopChannels } from "./components/TopChannels/TopChannels";
import { AppContainer, GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Menu focusKey="MENU" />
      <Content />
      <TopChannels focusKey={"CHANNELS"} />
    </AppContainer>
  );
}

export default App;
