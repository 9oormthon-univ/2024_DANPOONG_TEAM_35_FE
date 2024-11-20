import React from "react";
import styled from "styled-components";
import ModalContent from "./Modal/ModalContent";

export default function ExperienceModal() {
  return (
    <>
      <Container>
        <ModalContainer>
          <TopContainer>
            <TitleContainer>
              <Category>카테고리</Category>
              <TitleInput placeholder="제목을 입력하세요"></TitleInput>
            </TitleContainer>
            <Date>날짜를 입력해주세요</Date>
          </TopContainer>
          <MainContainer>
            <ModalContent
              text="문제상황"
              placeholder="내용을 입력해주세요 (200자 제한)"
            />
            <ModalContent
              text="해결방법"
              placeholder="내용을 입력해주세요 (200자 제한)"
            />
            <ModalContent
              text="결과 (성과, 나의 비중)"
              placeholder="내용을 입력해주세요 (200자 제한)"
            />
          </MainContainer>
          <Keyword>선택 키워드</Keyword>
          <Keyword>추천 키워드</Keyword>
          <BtnContainer>
            <Button>취소하기</Button>
            <Button>저장하기</Button>
          </BtnContainer>
        </ModalContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  gap: 12px;
`;
const ModalContainer = styled.div`
  width: 600px;
  height: 580px;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TopContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const TitleContainer = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #717171;
  border-radius: 8px;
  overflow: hidden;
`;

const Category = styled.div`
  padding: 10px;
  font-size: 14px;
  background-color: white;
  border-right: 1px solid #717171;
  outline: none;
`;

const TitleInput = styled.input`
  border: none;
  padding: 10px;
  font-size: 14px;
  outline: none;
`;

const Date = styled.div`
  padding-left: 8px;
  flex: 1;
  height: 40px;
  border: 1px solid #717171;
  border-radius: 8px;
  line-height: 40px;
  font-size: 14px;
  color: #828282;
`;

const MainContainer = styled.div`
  height: 400px;
  border: 1px solid #717171;
  border-radius: 8px;
`;

const Keyword = styled.div`
  width: 14%;
  font-weight: 800;
  color: ${(props) =>
    props.children === "선택 키워드"
      ? "#246BEB"
      : props.children === "추천 키워드"
      ? "#717171"
      : "#d3d3d3"};
  border-right: 2px solid;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const Button = styled.button`
  width: 50%;
  height: 44px;
  background-color: ${(props) =>
    props.children === "저장하기"
      ? "#246beb"
      : props.children === "취소하기"
      ? "#EFF5FF"
      : "#d3d3d3"};
  color: ${(props) =>
    props.children === "저장하기"
      ? "white"
      : props.children === "취소하기"
      ? "#246BEB"
      : "#d3d3d3"};
  border: 1px solid #246beb;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`;
