import styled from "styled-components";
import useTitleStore from "/src/stores/titleStore"; // Zustand 스토어
import { useState } from "react";

function TitleHeader() {
  const { title, setTitle } = useTitleStore(); // Zustand 상태와 액션 가져오기
  const [isClicked, setIsClicked] = useState(false);

  const handleInputChange = (e) => {
    setTitle(e.target.value); // Zustand에 저장
  };

  const handleSaveClick = () => {
    if (title.trim() === "") {
      alert("제목을 입력해주세요!");
      return;
    }
    setIsClicked(true);
    alert("제목이 저장되었습니다!");
  };

  return (
    <Container>
      <TitleText>제목</TitleText>
      <InputContainer
        placeholder="제목을 입력해주세요"
        value={title} // Zustand에서 가져온 상태
        onChange={handleInputChange}
      />
      <SubmitButton $isClicked={isClicked} onClick={handleSaveClick}>
        저장하기
      </SubmitButton>
    </Container>
  );
}

export default TitleHeader;

// 스타일 정의
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

  border: 1px solid var(--color-light-gray);
  border-radius: 5px;

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

  color: var(--color-white);
  background-color: ${({ $isClicked }) =>
    $isClicked ? "var(--color-dark-blue)" : "var(--color-light-gray)"};

  cursor: pointer;

  &:hover {
    background-color: var(--color-dark-blue);
  }
`;
