import styled from "styled-components";

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface AssetBoxProps {
  focused: boolean;
  color: string;
}

export const MovieBox = styled.div<AssetBoxProps & { thumbnail: string }>`
  width: 403px;
  height: 243px;
  background-image: url(${({ thumbnail }) => thumbnail});
  background-size: cover;
  background-position: center;
  border: ${({ focused }) => (focused ? "6px solid #ed1c24" : "none")};
  border-radius: 6px;
  box-sizing: border-box;
`;

export const MovieName = styled.div`
  font-family: Inter;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: capitalize;
  margin-top: 16px;
`;
