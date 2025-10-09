import styled from "styled-components";

export const ContentRowWrapper = styled.div`
  margin-bottom: 37px;
`;

export const ContentRowTitle = styled.div`
  color: #ffffff;
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  padding-left: 64px;
  line-height: 100%;
  letter-spacing: 2px;
`;

export const ContentRowScrollingWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  padding-left: 64px;
`;

export const ContentRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
