import React from "react";
import styled from "styled-components";

export default function ModalBottom({ onClose, onSave }) {
  return (
    <>
      <Keyword>선택 키워드</Keyword>
      <Keyword>추천 키워드</Keyword>
      <BtnContainer>
        <Button onClick={onClose}>취소하기</Button>
        <Button onClick={onClose}>저장하기</Button>
      </BtnContainer>
    </>
  );
}

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
