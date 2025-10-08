import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  background-color: #151515;
  background-image: url("/images/background_image.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  color: #575757;
  & :focus {
    color: white;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
