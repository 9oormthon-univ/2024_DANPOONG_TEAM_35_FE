import { useState } from "react";
import styled from "styled-components";
import PreviewSheetCard from "./PreviewSheetCard";
import PreviewNewsCard from "./PreviewNewsCard";
import useSelectedCardStore from "/src/stores/selectedCardStore";

function SheetListPanel() {
  const [selectedButton, setSelectedButton] = useState("sheet");
  const [selectedTag, setSelectedTag] = useState("");
  const { selectedCardId, toggleSheetForCard, toggleNewsForCard } =
    useSelectedCardStore();

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleSheetClick = (sheet) => {
    if (selectedCardId) {
      toggleSheetForCard(selectedCardId, sheet);
    }
  };

  const handleNewsClick = (news) => {
    if (selectedCardId) {
      toggleNewsForCard(selectedCardId, news);
    }
  };

  return (
    <Container>
      <TopContainer>
        <TitleText>경험시트 목록</TitleText>
        <ToggleContainer>
          <SelectSheet
            onClick={() => handleButtonClick("sheet")}
            $isActive={selectedButton === "sheet"}
          >
            경험시트
          </SelectSheet>
          <SelectNews
            onClick={() => handleButtonClick("news")}
            $isActive={selectedButton === "news"}
          >
            업계소식
          </SelectNews>
        </ToggleContainer>
      </TopContainer>
      <TagContainer>
        {[
          "전체(23)",
          "책임감(23)",
          "리더십(23)",
          "열정(23)",
          "창의력(23)",
          "문제해결능력(23)",
        ].map((tag) => (
          <Tag
            key={tag}
            $isActive={selectedTag === tag}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Tag>
        ))}
      </TagContainer>
      <PreviewSheetList>
        {selectedButton === "sheet" ? (
          <PreviewSheetCard onClick={handleSheetClick} />
        ) : (
          <PreviewNewsCard onClick={handleNewsClick} />
        )}
      </PreviewSheetList>
    </Container>
  );
}

export default SheetListPanel;

const Container = styled.div`
  width: 380px;

  position: fixed;
  top: 150px;
  background-color: var(--color-bg-blue);
  border-radius: 15px;
  border: 0.5px solid var(--color-light-gray);
  padding: 15px;
`;

const TitleText = styled.p`
  font-size: 12px;
  font-weight: var(--weight-bold);
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleContainer = styled.div`
  display: flex;
  font-size: 10px;

  overflow-x: auto;
`;

const SelectSheet = styled.button`
  display: flex;
  align-items: center;
  height: 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px 0 0 8px;
  background-color: white;
  color: ${({ $isActive }) =>
    $isActive ? "var(--color-navy)" : "var(--color-gray)"};
  border-color: ${({ $isActive }) =>
    $isActive ? "var(--color-navy)" : "var(--color-dark-gray)"};
  font-weight: var(--weight-bold);
`;

const SelectNews = styled.button`
  display: flex;
  align-items: center;
  height: 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0 8px 8px 0;
  background-color: white;
  color: ${({ $isActive }) =>
    $isActive ? "var(--color-navy)" : "var(--color-gray)"};
  border-color: ${({ $isActive }) =>
    $isActive ? "var(--color-navy)" : "var(--color-light-gray)"};
  font-weight: var(--weight-bold);
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  overflow-x: auto;
  white-space: nowrap;
`;

const Tag = styled.button`
  display: flex;
  width: fit-content;
  height: 20px;

  border: 1px solid var(--color-navy);
  border-radius: 4px;

  padding: 7px;
  font-size: 10px;
  font-weight: var(--weight-semi-bold);
  justify-content: center;
  align-items: center;

  background-color: ${({ $isActive }) =>
    $isActive ? "var(--color-navy)" : "var(--color-white)"};
  color: ${({ $isActive }) =>
    $isActive ? "var(--color-white)" : "var(--color-navy)"};
`;

const PreviewSheetList = styled.div`
  width: 100%;

  padding: 15px 0;
`;
