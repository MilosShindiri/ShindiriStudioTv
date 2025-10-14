import styled from "styled-components";

export const MovieRowWrapper = styled.div`
  width: 100%;

  margin-top: 250px;
`;

export const MovieRowScrollingWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  padding-left: 64px;
  padding-right: 64px;
`;

export const MovieRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  min-width: max-content;
`;
