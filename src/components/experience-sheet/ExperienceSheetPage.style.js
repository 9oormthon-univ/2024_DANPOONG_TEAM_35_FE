import styled from "styled-components";

export const Background = styled.div`
  background-color: var(--color-bg-blue);

  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--color-gray);

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: pink;
  }
`;

export const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleText = styled.p`
  width: 100%;
  font-weight: var(--weight-bold);
  font-size: 14px;
  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: left;
`;

export const SheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const SheetHorizonContainer = styled.div`
  display: flex;

  padding: 10px;
  gap: 20px;
`;
