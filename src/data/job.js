const jobData = [
  {
    category: "경영·사무",
    subcategories: [
      {
        name: "기획·전략·경영",
        roles: [
          "경영기획",
          "사업기획",
          "경영전략",
          "사업전략",
          "경영분석·컨설턴트",
          "기타",
        ],
      },
      {
        name: "인사·노무·교육",
        roles: ["인사", "노무", "교육", "채용", "급여", "보상관리", "기타"],
      },
      {
        name: "재무·세무·IR",
        roles: ["재무", "세무", "IR", "자금", "기타"],
      },
      {
        name: "경리·회계·결산",
        roles: [],
      },
      {
        name: "일반사무·총무·비서",
        roles: ["일반사무", "총무", "비서", "사무보조", "기타"],
      },
      {
        name: "법무",
        roles: [],
      },
    ],
  },
  {
    category: "마케팅·광고·홍보",
    subcategories: [
      {
        name: "마케팅",
        roles: [
          "브랜드마케팅",
          "콘텐츠마케팅",
          "퍼포먼스·온라인마케팅",
          "마케팅전략·기획",
          "상품기획",
          "기타",
        ],
      },
      {
        name: "광고·홍보",
        roles: [
          "광고기획·AE",
          "광고제작·카피",
          "언론홍보·PR",
          "사내홍보",
          "기타",
        ],
      },
    ],
  },
  {
    category: "무역·유통",
    subcategories: [
      {
        name: "유통·물류·재고",
        roles: ["물류관리·기획", "유통관리·기획", "재고", "기타"],
      },
      {
        name: "무역·해외영업",
        roles: ["해외영업", "무역·수출입관리", "기타"],
      },
      {
        name: "구매·자재",
        roles: ["구매", "자재", "기타"],
      },
      {
        name: "운전·운송",
        roles: [],
      },
      {
        name: "상품기획·MD",
        roles: [],
      },
    ],
  },
  {
    category: "IT·인터넷",
    subcategories: [
      {
        name: "QA",
        roles: [],
      },
      {
        name: "앱개발",
        roles: ["iOS개발", "안드로이드개발", "기타"],
      },
      {
        name: "웹개발",
        roles: ["프론트엔드개발", "서버·백엔드개발", "HTML·퍼블리싱", "기타"],
      },
      {
        name: "데이터엔지니어·분석·DBA",
        roles: ["데이터엔지니어", "데이터분석", "DBA", "기타"],
      },
      {
        name: "시스템프로그래머",
        roles: [],
      },
      {
        name: "응용프로그래머",
        roles: [],
      },
      {
        name: "네트워크·보안·운영",
        roles: [],
      },
      {
        name: "빅데이터·AI(인공지능)",
        roles: [],
      },
      {
        name: "게임개발",
        roles: [],
      },
      {
        name: "HW·임베디드",
        roles: [],
      },
      {
        name: "SW·솔루션·ERP",
        roles: [],
      },
      {
        name: "서비스기획·PM",
        roles: [],
      },
    ],
  },
  {
    category: "생산·제조",
    subcategories: [
      {
        name: "생산관리·공정관리·품질관리",
        roles: ["생산관리", "공정관리", "품질관리", "기타"],
      },
      {
        name: "안전·환경관리",
        roles: ["안전관리", "환경관리", "기타"],
      },
      {
        name: "생산·제조·설비·조립",
        roles: [],
      },
      {
        name: "설치·정비·AS·시공·공무",
        roles: [],
      },
    ],
  },
  {
    category: "영업·고객상담",
    subcategories: [
      {
        name: "제품·서비스영업",
        roles: [],
      },
      {
        name: "IT·솔루션·기술영업",
        roles: [],
      },
      {
        name: "B2B영업·법인영업",
        roles: [],
      },
      {
        name: "영업관리·지원·기획",
        roles: [],
      },
      {
        name: "아웃바운드",
        roles: [],
      },
      {
        name: "인바운드",
        roles: [],
      },
      {
        name: "고객응대·CS",
        roles: [],
      },
      {
        name: "금융·보험영업",
        roles: [],
      },
    ],
  },
  {
    category: "건설",
    subcategories: [
      {
        name: "현장·시공·감리·공무",
        roles: [],
      },
      {
        name: "안전·품질·관리",
        roles: [],
      },
      {
        name: "전기·통신",
        roles: [],
      },
      {
        name: "기계·설비·화학",
        roles: [],
      },
      {
        name: "토목·조경·도시",
        roles: [],
      },
      {
        name: "건축·설계·인테리어",
        roles: [],
      },
      {
        name: "환경·플랜트",
        roles: [],
      },
      {
        name: "부동산·영업·견적",
        roles: [],
      },
    ],
  },
  {
    category: "금융",
    subcategories: [
      {
        name: "증권·투자",
        roles: [],
      },
      {
        name: "외환·펀드·자산운용",
        roles: [],
      },
      {
        name: "보험계리사·손해사정",
        roles: [],
      },
      {
        name: "채권·심사",
        roles: [],
      },
      {
        name: "은행원",
        roles: [],
      },
      {
        name: "애널리스트",
        roles: [],
      },
    ],
  },
];

export default jobData;
