import styled from "styled-components";
import { FaPen } from "react-icons/fa";
import useSelectedCardStore from "/src/stores/selectedCardStore";

function LetterBox({ id, title, subText, text, maxLength }) {
  const { selectedCardId, setSelectedCard, selectedCards } =
    useSelectedCardStore();

  const handleClick = () => {
    setSelectedCard(id);
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
            <PenIcon />
            {text.length} / {maxLength}
          </CountLetter>
        </TitleContainer>
        <SubText>{subText}</SubText>

        {/* 선택된 데이터 렌더링 */}
        <SheetCardContainer>
          {combinedCards.length > 0 ? (
            combinedCards.map((card, index) => (
              <Card key={card.id}>
                <CardTitle>{card.title}</CardTitle>
                <TagContainer $isSheet={index < cardData.selectedSheets.length}>
                  {card.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </TagContainer>
              </Card>
            ))
          ) : (
            <EmptyMessage>
              선택된 경험시트 또는 뉴스카드가 없습니다.
            </EmptyMessage>
          )}
        </SheetCardContainer>
      </LetterContainer>
    </Container>
  );
}

export default LetterBox;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-left: 180px;
  cursor: pointer;
`;

const LetterContainer = styled.div`
  width: 500px;
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
  margin-top: 20px;
  display: flex;
  gap: 10px;
  background-color: white;

  width: 460px;
  height: 70px;

  justify-content: center;
  border: 1px solid var(--color-light-gray);
  border-radius: 10px;
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
