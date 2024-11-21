import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function ModalNewsList({ title, content }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <>
      <NewsList isChecked={isChecked}>
        <NewsListTitle>
          <p>{title}</p>
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        </NewsListTitle>
        <NewsListContent>{content}</NewsListContent>
      </NewsList>
    </>
  );
}

const NewsList = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  flex: 1;
  height: 80px;
  border: 1px solid ${(props) => (props.isChecked ? "#246BEB" : "#717171")};
  border-radius: 8px;
  background-color: white;
  font-size: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const NewsListTitle = styled.div`
  flex: 1;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  color: black;
  justify-content: space-between;
`;

const NewsListContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding-left: 12px;
  padding-bottom: 14px;
  color: #828282;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
