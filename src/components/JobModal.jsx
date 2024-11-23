import React, { useState } from "react";
import styled from "styled-components";
import { categories, subcategories } from "../data/job";
import ModalBtn from "./Modal/ModalBtn.jsx";
import { useNavigate } from "react-router-dom";

export default function JobModal({ onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubCategory(null);
  };

  const handleSubCategorySelect = (subCategoryName) => {
    setSelectedSubCategory(subCategoryName);
  };

  const handleNext = () => {
    navigate("/write-letter");
  };

  return (
    <Container>
      <ModalContainer>
        <ModalTitle>관련 직무 선택</ModalTitle>
        <ContentWrapper>
          <Column>
            <ColumnTitle>카테고리</ColumnTitle>
            <ScrollableContent>
              {categories.map((category) => (
                <Item
                  key={category}
                  isSelected={selectedCategory === category}
                  onClick={() => handleCategorySelect(category)}
                >
                  <Checkbox
                    type="radio"
                    checked={selectedCategory === category}
                    onChange={() => handleCategorySelect(category)}
                  />
                  {category}
                </Item>
              ))}
            </ScrollableContent>
          </Column>
          <Column>
            <ColumnTitle>세부 카테고리</ColumnTitle>
            <ScrollableContent>
              {subcategories.map((subcategory) => (
                <Item
                  key={subcategory}
                  isSelected={selectedSubCategory === subcategory}
                  onClick={() => handleSubCategorySelect(subcategory)}
                >
                  <Checkbox
                    type="radio"
                    checked={selectedSubCategory === subcategory}
                    onChange={() => handleSubCategorySelect(subcategory)}
                  />
                  {subcategory}
                </Item>
              ))}
            </ScrollableContent>
          </Column>
          <Column>
            <ColumnTitle>선택된 세부 직무</ColumnTitle>
            {selectedSubCategory ? (
              <Tag>{selectedSubCategory}</Tag>
            ) : (
              <Placeholder>선택된 직무가 없습니다</Placeholder>
            )}
          </Column>
        </ContentWrapper>
        <BtnContainer>
          <ModalBtn text="이전" onClick={onClose} />
          <ModalBtn text="다음" onClick={handleNext} />
        </BtnContainer>
      </ModalContainer>
    </Container>
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 700px;
  height: 500px;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #111111;
  margin-bottom: 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex: 1;
`;

const Column = styled.div`
  flex: 1;
  max-height: 360px;
  border: 1px solid #c6d6e7;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 12px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Item = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isSelected ? "#EFF5FF" : "transparent"};
  color: #111111;
  font-size: 14px;
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#c6d6e7" : "#f0f3fa")};
  }
`;

const Checkbox = styled.input`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`;

const ColumnTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111111;
`;

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
`;

const Tag = styled.div`
  padding: 6px 12px;
  background-color: #eff5ff;
  color: #246beb;
  font-size: 14px;
  border-radius: 8px;
`;

const Placeholder = styled.div`
  font-size: 14px;
  color: #818181;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  gap: 12px;
`;
