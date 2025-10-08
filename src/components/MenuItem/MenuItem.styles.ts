import styled from "styled-components";

interface MenuItemBoxProps {
  $focused: boolean;
  $selected: boolean;
}

export const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: 118px;
  height: 49px;
  color: ${({ $focused, $selected }) =>
    $focused || $selected ? "white" : "#575757"};
  background-color: transparent;
  border-bottom: 4px solid
    ${({ $selected, $focused }) =>
      $selected ? "#ED1C24" : $focused ? "white" : "transparent"};
  font-size: 18px;
  padding: 10px 20px;
  margin-right: 20px;
  box-sizing: border-box;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;
