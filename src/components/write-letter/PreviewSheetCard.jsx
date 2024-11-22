import styled from "styled-components";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

function PreviewSheetCard() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "데이터 분석 워크샵",
      tags: ["워크샵", "리더십", "팀워크"],
      $isChecked: false,
    },
    {
      id: 2,
      title: "대한전기학회 워크샵",
      tags: ["워크샵", "창의성", "문제해결"],
      $isChecked: false,
    },
    {
      id: 3,
      title: "프로그래밍 스터디",
      tags: ["스터디", "개발", "협업"],
      $isChecked: false,
    },
    {
      id: 4,
      title: "프로그래밍 스터디",
      tags: ["스터디", "개발", "협업"],
      $isChecked: false,
    },
  ]);

  const handleCheckboxClick = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, $isChecked: !card.$isChecked } : card
      )
    );
  };

  return (
    <Background>
      {cards.map((card) => (
        <Container key={card.id}>
          <TopContainer>
            <TitleText>{card.title}</TitleText>
            <CheckBox onClick={() => handleCheckboxClick(card.id)}>
              <CheckInput type="checkbox" checked={card.$isChecked} readOnly />
              <CheckMark $isChecked={card.$isChecked}>
                {card.$isChecked && <FaCheck />}
              </CheckMark>
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

export default PreviewSheetCard;

const Background = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  justify-content: center;
`;

const Container = styled.div`
  width: 140px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid var(--color-light-gray);
  padding: 15px;
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
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const CheckInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const CheckMark = styled.div`
  width: 14px;
  height: 14px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  background-color: ${(props) =>
    props.$isChecked ? "var(--color-dark-blue)" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    font-size: 10px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
  font-size: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Tag = styled.div`
  width: fit-content;
  border-radius: 4px;
  font-weight: var(--weight-medium);
  padding: 5px;
  background-color: var(--color-light-blue);
  color: var(--color-navy);
`;
