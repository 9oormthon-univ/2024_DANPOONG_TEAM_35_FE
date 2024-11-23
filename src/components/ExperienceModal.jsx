import styled from "styled-components";
import { useState, useEffect } from "react";
import ModalContent from "./Modal/ModalContent";
import ModalBottom from "./Modal/ModalBottom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { ko } from "date-fns/locale";
import calendarIcon from "../assets/icons/calendar.svg";
import dropdownIcon from "../assets/icons/dropdown.svg";
import axios from "axios";

export default function ExperienceModal({ onClose }) {
  const [showDateRange, setShowDateRange] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [title, setTitle] = useState("");
  const [background, setBackground] = useState("");
  const [solution, setSolution] = useState("");
  const [result, setResult] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const formatDate = (date) =>
    date ? format(date, "yyyy-MM-dd") : "날짜를 입력해주세요";
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const CategoryData = async () => {
    // const accessToken = localStorage.getItem("accessToken");
    console.log(localStorage.getItem("accessToken"));

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/api/category/list`
        // {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // }
      );
      console.log(response);
      setCategories(response.data.result);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const onSubmitHandler = async () => {
    const accessToken = localStorage.getItem("accessToken");
    // const token =
    //   "eyJ0eXBlIjoiYWNjZXNzVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE3MzIzOTM4OTYsImV4cCI6MTczMjM5NzQ5Nn0.5q7lw7DFgxw6nrorjdvtqTdtYAZ7zSZYC9VTl_HRjn4";
    console.log(localStorage.getItem("accessToken"));

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/api/experience/write`,
        {
          title: title,
          categoryId: selectedCategory,
          background: background,
          solution: solution,
          result: result,
          startDate: formatDate(state[0].startDate),
          endDate: formatDate(state[0].endDate),
          keywordList: [0],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("작성 성공:", response);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDateRange = () => {
    setShowDateRange((prev) => !prev);
  };

  useEffect(() => {
    CategoryData();
  }, []);

  console.log(categories);

  return (
    <>
      <Container>
        <ModalContainer>
          <TopContainer>
            <TitleContainer>
              <Category>
                {/* <DropdownIcon src={dropdownIcon} /> */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)} // 선택된 카테고리 ID 출력
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </Category>
              <TitleInput
                placeholder="제목을 입력하세요"
                onChange={(e) => setTitle(e.target.value)}
              ></TitleInput>
            </TitleContainer>
            <DateBox onClick={toggleDateRange}>
              {state[0].startDate && state[0].endDate
                ? `${formatDate(state[0].startDate)} -  ${formatDate(
                    state[0].endDate
                  )}`
                : "날짜를 입력해주세요"}
              <CalendarIcon src={calendarIcon} />
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
              onChange={(e) => setBackground(e.target.value)}
            />
            <ModalContent
              text="해결방법"
              placeholder="내용을 입력해주세요 (200자 제한)"
              onChange={(e) => setSolution(e.target.value)}
            />
            <ModalContent
              text="결과 (성과, 나의 비중)"
              placeholder="내용을 입력해주세요 (200자 제한)"
              onChange={(e) => setResult(e.target.value)}
            />
          </MainContainer>
          <ModalBottom onClose={onClose} onSave={onClose} />
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
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  background-color: white;
  border-right: 1px solid #717171;
  outline: none;
`;
const DropdownIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  top: 24%;
  pointer-events: none;
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
  align-items: center;
  position: relative;
`;

const CalendarIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 8px;
  top: 26%;
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
