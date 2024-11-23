import React, { useState } from "react";
import styled from "styled-components";
import companyIcon from "../assets/icons/company.svg";
import jobIcon from "../assets/icons/job.svg";
import ModalBtn from "./Modal/ModalBtn";
import CompanyModal from "./CompanyModal";

export default function SelectModal({ onClose }) {
  const [currentModal, setCurrentModal] = useState("selectModal");

  const handleNext = () => {
    setCurrentModal("companyModal");
  };

  return (
    <>
      {currentModal === "selectModal" && (
        <Container>
          <ModalContainer>
            <ModalTitle>지원서 작성 방식</ModalTitle>
            <MainContainer>
              <Title>
                <Icon src={companyIcon} />
                회사 이름으로
              </Title>
              <ETC>
                자소플 내 등록된 회사를 선택하면 해당 회사에 맞는 추천 키워드 및
                <br />
                자소서 작성을 경험해보실 수 있어요
              </ETC>
            </MainContainer>
            <MainContainer>
              <Title>
                <Icon src={jobIcon} />
                관련된 직무로
              </Title>
              <ETC>
                ex. 마케팅, 프론트엔드 개발자, 컨설팅... <br />
                직무를 자세히 설정할수록 좋은 퀄리티의 자소서를 받아볼 수 있어요
              </ETC>
            </MainContainer>
            <BtnContainer>
              <ModalBtn text="취소" onClick={onClose} />
              <ModalBtn text="다음" onClick={handleNext} />
            </BtnContainer>
          </ModalContainer>
        </Container>
      )}

      {currentModal === "companyModal" && (
        <Container>
          <ModalContainer>
            <CompanyModal />
            <BtnContainer>
              <ModalBtn
                text="이전"
                onClick={() => setCurrentModal("selectModal")}
              />
              <ModalBtn text="닫기" onClick={handleClose} />
            </BtnContainer>
          </ModalContainer>
        </Container>
      )}
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
`;

const ModalContainer = styled.div`
  width: 440px;
  height: auto;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
`;

const ModalTitle = styled.p`
  margin-top: 12px;
  font-size: 20px;
  font-weight: 700;
  padding-left: 12px;
  padding-bottom: 14px;
  color: #111111;
`;

const MainContainer = styled.div`
  height: 132px;
  border-radius: 8px;
  background-color: #f0f3fa;
  border: 1px solid #c6d6e7;
  padding: 4px;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  font-size: 20px;
  font-weight: 700;
  padding-top: 8px;
  padding-left: 12px;
  padding-bottom: 14px;
  color: #111111;
`;

const ETC = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  padding-left: 12px;
  padding-bottom: 14px;
  color: #818181;
  text-align: center;
  line-height: 24px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  pointer-events: none;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 20px;
`;
