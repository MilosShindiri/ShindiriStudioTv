import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 48px;
`;

export const Button = styled.button<{ focused: boolean }>`
  background-color: ${({ focused }) => (focused ? "#ED1C24" : "#333")};
  color: white;
  padding: 12px 24px;
  font-size: 20px;
  border: none;
  border-radius: 4px;
`;
