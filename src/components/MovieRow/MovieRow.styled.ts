import styled from "styled-components";

export const MovieRowWrapper = styled.div`
  width: 100%;
  margin-left: 64px;
`;

export const MovieRowScrollingWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const MovieRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  min-width: max-content;
`;
