import { ChannelList, Title, TopChannelsContainer } from "./TopChannels.styled";
import { channels as defaultChannels } from "../../constants/channels";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useState } from "react";
import type { MenuProps } from "../../types/menu";
import { TopChannelsItem } from "../TopChannelsItem/TopChannelsItem";

export const TopChannels = ({ focusKey: focusKeyParam }: MenuProps) => {
  const [channelsList, setChannelsList] = useState(defaultChannels);
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [reorderIndex, setReorderIndex] = useState<number | null>(null);

  const { ref, focusKey, hasFocusedChild } = useFocusable({
    focusKey: focusKeyParam,
    trackChildren: true,
    autoRestoreFocus: true,
    onBlur: () => {
      setSelectedChannel(null);
      setReorderIndex(null);
    },
  });

  const handleSelect = (title: string, index: number) => {
    if (selectedChannel === null) {
      setSelectedChannel(title);
    } else {
      if (selectedChannel === title) {
        setSelectedChannel(null);
      } else {
        const fromIndex = channelsList.findIndex(
          (c) => c.title === selectedChannel
        );
        const toIndex = index;

        if (fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex) {
          const newList = [...channelsList];
          [newList[fromIndex], newList[toIndex]] = [
            newList[toIndex],
            newList[fromIndex],
          ];
          setChannelsList(newList);
        }

        setSelectedChannel(null);
      }
    }
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <TopChannelsContainer ref={ref} $hasFocusedChild={hasFocusedChild}>
        <Title>Top 5 Smart TV apps</Title>
        <ChannelList>
          {channelsList.map((channel, index) => (
            <TopChannelsItem
              key={channel.title}
              title={channel.title}
              icon={channel.icon}
              selected={selectedChannel === channel.title}
              reorderTarget={selectedChannel !== null && reorderIndex === index}
              onSelect={() => handleSelect(channel.title, index)}
            />
          ))}
        </ChannelList>
      </TopChannelsContainer>
    </FocusContext.Provider>
  );
};
