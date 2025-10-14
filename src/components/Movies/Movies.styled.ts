import styled from "styled-components";

export const Container = styled.div<{ image: string | null }>`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-image: ${({ image }) =>
    image
      ? `
    linear-gradient(82.93deg, #151515 28.76%, rgba(21, 21, 21, 0.6) 112.55%),
    linear-gradient(357.53deg, #151515 -0.91%, rgba(21, 21, 21, 0) 16.05%),
    url(${image})
  `
      : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ScrollingRows = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;

interface InfoProps {
  isVisible: boolean;
}

export const Info = styled.div<InfoProps>`
  width: 698px;
  height: 182px;
  margin-left: 69px;
  margin-top: 258px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  color: white;
  font-family: Inter;
  font-weight: 600;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;

  h2 {
    font-size: 48px;
    margin: 0;
  }

  p {
    font-size: 24px;
    line-height: 1.4;
    margin: 0;
  }
`;

export const BackgroundImage = styled.div`
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
