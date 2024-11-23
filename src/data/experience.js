const experience = [
  {
    title: "데이터 분석 자격증 (SQLD)",
    categoryId: 1,
    background:
      "데이터 처리 및 분석 역량이 부족하다는 것을 느꼈고, 이를 증명할 수 있는 자격증이 필요했습니다. 특히, 데이터베이스를 효율적으로 다루는 기술을 강화해야 했습니다.",
    solution:
      "한국데이터산업진흥원에서 주관하는 SQLD(SQL Developer) 자격증 시험 준비를 시작했습니다. 교재를 활용해 기본 개념을 학습한 뒤, 실제 기업에서 활용되는 데이터셋으로 실습을 진행했습니다.",
    result:
      "SQLD 자격증을 취득했으며, 이후 학과 프로젝트에서 데이터베이스 설계와 쿼리 최적화 작업을 담당했습니다. 프로젝트의 데이터 처리 속도가 20% 향상되는 성과를 얻었습니다.",
    startDate: "2023-04-16",
    endDate: "2023-10-17",
    keywordList: [10, 12, 14, 18],
  },
  {
    title: "정보보안 자격증 (CISSP)",
    categoryId: 1,
    background:
      "정보보안에 대한 기본적인 지식이 부족하다고 느꼈습니다. 특히, 네트워크 보안과 시스템 보안의 기초를 다져야 할 필요가 있었습니다.",
    solution:
      "CISSP(Certified Information Systems Security Professional) 자격증을 목표로 심화 학습을 진행했습니다. 보안 기본 원리, 암호학, 네트워크 보안 등을 체계적으로 공부했으며, 관련 모의고사를 통해 실전 감각을 익혔습니다.",
    result:
      "CISSP 자격증을 취득하며 보안 지식을 공인받았습니다. 이후 보안 관련 학과 프로젝트에서 네트워크 보안 체계를 설계하는 데 기여했습니다.",
    startDate: "2023-04-17",
    endDate: "2023-10-18",
    keywordList: [3, 4, 16, 19],
  },
  {
    title: "AWS Certified Cloud Practitioner 강의",
    categoryId: 2,
    background:
      "학과 수업에서 배운 내용이 실무 기술과 다소 괴리가 있다고 느꼈습니다. 특히, AI와 클라우드 컴퓨팅에 대한 지식을 보완할 필요가 있었습니다.",
    solution:
      '유명 온라인 강의 플랫폼을 활용해 **Coursera의 "Machine Learning by Andrew Ng"**와 AWS Certified Cloud Practitioner 강의를 수강했습니다. 매주 목표를 설정해 진도를 나갔으며, 과제와 퀴즈를 성실히 수행했습니다. 강의 내용 중 이해가 안 되는 부분은 인터넷 검색과 커뮤니티를 활용해 해결했습니다.',
    result:
      "머신러닝 강의를 통해 기본적인 알고리즘의 원리를 이해했으며, AWS 강의로 클라우드 컴퓨팅의 구조와 서비스를 익혔습니다. 이후 학과 프로젝트에서 데이터를 활용한 간단한 예측 모델을 구현하고, AWS Lambda를 활용한 서버리스 애플리케이션 설계에 참여했습니다.",
    startDate: "2024-02-13",
    endDate: "2024-06-16",
    keywordList: [12, 13, 14, 29],
  },
  {
    title: "데이터 사이언스 강의 수강",
    categoryId: 2,
    background:
      "데이터 분석 기술이 취약하다는 점을 인식했습니다. 특히, Python을 활용한 데이터 전처리 및 시각화 능력을 강화해야 했습니다.",
    solution:
      'Udemy의 "Python for Data Science and Machine Learning Bootcamp" 강의를 수강했습니다. Pandas, NumPy, Matplotlib 등 데이터 분석 라이브러리를 집중적으로 학습하고, Kaggle에서 제공하는 데이터셋을 활용해 실습 프로젝트를 진행했습니다.',
    result:
      "데이터 분석 프로젝트를 성공적으로 완료했으며, 학과 프로젝트에서 데이터를 기반으로 한 통계적 모델을 설계하고, 결과를 시각화하는 데 기여했습니다.",
    startDate: "2022-07-02",
    endDate: "2023-02-12",
    keywordList: [9, 19, 23, 31],
  },
  {
    title: "UI/UX 디자인 강의 수강",
    categoryId: 2,
    background:
      "IT 프로젝트에서 사용자 경험(UX)의 중요성을 깨달았으나, 관련 지식이 부족하다는 점을 인식했습니다.",
    solution:
      'Coursera의 "UI/UX Design Specialization" 강의를 수강하며, 사용자의 행동을 분석하고, 와이어프레임 및 프로토타입 제작 기술을 익혔습니다. Figma를 활용해 간단한 애플리케이션 UI를 설계했습니다.',
    result:
      "수강 후 학과 팀 프로젝트에서 UX 설계를 담당하며, 사용자 친화적인 인터페이스를 구현했습니다. 이를 통해 프로젝트의 사용자 만족도가 크게 향상되었습니다.",
    startDate: "2024-03-23",
    endDate: "2024-06-10",
    keywordList: [1, 6, 7, 17],
  },
  {
    title: "사내 데이터 처리 파이프라인을 개선",
    categoryId: 3,
    background:
      "학부 연구생으로 활동하면서, 기존의 객체 탐지 알고리즘들이 모바일 환경에서 속도가 느리고 정확도가 떨어지는 문제가 있다는 것을 발견했습니다.",
    solution:
      "경량화된 딥러닝 모델인 MobileNet을 활용해 최적화된 객체 탐지 알고리즘을 개발하기로 했습니다. 팀원들과 역할을 나누어 데이터 전처리, 모델 학습, 결과 분석을 담당했습니다. 또한, TensorFlow Lite를 사용해 모델을 모바일 디바이스에 직접 배포했습니다.",
    result:
      '기존 알고리즘 대비 25%의 속도 향상과 10%의 정확도 개선을 달성했으며, 이를 기반으로 **"Lightweight Object Detection for Mobile Devices"**라는 논문을 학부 학술대회에 제출했습니다. 저는 데이터셋 구성 및 모델 성능 개선의 주요 작업을 담당했습니다.',
    startDate: "2024-03-24",
    endDate: "2024-06-11",
    keywordList: [2, 3, 4, 5],
  },
  {
    title: "챗봇 연구 및 논문 작성",
    categoryId: 3,
    background:
      "고객 서비스에서 활용되는 기존 챗봇의 답변 정확도가 낮아 개선이 필요했습니다.",
    solution:
      "자연어 처리 기술을 활용한 챗봇 알고리즘 연구를 진행했습니다. BERT 모델을 기반으로 답변의 문맥적 정확성을 높이는 시스템을 설계했으며, Fine-tuning 과정을 거쳐 챗봇 성능을 최적화했습니다.",
    result:
      '논문으로 작성해 "학부 인공지능 학술대회"에서 우수 논문상을 수상했습니다. 저는 데이터 전처리와 모델 최적화를 담당했습니다.',
    startDate: "2024-08-01",
    endDate: "2024-11-02",
    keywordList: [1, 20, 25, 26],
  },
];

export default experience;
