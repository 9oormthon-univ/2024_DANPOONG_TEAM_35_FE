import PlusSheetCard from "/src/components/experience-sheet/PlusCard";
import {
  Background,
  Container,
  TitleText,
  SheetContainer,
  SheetHorizonContainer,
} from "/src/components/experience-sheet/ExperienceSheetPage.style.js";
import SheetCard from "/src/components/experience-sheet/SheetCard";
import LetterCard from "../components/experience-sheet/LetterCard";
import HorizonPlusSheetCard from "../components/experience-sheet/HorizonPlusCard";
import NewsCard from "../components/experience-sheet/NewsCard";
import NewsPlusCard from "../components/experience-sheet/NewsPlusCard";
import experience from "../data/experience";
import { useState, useEffect } from "react";
import axios from "axios";

function ExperienceSheetPage() {
  const [newsList, setNewsList] = useState([]);

  const fetchNewsList = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/api/industry-info/view/all`
      );
      setNewsList(response.data.result);
    } catch (error) {
      console.error("업계 소식 데이터를 불러오는 중 에러 발생:", error);
    }
  };

  useEffect(() => {
    fetchNewsList();
  }, []);
  return (
    <Background>
      <Container>
        <TitleText>경험 시트 목록</TitleText>
        <SheetContainer>
          <SheetHorizonContainer>
            {experience.map((data, index) => (
              <SheetCard
                key={index}
                title={data.title}
                subtext={data.background}
                tags={data.keywordList.map((keyword) => keyword.toString())}
              />
            ))}
            <PlusSheetCard />
          </SheetHorizonContainer>
        </SheetContainer>

        <TitleText>업계 소식 목록</TitleText>
        <SheetContainer>
          <SheetHorizonContainer>
            {newsList.map((news, index) => (
              <NewsCard key={index} title={news.title} content={news.content} />
            ))}
            <NewsPlusCard />
          </SheetHorizonContainer>
        </SheetContainer>

        <TitleText>자기소개서 작성</TitleText>
        <SheetContainer>
          <SheetHorizonContainer>
            <LetterCard />
            <LetterCard />
          </SheetHorizonContainer>
          <SheetHorizonContainer>
            <LetterCard />
            <HorizonPlusSheetCard />
          </SheetHorizonContainer>
        </SheetContainer>
      </Container>
    </Background>
  );
}
export default ExperienceSheetPage;
