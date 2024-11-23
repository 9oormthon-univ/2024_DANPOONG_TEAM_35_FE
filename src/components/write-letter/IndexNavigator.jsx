import styled from "styled-components";

function IndexNavigator({ onNavigate }) {
  return (
    <Container>
      <Text onClick={() => onNavigate(1)}>1. 지원동기</Text>
      <Text onClick={() => onNavigate(2)}>2. 직무역량</Text>
      <Text onClick={() => onNavigate(3)}>3. 도전</Text>
      <Text onClick={() => onNavigate(4)}>4. 창의성</Text>
      <Text onClick={() => onNavigate(5)}>5. 팀워크 / 협업</Text>
    </Container>
  );
}

export default IndexNavigator;

const Container = styled.div`
  position: fixed;
  top: 180px;
  left: 120px;
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  border-radius: 8px;
  z-index: 100;
  overflow-x: hidden;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: var(--weight-semi-bold);
  color: var(--color-dark-gray);
  cursor: pointer;

  &:hover {
    color: var(--color-dark-blue);
  }
`;
