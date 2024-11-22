import styled from "styled-components";

function LetterBox({ title, subText, text, maxLength, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <LetterContainer>
        <TitleContainer>
          <TitleText>{title}</TitleText>
          <CountLetter>
            {text.length} / {maxLength}
          </CountLetter>
        </TitleContainer>
        <SubText>{subText}</SubText>
        <TextBox value={text} onChange={handleChange} maxLength={maxLength} />
      </LetterContainer>
    </Container>
  );
}

export default LetterBox;

const Container = styled.div`
  display: flex;

  padding-left: 140px;
`;

const LetterContainer = styled.div`
  width: 500px;
  height: 140px;

  background-color: var(--color-bg-blue);

  border-radius: 12px;
  border: 0.5px solid var(--color-light-gray);
  padding: 20px;
  margin-bottom: 20px;
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

const TextBox = styled.textarea`
  width: 100%;
  background-color: white;

  border: 1px solid var(--color-light-gray);
  border-radius: 8px;

  font-size: 14px;
  font-weight: var(--weight-regular);
  color: var(--color-black);

  resize: none;

  line-height: 1.5;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
`;
