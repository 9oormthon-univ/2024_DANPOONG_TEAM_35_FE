import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";
import useSelectedCardStore from "/src/stores/selectedCardStore";

function PreviewNewsCard() {
  const { selectedCardId, selectedCards, toggleNewsForCard } =
    useSelectedCardStore();

  const currentCard = selectedCards[selectedCardId] || {
    selectedSheets: [],
    selectedNewsCards: [],
  };

  const isSelected = (card) =>
    currentCard.selectedNewsCards.some((selected) => selected.id === card.id);

  const cards = [
    {
      id: "news-1",
      title: "데이터 분석 워크샵",
      tags: ["워크샵", "리더십", "팀워크"],
    },
    {
      id: "news-2",
      title: "대한전기학회 워크샵",
      tags: ["워크샵", "창의성", "문제해결"],
    },
    {
      id: "news-3",
      title: "프로그래밍 스터디",
      tags: ["스터디", "개발", "협업"],
    },
    {
      id: "news-4",
      title: "프로그래밍 스터디",
      tags: ["스터디", "개발", "협업"],
    },
    {
      id: "news-5",
      title: "프로그래밍 스터디",
      tags: ["스터디", "개발", "협업"],
    },
    {
      id: "news-6",
      title: "프로그래밍 스터디",
      tags: ["스터디", "개발", "협업"],
    },
    {
      id: "news-7",
      title: "프로그래밍 스터디",
      tags: ["스터디", "개발", "협업"],
    },
    {
      id: "news-8",
      title: "프로그래밍 스터디",
      tags: ["스터디", "개발", "협업"],
    },
  ];

  return (
    <Background>
      {cards.map((card) => (
        <Container
          key={card.id}
          $isSelected={isSelected(card)}
          onClick={() => {
            if (selectedCardId) {
              toggleNewsForCard(selectedCardId, card);
            } else {
              alert("카드를 먼저 선택해주세요!");
            }
          }}
        >
          <TopContainer>
            <TitleText>{card.title}</TitleText>
            <CheckBox $isChecked={isSelected(card)}>
              {isSelected(card) && <CheckIcon />}
            </CheckBox>
          </TopContainer>
          <TagContainer>
            {card.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagContainer>
        </Container>
      ))}
    </Background>
  );
}

export default PreviewNewsCard;

const Background = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
  box-sizing: border-box;

  scrollbar-width: thin;
  scrollbar-color: var(--color-dark-gray) var(--color-light-gray);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-light-gray);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-dark-blue);
    border-radius: 10px;
  }
`;

const Container = styled.div`
  width: 140px;
  height: 40px;
  background-color: ${(props) =>
    props.$isSelected ? "var(--color-light-blue)" : "white"};
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.$isSelected ? "var(--color-dark-blue)" : "var(--color-light-gray)"};
  padding: 12px;
  cursor: pointer;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.p`
  font-size: 12px;
  font-weight: var(--weight-bold);
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 14px;
  height: 14px;

  border: 1px solid gray;
  background-color: ${(props) =>
    props.$isChecked ? "var(--color-dark-blue)" : "white"};
  color: ${(props) => (props.$isChecked ? "white" : "black")};
`;

const CheckIcon = styled(FaCheck)`
  width: 10px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
  font-size: 10px;

  :first-of-type {
    background-color: var(--color-dark-mint);
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
  overflow-x: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background: var(--color-light-gray);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-dark-blue);
    border-radius: 4px;
  }
`;
