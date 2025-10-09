import styled from "styled-components";

interface MenuWrapperProps {
  $hasFocusedChild: boolean;
}

export const MenuWrapper = styled.div<MenuWrapperProps>`
  position: absolute;
  width: 1841px;
  height: 60px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 32px 47px 988px 32px;
  background-color: ${({ $hasFocusedChild }) => ($hasFocusedChild ? "" : "")};
  z-index: 10;
  letter-spacing: 4px;
  font-weight: 700;
  line-height: 100%;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  gap: 88px;
`;

export const LogoBox = styled.div`
  margin-right: 80px;
  display: flex;
  align-items: center;
`;
