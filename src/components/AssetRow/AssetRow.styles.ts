import styled from "styled-components";

export const ContentRowWrapper = styled.div`
  margin-bottom: 37px;
`;

export const ContentRowTitle = styled.div`
  color: white;
  margin-bottom: 22px;
  font-size: 27px;
  font-weight: 700;
  font-family: "Segoe UI";
  padding-left: 60px;
`;

export const ContentRowScrollingWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  padding-left: 60px;
`;

export const ContentRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
`;
