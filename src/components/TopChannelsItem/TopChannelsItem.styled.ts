import styled from "styled-components";

interface ChannelItemProps {
  $focused: boolean;
  $selected: boolean;
}

export const ChannelItemBox = styled.div<ChannelItemProps>`
  color: ${({ $focused, $selected }) =>
    $focused || $selected ? "white" : "#aaa"};
  background-color: ${({ $focused, $selected }) =>
    $focused || $selected ? "#333" : "#111"};
  border: 2px solid
    ${({ $selected, $focused }) =>
      $selected ? "#ED1C24" : $focused ? "white" : "transparent"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  width: 280px;
  height: 136px;
  border-radius: 16px;

  img {
    width: 45px;
    height: 45px;
    border-radius: 5px;
    object-fit: cover;
    margin-bottom: 24px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
  }
`;
