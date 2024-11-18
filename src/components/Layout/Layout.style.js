import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding-top: 40px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  color: var(--color-black);
`;
