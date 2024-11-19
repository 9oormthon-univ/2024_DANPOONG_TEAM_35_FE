import styled from "styled-components";

export const Background = styled.div`
  background-color: var(--color-bg-blue);
`;

export const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleText = styled.p`
  width: 100%;
  font-weight: var(--weight-bold);
  font-size: 14px;
  margin-left: 80px;
  margin-bottom: 10px;
  text-align: left;
`;

export const SheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
`;
export const SheetHorizonContainer = styled.div`
  display: flex;

  padding: 10px;
  gap: 20px;
`;
