import { useState, useRef } from "react";
import LetterBox from "/src/components/complete-letter/CompleteLetterBox.jsx";
import {
  Background,
  WriteContainer,
} from "/src/components/complete-letter/CompleteLetterPage.style.js";
import IndexNavigator from "../components/write-letter/IndexNavigator";
import SubHeader from "../components/write-letter/SubHeader";
import TitleHeader from "../components/write-letter/TitleHeader";

function WriteCoverLetterPage() {
  const [letters, setLetters] = useState([
    {
      id: 1,
      title: "1. 지원동기 및 포부",
      subText:
        "기업명을 선택한 이유와 입사 후 회사에서 이루고 싶은 꿈을 기술하십시오.",
      text: "",
      maxLength: 300,
    },
    {
      id: 2,
      title: "2. 직무역량",
      subText:
        "[기업명] 해당 직무 분야에 지원하게 dd 된 이유와 선택 직무에 본인이 적합하다고 판단할 수 있는 이유 및 근거를 제시해주십시오.",
      text: "",
      maxLength: 300,
    },
    {
      id: 3,
      title: "3. 도전 (성공 / 실패)",
      subText:
        "[기업명] 학업 외 가장 열정적이고 도전적으로 몰입하여 성과를 창출했거나 목표를 달성한 경험을 알려주세요.",
      text: "",
      maxLength: 300,
    },
    {
      id: 4,
      title: "4. 창의성 (문제해결능력)",
      subText:
        "[기업명] 남들과 다른 새로운 관점으로 변화/ 혁신을 추구한 경험과 그를 통해 배운점이 있나요?",
      text: "",
      maxLength: 300,
    },
    {
      id: 5,
      title: "5. 팀워크 / 협업",
      subText:
        "[기업명] 공동의 목표를 달성하기 위해 타인과 협업했던 경험과 그 과정에서 본인이 수행한 역할, 그리고 해당 경험을 통해 얻은 것은 무엇인가요?",
      text: "",
      maxLength: 300,
    },
  ]);

  const sectionRefs = useRef([]);

  const handleTextChange = (id, newText) => {
    setLetters((prev) =>
      prev.map((letter) =>
        letter.id === id ? { ...letter, text: newText } : letter
      )
    );
  };

  // 목차 클릭 시 특정 세션으로 스크롤
  const handleNavigate = (id) => {
    const section = sectionRefs.current[id - 1];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SubHeader />
      <TitleHeader />
      <Background>
        <IndexNavigator onNavigate={handleNavigate} />
        <WriteContainer>
          {letters.map((letter, index) => (
            <div
              key={letter.id}
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <LetterBox
                id={letter.id}
                title={letter.title}
                placeholder={letter.placeholder}
                subText={letter.subText}
                text={letter.text}
                maxLength={letter.maxLength}
                onChange={(newText) => handleTextChange(letter.id, newText)}
              />
            </div>
          ))}
        </WriteContainer>
      </Background>
    </>
  );
}

export default WriteCoverLetterPage;
