import React from "react";
import styled from "styled-components";

export default function ModalBtn({ text, onClick }) {
  return (
    <>
      <Button onClick={onClick}>{text}</Button>
    </>
  );
}

const Button = styled.button`
  width: 50%;
  height: 44px;
  background-color: ${(props) =>
    props.children === "다음"
      ? "#246beb"
      : props.children === "취소"
      ? "#EFF5FF"
      : "#d3d3d3"};
  color: ${(props) =>
    props.children === "다음"
      ? "white"
      : props.children === "취소"
      ? "#246BEB"
      : "#d3d3d3"};
  border: 1px solid #246beb;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`;
