import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  padding: 80px;
  background-color: #151515;
  color: white;
  gap: 48px;
  box-sizing: border-box;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 16px;
`;

export const PosterImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const Meta = styled.div`
  font-size: 14px;
  color: #b3b3b3;
  line-height: 1.4;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin: 0;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  color: #cccccc;
  line-height: 1.5;
`;

export const InfoRow = styled.div`
  font-size: 14px;
  color: #999;
  margin-top: 8px;
  line-height: 1.6;
`;
