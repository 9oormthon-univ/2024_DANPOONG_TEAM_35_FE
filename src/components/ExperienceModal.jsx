import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ModalContent from "./Modal/ModalContent";
import ModalBottom from "./Modal/ModalBottom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { ko } from "date-fns/locale";

export default function ExperienceModal() {
  const [showDateRange, setShowDateRange] = useState(false);
  const formatDate = (date) =>
    date ? format(date, "yyyy-MM-dd") : "날짜를 입력해주세요";
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const toggleDateRange = () => {
    setShowDateRange((prev) => !prev);
  };
  return (
    <>
      <Container>
        <ModalContainer>
          <TopContainer>
            <TitleContainer>
              <Category>카테고리</Category>
              <TitleInput placeholder="제목을 입력하세요"></TitleInput>
            </TitleContainer>
            <DateBox onClick={toggleDateRange}>
              {state[0].startDate && state[0].endDate
                ? `${formatDate(state[0].startDate)} -  ${formatDate(
                    state[0].endDate
                  )}`
                : "날짜를 입력해주세요"}
            </DateBox>
            {showDateRange && (
              <DateRangeWrapper>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  locale={ko}
                />
              </DateRangeWrapper>
            )}
          </TopContainer>
          <MainContainer>
            <ModalContent
              text="문제상황"
              placeholder="내용을 입력해주세요 (200자 제한)"
            />
            <ModalContent
              text="해결방법"
              placeholder="내용을 입력해주세요 (200자 제한)"
            />
            <ModalContent
              text="결과 (성과, 나의 비중)"
              placeholder="내용을 입력해주세요 (200자 제한)"
            />
          </MainContainer>
          <ModalBottom />
        </ModalContainer>
      </Container>
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
  background-color: rgba(0, 0, 0, 0.1);
  gap: 12px;
`;
const ModalContainer = styled.div`
  width: 600px;
  height: 580px;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
`;

const TopContainer = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
`;

const TitleContainer = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #717171;
  border-radius: 8px;
  overflow: hidden;
`;

const Category = styled.div`
  padding: 10px;
  font-size: 14px;
  background-color: white;
  border-right: 1px solid #717171;
  outline: none;
`;

const TitleInput = styled.input`
  border: none;
  padding: 10px;
  font-size: 14px;
  outline: none;
`;

const DateBox = styled.div`
  padding-left: 8px;
  flex: 1;
  height: 40px;
  border: 1px solid #717171;
  border-radius: 8px;
  line-height: 40px;
  font-size: 14px;
  color: #828282;
  z-index: 2;
  overflow: hidden;
`;

const DateRangeWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 1;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MainContainer = styled.div`
  height: 400px;
  border: 1px solid #717171;
  border-radius: 8px;
`;
