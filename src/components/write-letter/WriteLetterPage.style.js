import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  margin-top: 110px;
  margin-left: 80px;
  overflow-x: hidden;
  pointer-events: auto;

  position: relative;

  overflow-y: auto;
`;

export const WriteContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
`;
