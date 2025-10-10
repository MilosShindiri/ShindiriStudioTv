import styled from "styled-components";

interface MenuItemBoxProps {
  $focused: boolean;
  $selected: boolean;
}

export const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: 118px;
  height: 49px;
  color: ${({ $focused, $selected }) => {
    if ($selected) return "#ED1C24";
    if ($focused) return "white";
    return "#575757";
  }};

  border-bottom: 4px solid
    ${({ $selected, $focused }) => {
      if ($selected && $focused) return "#ED1C24";
      if ($focused) return "white";
      return "transparent";
    }};
  background-color: transparent;
  font-size: 18px;
  padding: 10px 20px;
  margin-right: 20px;
  box-sizing: border-box;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;
