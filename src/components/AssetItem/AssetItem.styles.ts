import styled from "styled-components";

export const AssetWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
interface AssetBoxProps {
  index: number;
  focused: boolean;
  color: string;
}
export const AssetBox = styled.div<AssetBoxProps>`
  width: 229px;
  height: 300px;
  background-color: ${({ color }) => color};
  border-color: white;
  border-style: solid;
  border-width: ${({ focused }) => (focused ? "6px" : 0)};
  box-sizing: border-box;
  border-radius: 7px;
`;

export const AssetTitle = styled.div`
  color: white;
  margin-top: 16px;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 400;
`;
