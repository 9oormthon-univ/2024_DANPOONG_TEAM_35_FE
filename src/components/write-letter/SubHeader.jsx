import styled from "styled-components";

function SubHeader() {
  const currentDate = () => {
    const now = new Date();
    const todayYear = now.getFullYear();
    const todayMonth = now.getMonth() + 1;
    const todayDate = now.getDate();

    const hour = now.getHours();
    const min = now.getMinutes();

    return (
      todayYear + "-" + todayMonth + "-" + todayDate + " " + hour + ":" + min
    );
  };

  return (
    <Container>
      <TagContainer>
        <Tag># 네이버</Tag>
        <Tag># 프론트엔드 개발자</Tag>
      </TagContainer>
      <DateText>{currentDate()}</DateText>
      <CompleteButton>작성 완료</CompleteButton>
    </Container>
  );
}

export default SubHeader;

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  background-color: #fafafa;

  position: fixed;
  top: 40;
  z-index: 100;

  border-bottom: 1px solid var(--color-light-gray);
`;

const TagContainer = styled.div`
  display: flex;
  position: fixed;
  left: 140px;
  gap: 10px;
`;

const Tag = styled.div`
  display: flex;
  padding: 5px;

  border: 1px solid var(--color-gray);
  border-radius: 4px;
  background-color: white;

  font-size: 12px;
  font-weight: var(--weight-bold);

  color: var(--color-dark-gray);
`;

const DateText = styled.div`
  font-size: 12px;
  font-weight: var(--weight-semi-bold);
  color: var(--color-dark-gray);

  position: fixed;
  right: 220px;
`;

const CompleteButton = styled.button`
  display: flex;
  align-items: center;

  height: 24px;
  position: fixed;
  right: 120px;

  background-color: #d8d8d8;
  color: var(--color-dark-gray);
  border-radius: 5px;

  font-size: 12px;
  font-weight: var(--weight-bold);

  cursor: pointer;
`;
