import PlusSheetCard from "/src/components/experience-sheet/PlusCard";
import {
  Background,
  Container,
  TitleText,
  SheetContainer,
  SheetHorizonContainer,
  SizedBox,
} from "/src/components/experience-sheet/ExperienceSheetPage.style.js";
import SheetCard from "/src/components/experience-sheet/SheetCard";
import LetterCard from "../components/experience-sheet/LetterCard";
import HorizonPlusSheetCard from "../components/experience-sheet/HorizonPlusCard";
import NewsCard from "../components/experience-sheet/NewsCard";

function ExperienceSheetPage() {
  return (
    <Background>
      <Container>
        <TitleText>경험 시트 목록</TitleText>
        <SheetContainer>
          <SheetHorizonContainer>
            <SheetCard />
            <SheetCard />
            <SheetCard />
            <SheetCard />
          </SheetHorizonContainer>
          <SheetHorizonContainer>
            <SheetCard />
            <SheetCard />
            <SheetCard />
            <PlusSheetCard />
          </SheetHorizonContainer>
        </SheetContainer>
        <SizedBox />
        <TitleText>업계 소식 목록</TitleText>
        <SheetContainer>
          <SheetHorizonContainer>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </SheetHorizonContainer>
          <SheetHorizonContainer>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <PlusSheetCard />
          </SheetHorizonContainer>
        </SheetContainer>
        <SizedBox />
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
