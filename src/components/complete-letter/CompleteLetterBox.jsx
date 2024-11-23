import styled from "styled-components";
import { FaPen } from "react-icons/fa";
import useSelectedCardStore from "/src/stores/selectedCardStore";
import { useState } from "react";

function CompleteLetterBox({
  id,
  title,
  subText,
  text,
  maxLength: initialMaxLength,
}) {
  const { selectedCardId, setSelectedCard, selectedCards } =
    useSelectedCardStore();
  const [textareaValue, setTextareaValue] = useState(text);
  const [isEditingMaxLength, setIsEditingMaxLength] = useState(false);
  const [maxLength, setMaxLength] = useState(initialMaxLength);
  const [tempMaxLength, setTempMaxLength] = useState(maxLength);

  const handleClick = () => {
    setSelectedCard(id);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handlePenClick = () => {
    setIsEditingMaxLength(true);
  };

  const handleMaxLengthChange = (e) => {
    setTempMaxLength(e.target.value);
  };

  const handleMaxLengthKeyDown = (e) => {
    if (e.key === "Enter") {
      const newMaxLength = parseInt(tempMaxLength, 10);
      if (!isNaN(newMaxLength) && newMaxLength > 0) {
        setMaxLength(newMaxLength);
        setIsEditingMaxLength(false);
      }
    }
  };

  const isActive = selectedCardId === id;

  const cardData = selectedCards[id] || {
    selectedSheets: [],
    selectedNewsCards: [],
  };

  const combinedCards = [
    ...cardData.selectedSheets,
    ...cardData.selectedNewsCards,
  ].slice(0, 3);

  return (
    <Container $isActive={isActive} onClick={handleClick}>
      <LetterContainer $isActive={isActive}>
        <TitleContainer>
          <TitleText>{title}</TitleText>
          <CountLetter>
            {isEditingMaxLength ? (
              <MaxLengthInput
                type="number"
                value={tempMaxLength}
                onChange={handleMaxLengthChange}
                onKeyDown={handleMaxLengthKeyDown}
              />
            ) : (
              <>
                <PenIcon onClick={handlePenClick} />
                {textareaValue.length} / {maxLength}
              </>
            )}
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
                  <TagContainer
                    $isSheet={index < cardData.selectedSheets.length}
                  >
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

// 스타일 정의
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
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PenIcon = styled(FaPen)`
  width: 8px;
  margin-right: 10px;
  cursor: pointer;
`;

const MaxLengthInput = styled.input`
  width: 40px;
  font-size: 12px;
  font-weight: var(--weight-regular);
  border: 1px solid var(--color-light-gray);
  border-radius: 4px;
  text-align: center;
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
    background-color: ${({ $isSheet }) =>
      $isSheet ? "var(--color-dark-blue)" : "var(--color-dark-mint)"};
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

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-light-gray);
`;
