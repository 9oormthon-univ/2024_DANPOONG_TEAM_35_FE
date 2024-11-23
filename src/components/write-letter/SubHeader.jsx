import { Link } from "react-router-dom";
import styled from "styled-components";

function SubHeader() {
  const currentDate = () => {
    const now = new Date();
    const todayYear = now.getFullYear();
    const todayMonth = String(now.getMonth() + 1).padStart(2, "0");
    const todayDate = String(now.getDate()).padStart(2, "0");

    const hour = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");

    return `${todayYear}-${todayMonth}-${todayDate} ${hour}:${min}`;
  };

  return (
    <Container>
      <TagContainer>
        <Tag># 네이버</Tag>
        <Tag># 프론트엔드 개발자</Tag>
      </TagContainer>
      <DateText>{currentDate()}</DateText>
      <CompleteButton to="/complete-letter">AI 자소서 작성하기</CompleteButton>
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
  align-items: center;
  height: 8px;
  padding: 8px;

  border: 0.5px solid var(--color-gray);
  border-radius: 15px;
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
  right: 260px;
`;

const CompleteButton = styled(Link)`
  display: flex;
  align-items: center;

  height: 6px;
  position: fixed;
  right: 125px;
  padding: 10px;

  background-color: var(--color-dark-blue);
  color: white;
  border-radius: 5px;
  border: none;

  font-size: 12px;
  font-weight: var(--weight-bold);

  cursor: pointer;
`;
