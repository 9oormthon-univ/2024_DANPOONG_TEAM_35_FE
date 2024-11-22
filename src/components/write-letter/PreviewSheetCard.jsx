import styled from "styled-components";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

function PreviewSheetCard() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <TopContainer>
        <TitleText>데이터 분석 워크샵</TitleText>
        <CheckBox onClick={handleCheckboxClick}>
          <CheckInput type="checkbox" checked={isChecked} readOnly />
          <CheckMark isChecked={isChecked}>
            {isChecked && <FaCheck />}
          </CheckMark>
        </CheckBox>
      </TopContainer>
      <TagContainer>
        <TitleTag>워크샵</TitleTag>
        <Tag>리더십</Tag>
        <Tag>리더십</Tag>
        <Tag>리더십</Tag>
      </TagContainer>
    </Container>
  );
}

export default PreviewSheetCard;

const Container = styled.div`
  width: 160px;

  background-color: white;
  border-radius: 12px;

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
    props.isChecked ? "var(--color-dark-blue)" : "transparent"};
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

const TitleTag = styled.div`
  width: fit-content;
  border-radius: 4px;

  font-weight: var(--weight-bold);
  padding: 5px;

  background-color: var(--color-dark-blue);
  color: white;
`;

const Tag = styled.div`
  width: fit-content;
  border-radius: 4px;

  font-weight: var(--weight-medium);
  padding: 5px;

  background-color: var(--color-light-blue);
  color: var(--color-navy);
`;
