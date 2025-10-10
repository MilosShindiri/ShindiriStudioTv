import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { FC } from "react";
import { ChannelItemBox } from "./TopChannelsItem.styled";

interface TopChannelsProps {
  title: string;
  icon: string;
  selected: boolean;
  onSelect: () => void;
}

export const TopChannelsItem: FC<TopChannelsProps> = ({
  title,
  icon,
  selected,
  onSelect,
}) => {
  const { ref, focused } = useFocusable({
    focusKey: title,
    onEnterPress: onSelect,
  });

  return (
    <ChannelItemBox ref={ref} $focused={focused} $selected={selected}>
      <img src={icon} alt={title} />
      <span>{title}</span>
    </ChannelItemBox>
  );
};
