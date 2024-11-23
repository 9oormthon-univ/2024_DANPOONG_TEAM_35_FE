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
      text: `저는 네이버를 사용자 경험 중심의 혁신을 선도하는 IT 기업으로 생각하며, 네이버에서의 웹 개발은 단순히 기술적 구현을 넘어 사용자에게 가치를 전달하는 데 초점이 맞춰져 있다고 믿습니다. 프론트엔드 최신 기술과 사용자 니즈를 깊이 이해하며 사용자 중심 개발을 경험한 저는, 네이버의 가치와 제 경험이 잘 맞아떨어진다고 느꼈습니다. 특히, 네이버는 끊임없이 기술을 발전시키고 새로운 도전을 이어가는 기업으로, WebRTC를 활용한 실시간 커뮤니케이션 플랫폼 등 최신 기술 트렌드를 빠르게 반영하고 있습니다. 제가 기여하고 싶은 부분은 바로 이러한 기술들을 사용자 친화적인 방식으로 구현하여 사용자가 자연스럽게 네이버 서비스를 통해 편리함과 만족감을 느끼게 하는 것입니다. 입사 후에는 사용자 경험의 만족도를 극대화할 수 있는 웹 개발을 목표로 하고, 프론트엔드와 백엔드의 효율적인 협업을 통해 고도화된 서비스를 만들어 나가고 싶습니다. 또한, 최신 기술 트렌드에 기반한 새로운 개발 방법론을 도입하고 이를 팀원들과 공유하며 팀 전체의 역량을 강화하는 데 기여하고자 합니다. 네이버와 함께 사용자가 중심이 되는 혁신적인 서비스를 만들어가고 싶습니다.`,
      maxLength: 300,
    },
    {
      id: 2,
      title: "2. 직무역량",
      subText:
        "[기업명] 해당 직무 분야에 지원하게 dd 된 이유와 선택 직무에 본인이 적합하다고 판단할 수 있는 이유 및 근거를 제시해주십시오.",
      text: "저는 네이버 웹 개발자 직무를 통해 사용자 친화적인 웹 서비스를 구현하고 싶다는 열망을 가지고 지원했습니다. 이러한 직무는 단순히 코드 작성에 국한되지 않고, 사용자 경험을 분석하고 이를 기반으로 직관적이고 효율적인 서비스를 설계하는 과정이 필수적이라고 생각합니다. 교내 데이터분석 워크샵에 참여하며 데이터의 시각적 표현과 사용자 접근성에 대해 고민한 경험이 있습니다. 이 과정에서 데이터의 의미를 효과적으로 전달하기 위해 다이나믹 시각화 기술을 활용하며, 사용자가 쉽고 빠르게 데이터를 이해할 수 있는 인터페이스를 설계한 바 있습니다. 또한, 포스코 서버관리 인턴으로 근무하며 대규모 데이터를 처리하고 안정적인 서버 환경을 유지하는 역할을 맡아 기술적 문제를 해결하는 역량을 키웠습니다. 특히, 웹 프론트엔드 구현 방식에 대한 최신 기사를 통해 컴포넌트 기반 설계와 SPA(Single Page Application) 방식이 사용자 중심의 개발에 미치는 영향을 이해했습니다. 이러한 경험과 학습은 저를 사용자 요구와 기술적 트렌드를 모두 이해하며 조화롭게 적용할 수 있는 개발자로 성장하게 했습니다. 이를 기반으로 네이버에서 사용자에게 최적화된 웹 환경을 제공할 수 있는 개발자가 되고자 합니다.",
      maxLength: 300,
    },
    {
      id: 3,
      title: "3. 도전 (성공 / 실패)",
      subText:
        "[기업명] 학업 외 가장 열정적이고 도전적으로 몰입하여 성과를 창출했거나 목표를 달성한 경험을 알려주세요.",
      text: "교내 데이터분석 워크샵에서 저는 데이터를 단순히 분석하는 것을 넘어 사용자에게 의미 있는 방식으로 전달하고자 하는 목표를 세웠습니다. 특히, 대규모 데이터를 분석하여 학생들이 진로를 선택하는 데 도움을 주는 플랫폼을 설계하는 데 주도적으로 참여했습니다. 이 과정에서 처음으로 JavaScript 기반 데이터 시각화 라이브러리를 다루며 인터렉티브 차트를 구현했지만, 초기에는 성능 문제가 발생하여 사용자가 데이터를 실시간으로 확인하지 못하는 어려움이 있었습니다. 이에 성능 병목 지점을 분석하고, 서버와 클라이언트 간의 데이터 전송 효율을 높이는 기술적 개선을 통해 문제를 해결했습니다. 이 경험을 통해 기술적 한계를 넘어서는 끈기와 새로운 기술을 빠르게 습득하는 능력을 키울 수 있었습니다. 최종적으로 플랫폼은 학생들로부터 긍정적인 피드백을 받았고, 이는 제가 사용자 중심의 개발에 대한 확신을 가지게 되는 계기가 되었습니다. 네이버에서도 이러한 열정과 역량으로 도전적이고 창의적인 프로젝트를 성공적으로 수행하고 싶습니다.",
      maxLength: 300,
    },
    {
      id: 4,
      title: "4. 창의성 (문제해결능력)",
      subText:
        "[기업명] 남들과 다른 새로운 관점으로 변화/ 혁신을 추구한 경험과 그를 통해 배운점이 있나요?",
      text: "사용자 중심 웹 개발 프로젝트에서 새로운 접근 방식을 통해 문제를 해결한 경험이 있습니다. 당시 프로젝트의 핵심 과제는 다양한 사용자 환경에서 동일한 경험을 제공하는 것이었고, 이를 위해 접근성(Accessibility)을 강화한 UI를 설계해야 했습니다. 기존에는 반응형 디자인만으로 문제를 해결하려 했지만, 사용자 테스트 결과 시각적 편의성만으로는 모든 사용자에게 최적의 경험을 제공할 수 없다는 것을 알게 되었습니다. 이에 WAI-ARIA(Accessible Rich Internet Applications) 표준을 적용하여 시각적 요소뿐만 아니라 화면 읽기 소프트웨어와도 호환되는 인터페이스를 개발했습니다. 이 접근법은 기존의 관점에서 벗어나, 단순히 화면 상의 아름다움이 아니라 기술적 접근성과 사용자 경험 모두를 만족시키는 방향으로 나아가게 했습니다. 이 경험은 문제를 바라보는 시야를 넓히고, 사용자를 위한 진정한 혁신은 세부적인 고민에서 나온다는 교훈을 주었습니다. 네이버에서도 사용자의 입장에서 새로운 가능성을 탐구하며 혁신적인 서비스를 만들고 싶습니다.",
      maxLength: 300,
    },
    {
      id: 5,
      title: "5. 팀워크 / 협업",
      subText:
        "[기업명] 공동의 목표를 달성하기 위해 타인과 협업했던 경험과 그 과정에서 본인이 수행한 역할, 그리고 해당 경험을 통해 얻은 것은 무엇인가요?",
      text: "교내 데이터분석 워크샵과 포스코 서버관리 인턴을 통해 협업의 중요성과 효과적인 팀워크의 방법을 깊이 배웠습니다. 데이터분석 워크샵에서는 팀원들과 역할을 분담하여 데이터를 분석하고 시각화하는 프로젝트를 진행했습니다. 저는 데이터 시각화 담당으로, 분석 결과를 직관적으로 전달하기 위한 그래픽 인터페이스를 설계하며 팀의 비전과 목표를 구체화하는 데 기여했습니다. 포스코 인턴십에서는 대규모 서버 데이터를 관리하며, 팀 내에서 다른 구성원과 협력해 긴급 상황에 대응했습니다. 서버 트래픽 급증으로 인해 발생한 장애 상황에서, 팀원들과 원인을 분석하고 문제 해결 방안을 신속히 마련하며 데이터 손실을 최소화했습니다. 이 과정에서 타인의 전문성을 인정하고 조화를 이루며 문제를 해결하는 방법을 배웠습니다. 이러한 경험은 네이버와 같은 대규모 조직에서 협업을 통해 더 큰 성과를 이끌어낼 자신감을 심어주었습니다. 앞으로도 열린 소통과 협력을 통해 팀과 함께 성과를 창출하고자 합니다.",
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
