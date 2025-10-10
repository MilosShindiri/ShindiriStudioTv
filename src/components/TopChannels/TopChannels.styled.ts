import styled from "styled-components";

interface TopChannelsContainerProps {
  $hasFocusedChild: boolean;
}

export const TopChannelsContainer = styled.div<TopChannelsContainerProps>`
  background-color: #000;
  border-radius: 12px;
  padding: 16px 16px;
  width: 312px;
  height: 837px;
  color: #fff;
  margin-top: 122px;
  margin-right: 193px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  padding-bottom: 16px;
  text-align: center;
`;

export const ChannelList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
