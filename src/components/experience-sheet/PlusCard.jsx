import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

function PlusSheetCard() {
  return (
    <Container>
      <PlusIcon />
    </Container>
  );
}
export default PlusSheetCard;

const Container = styled.div`
  width: 200px;

  background-color: white;
  border: 1px solid var(--color-light-gray);
  border-radius: 10px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlusIcon = styled(FiPlus)`
  font-size: 24px;
  stroke-width: 2;
`;
