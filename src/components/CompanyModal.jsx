import React, { useState } from "react";
import styled from "styled-components";
import companyData from "../data/company.js";
import ModalBtn from "./Modal/ModalBtn";
import JobModal from "./JobModal";

export default function CompanyModal({ onClose }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
    setIsDropdownOpen(false);
  };

  const handleNext = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Container>
        <ModalContainer>
          <ModalTitle>회사명 검색</ModalTitle>
          <SelectBox onClick={toggleDropdown}>
            <SelectedText>
              {selectedCompany || "회사명을 선택해주세요"}
            </SelectedText>
            <DropdownIcon>▼</DropdownIcon>
          </SelectBox>
          {isDropdownOpen && (
            <Dropdown>
              {companyData.map((company, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleSelectCompany(company)}
                >
                  {company}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
          <BtnContainer>
            <ModalBtn text="이전" onClick={onClose} />
            <ModalBtn text="다음" onClick={handleNext} />
          </BtnContainer>
        </ModalContainer>
      </Container>
      {isModalOpen && <JobModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  gap: 12px;
`;
const ModalContainer = styled.div`
  position: relative;
  width: 440px;
  height: 480px;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
`;

const ModalTitle = styled.p`
  margin-top: 12px;
  font-size: 20px;
  font-weight: 700;
  padding-left: 12px;
  padding-bottom: 14px;
  color: #111111;
`;
const SelectBox = styled.div`
  width: 416px;
  height: 40px;
  border: 1px solid #c6d6e7;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  background-color: #f9f9f9;
`;

const SelectedText = styled.span`
  font-size: 14px;
  color: #818181;
`;

const DropdownIcon = styled.span`
  font-size: 12px;
  color: #818181;
`;

const Dropdown = styled.div`
  margin-top: 8px;
  width: 100%;
  border: 1px solid #c6d6e7;
  border-radius: 8px;
  background-color: #ffffff;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.div`
  display: flex;
  height: 32px;
  padding: 12px 12px;
  cursor: pointer;
  font-size: 14px;
  align-items: center;
  color: #111111;
  &:hover {
    background-color: #f0f3fa;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 12px;
  width: 95%;
`;
