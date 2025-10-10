import { Content } from "../../components/Content/Content";
import { TopChannels } from "../../components/TopChannels/TopChannels";

export const HomePage = () => {
  return (
    <>
      <Content />
      <TopChannels focusKey={"CHANNELS"} />
    </>
  );
};
