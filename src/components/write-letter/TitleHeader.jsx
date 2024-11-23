import styled from "styled-components";
import { useState } from "react";

function TitleHeader() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Container>
      <TitleText>제목</TitleText>
      <InputContainer placeholder="제목을 입력해주세요" />
      <SubmitButton $isClicked={isClicked} onClick={handleClick}>
        저장하기
      </SubmitButton>
    </Container>
  );
}

export default TitleHeader;

const Container = styled.div`
  width: 100%;
  height: 40px;

  position: fixed;
  top: 80px;

  background-color: white;

  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

const TitleText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-bold);
`;

const InputContainer = styled.textarea`
  width: 600px;
  height: 10px;
  padding: 10px;

  display: flex;
  align-items: center;

  border: 1px solid white;
  border-bottom: 1px solid var(--color-light-gray);

  font-size: 12px;
  font-family: inherit;
  resize: none;
`;

const SubmitButton = styled.button`
  width: 70px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  border-radius: 5px;
  font-weight: var(--weight-bold);
  font-size: 12px;

  color: ${({ $isClicked }) =>
    $isClicked ? "var(--color-white)" : "var(--color-white)"};
  background-color: ${({ $isClicked }) =>
    $isClicked ? "var(--color-dark-blue)" : "var(--color-light-gray)"};

  cursor: pointer;
`;
