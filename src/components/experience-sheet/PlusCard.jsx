import { useState } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import ExperienceModal from "/src/components/ExperienceModal.jsx";

function PlusSheetCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Container onClick={handleModal}>
        <PlusIcon />
      </Container>
      {isModalOpen && <ExperienceModal onClose={handleModal} />}
    </>
  );
}
export default PlusSheetCard;

const Container = styled.div`
  width: 200px;
  cursor: pointer;
  &:hover {
    border: 1px solid #246beb;
  }

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
