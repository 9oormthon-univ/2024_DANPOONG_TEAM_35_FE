import React from "react";
import styled from "styled-components";

export default function ModalContent({ text, placeholder }) {
  return (
    <>
      <ContentContainer>
        <Text>{text}</Text>
        <Content placeholder={placeholder} />
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

const Content = styled.textarea`
  height: 60px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border-color 0.2s ease;
  outline: none;
  resize: none;

  &:focus {
    border: 1px solid #717171;
  }
`;
