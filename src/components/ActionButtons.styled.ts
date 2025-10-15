import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const Button = styled.button<{ focused: boolean }>`
  background-color: ${({ focused }) => (focused ? "#ED1C24" : "#333")};
  color: white;
  padding: 14px 28px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  transition: background-color 0.2s ease;
`;
