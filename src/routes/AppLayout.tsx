import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";

export const AppLayout = () => {
  return (
    <>
      <Menu focusKey="MENU" />

      <Outlet />
    </>
  );
};
