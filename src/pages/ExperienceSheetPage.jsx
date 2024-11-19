import PlusSheetCard from "/src/components/experience-sheet/PlusSheetCard";
import {
  Background,
  Container,
  TitleText,
  SheetContainer,
  SheetHorizonContainer,
} from "/src/components/experience-sheet/ExperienceSheetPage.style.js";
import SheetCard from "/src/components/experience-sheet/SheetCard";

function ExperienceSheetPage() {
  return (
    <Background>
      <Container>
        <TitleText>경험시트 목록</TitleText>
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
      </Container>
    </Background>
  );
}
export default ExperienceSheetPage;
