import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  background-color: #151515;
  background-image: url("/public/images/background_image.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
`;
