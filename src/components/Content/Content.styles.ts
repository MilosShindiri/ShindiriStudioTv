import styled from "styled-components";

export const ContextWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 125px;
`;

export const ContentTitle = styled.div`
  color: white;
  font-size: 48px;
  font-weight: 600;
  font-family: "Segoe UI";
  text-align: center;
  margin-top: 52px;
  margin-bottom: 37px;
`;

export const ScrollingRows = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;
