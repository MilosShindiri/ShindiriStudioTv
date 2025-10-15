import styled from "styled-components";

export const PosterWrapper = styled.div<{ image: string }>`
  width: 640px;
  height: 400px;
  background-image: url(${(p) => p.image});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  flex-shrink: 0;
`;
