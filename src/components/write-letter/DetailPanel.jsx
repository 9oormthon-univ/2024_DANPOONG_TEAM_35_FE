import styled from "styled-components";

function DetailPanel() {
  return (
    <Container>
      <TopContainer>
        <TitleText>2024 1학기 파이썬 강의</TitleText>
        <Date>2024.10.10 - 2024.11.10</Date>
      </TopContainer>
      <MainContainer>
        <TagContainer>
          <TitleTag>리더십</TitleTag>
          <Tag>창의력</Tag>
          <Tag>도전</Tag>
          <Tag>열정</Tag>
        </TagContainer>
        <TextBox>
          팀 프로젝트에서 발생한 갈등, 2024-1학기에 수강한 파이썬 전공강의에서
          팀 프로젝트 과제가 주어졌습니다. 프로젝트 주제는 데이터를 분석해 의미
          있는 결과를 도출하는 것이었는데, 팀원 간 역할 분담 문제와 코드 작성
          방식에 대한 의견 충돌로 인해 초기 진행이 지연되었습니다. 특히, 서로의
          의견을 이해하려는 노력보다는 자신의 주장만을 강조하는 분위기가
          형성되어 프로젝트의 방향성이 흔들렸습니다.
        </TextBox>
      </MainContainer>
    </Container>
  );
}

export default DetailPanel;

const Container = styled.div`
  width: 370px;
  height: 200px;

  position: fixed;
  top: 430px;
  background-color: var(--color-bg-blue);
  border-radius: 15px;
  border: 1px solid var(--color-light-gray);
  padding: 20px;
`;

const TitleText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-bold);
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: var(--weight-regular);
  color: var(--color-gray);
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  font-size: 10px;
  padding: 10px;

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

  font-size: 10px;
  font-weight: var(--weight-medium);
  padding: 5px;

  background-color: var(--color-light-blue);
  color: var(--color-navy);
`;

const MainContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: white;
  border-radius: 10px;
`;

const TextBox = styled.div`
  color: var(--color-gray);
  font-size: 12px;
  line-height: 16px;
  padding: 0 10px;
`;
