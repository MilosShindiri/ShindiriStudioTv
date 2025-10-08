import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { MenuItemBox } from "./MenuItem.styles";
import type { FC } from "react";

interface MenuItemProps {
  title: string;
  selected: boolean;
  onSelect: () => void;
}

export const MenuItem: FC<MenuItemProps> = ({ title, selected, onSelect }) => {
  const { ref, focused } = useFocusable({
    focusKey: title,
    onEnterPress: onSelect,
  });

  return (
    <MenuItemBox ref={ref} $focused={focused} $selected={selected}>
      {title}
    </MenuItemBox>
  );
};
