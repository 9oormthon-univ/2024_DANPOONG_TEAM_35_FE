import styled from "styled-components";
import { FaPen } from "react-icons/fa";
import useLetterStore from "/src/stores/letterStore";
import useSheetStore from "/src/stores/sheetStore";
import useNewsStore from "/src/stores/newsStore";
import { useState } from "react";

function CompleteLetterBox({ id, title, subText, text, maxLength }) {
  const { clickedLetterId, setClickedLetter } = useLetterStore();
  const { selectedSheets } = useSheetStore();
  const { selectedNewsCards } = useNewsStore();
  const [textareaValue, setTextareaValue] = useState(text);

  const handleClick = () => {
    setClickedLetter(id);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
    e.target.style.height = "auto"; // Reset height to recalculate
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const isActive = clickedLetterId === id;

  const combinedCards = [...selectedSheets, ...selectedNewsCards].slice(0, 3);

  return (
    <Container $isActive={isActive} onClick={handleClick}>
      <LetterContainer $isActive={isActive}>
        <TitleContainer>
          <TitleText>{title}</TitleText>
          <CountLetter>
            <PenIcon />
            {textareaValue.length} / {maxLength}
          </CountLetter>
        </TitleContainer>
        <SubText>{subText}</SubText>
        <ResultWrapper>
          <TextInput
            value={textareaValue}
            onChange={handleTextareaChange}
            maxLength={maxLength}
          />
          <Line />
          {/* 경험 시트 & 뉴스 카드 최대 3개 표시 */}
          <SheetCardContainer>
            {combinedCards.length > 0 ? (
              combinedCards.map((card, index) => (
                <Card key={card.id}>
                  <CardTitle>{card.title}</CardTitle>
                  <TagContainer isSheet={index < selectedSheets.length}>
                    {card.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                  </TagContainer>
                </Card>
              ))
            ) : (
              <EmptyMessage>경험시트 또는 뉴스카드를 선택해주세요</EmptyMessage>
            )}
          </SheetCardContainer>
        </ResultWrapper>
      </LetterContainer>
    </Container>
  );
}

export default CompleteLetterBox;

const Container = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
`;

const LetterContainer = styled.div`
  width: 800px;
  background-color: var(--color-bg-blue);
  border-radius: 12px;
  border: 2px solid
    ${({ $isActive }) => ($isActive ? "var(--color-dark-blue)" : "transparent")};
  padding: 20px;
  margin-bottom: 20px;

  transition: border-color 0.3s ease-in-out;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-bold);
  margin-bottom: 5px;
`;

const SubText = styled.p`
  font-size: 12px;
  font-weight: var(--weight-regular);
  line-height: 15px;
  margin-bottom: 20px;

  min-height: 30px;
  display: flex;
  align-items: center;
`;

const CountLetter = styled.p`
  font-size: 12px;
  font-weight: var(--weight-regular);
`;

const PenIcon = styled(FaPen)`
  width: 8px;
  margin-right: 10px;
`;

const SheetCardContainer = styled.div`
  display: flex;
  gap: 10px;
  background-color: white;

  width: 760px;
  height: 70px;

  justify-content: center;
  border: none;
  border-radius: 0 0 10px 10px;
  padding: 20px;
`;

const Card = styled.div`
  width: 130px;
  height: 45px;
  background-color: var(--color-white);
  border: 1px solid var(--color-light-gray);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardTitle = styled.h4`
  font-size: 12px;
  font-weight: bold;
  color: var(--color-black);
  margin: 0;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
  font-size: 10px;

  :first-of-type {
    background-color: ${({ isSheet }) =>
      isSheet ? "var(--color-dark-blue)" : "var(--color-dark-mint)"};
    color: var(--color-light-blue);
  }
`;

const Tag = styled.div`
  width: fit-content;
  border-radius: 4px;
  font-weight: var(--weight-medium);
  padding: 5px;
  background-color: var(--color-light-blue);
  color: var(--color-navy);
  white-space: nowrap;
`;

const EmptyMessage = styled.p`
  font-size: 12px;
  color: var(--color-dark-gray);
  text-align: center;
  margin-top: 10px;
`;

const TextInput = styled.textarea`
  width: 800px;
  padding: 10px;
  border: none;
  border-radius: 8px 8px 0 0;

  font-size: 14px;
  font-weight: var(--weight-regular);
  color: var(--color-black);

  resize: none;
  overflow: hidden;

  line-height: 1.5;
  box-sizing: border-box;

  min-height: 50px;
`;

const ResultWrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid var(--color-light-gray);
`;

const Line = styled.p`
  width: 100%;
  height: 1px;
  background-color: var(--color-light-gray);
`;
