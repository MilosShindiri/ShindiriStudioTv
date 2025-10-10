import { ChannelList, Title, TopChannelsContainer } from "./TopChannels.styled";
import { channels } from "../../constants/channels";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useState } from "react";
import type { MenuProps } from "../../types/menu";
import { TopChannelsItem } from "../TopChannelsItem/TopChannelsItem";

export const TopChannels = ({ focusKey: focusKeyParam }: MenuProps) => {
  const [selectedChannel, setSelectedChannel] = useState<string | undefined>();

  const { ref, focusKey, hasFocusedChild } = useFocusable({
    focusKey: focusKeyParam,
    trackChildren: true,
    autoRestoreFocus: true,
    onBlur: () => {
      setSelectedChannel(undefined);
    },
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <TopChannelsContainer ref={ref} $hasFocusedChild={hasFocusedChild}>
        <Title>Top 5 Smart TV apps</Title>
        <ChannelList>
          {channels.map((channel) => (
            <TopChannelsItem
              key={channel.title}
              title={channel.title}
              icon={channel.icon}
              selected={selectedChannel === channel.title}
              onSelect={() => setSelectedChannel(channel.title)}
            />
          ))}
        </ChannelList>
      </TopChannelsContainer>
    </FocusContext.Provider>
  );
};
