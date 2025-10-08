import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect, useState } from "react";
import { LogoBox, MenuWrapper } from "./Menu.styles";
import { MenuItem } from "../MenuItem/MenuItem";
import { menu } from "../../constants/menu";
import logo from "/images/logo.png";
import type { MenuProps } from "../../types/menu";

export const Menu = ({ focusKey: focusKeyParam }: MenuProps) => {
  const [selected, setSelected] = useState(menu[0].title);

  const { ref, focusKey, focusSelf, hasFocusedChild } = useFocusable({
    focusKey: focusKeyParam,
    trackChildren: true,
    autoRestoreFocus: true,
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <MenuWrapper ref={ref} $hasFocusedChild={hasFocusedChild}>
        <LogoBox>
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </LogoBox>
        {menu.map((item) => (
          <MenuItem
            key={item.title}
            title={item.title}
            selected={selected === item.title}
            onSelect={() => setSelected(item.title)}
          />
        ))}
      </MenuWrapper>
    </FocusContext.Provider>
  );
};
