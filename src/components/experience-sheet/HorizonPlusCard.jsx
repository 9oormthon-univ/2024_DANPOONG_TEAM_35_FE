import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import SelectModal from "../SelectModal";
import { useState } from "react";

function HorizonPlusSheetCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Container onClick={handleModal}>
        <PlusIcon />
      </Container>
      {isModalOpen && <SelectModal onClose={handleModal} />}
    </>
  );
}
export default HorizonPlusSheetCard;

const Container = styled.div`
  width: 470px;
  cursor: pointer;

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
