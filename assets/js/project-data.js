/* ==============================
   project-data.js
   - 프로젝트 정보, 이미지, PDF, 영상 ID 관리
   - HTML 수정 없이 데이터만 교체하기 위한 파일
================================ */
const PROJECTS = [
  {
    id: "gucheon",
    title: "구천을 기는 용",
    type: "Team Project",
    genre: "한국형 다크판타지 로그라이트",
    engine: "Unreal Engine",
    platform: "PC",
    period: "2026.06~",
    role: "레벨디자인, 캐릭터/배경 컨셉, 개발제안, 데이터 정리",
    fontClass: "project-theme-gucheon",
    color: "#b6323a",
    summary: "검은 이무기 묵의 반복된 순례와 구천의 저주를 다루는 한국형 다크판타지 로그라이트.",
    keywords: ["Roguelite", "Dark Korean Fantasy", "Pilgrimage", "Dragon"],
    images: {
      hero: "assets/images/gucheon/gucheon-hero.webp",
      titleBg: "assets/images/gucheon/gucheon-title-bg.webp",
      logo: "assets/images/gucheon/gucheon-logo-symbol.svg",
      og: "assets/images/gucheon/gucheon-og-image.png",
      search: "assets/images/gucheon/gucheon-search-image.webp",
      favicon: "assets/images/gucheon/gucheon-favicon.svg"
    },
    videoId: "qC5KtatMcUw", // 임시 YouTube 영상 ID: 실제 프로토타입 영상 업로드 후 이 값만 교체
    documents: [
      { title: "개발제안서", path: "assets/pdf/gucheon/proposal.pdf", status: "available" },
      { title: "게임스토리&게임시나리오", path: "assets/pdf/gucheon/story-scenario.pdf", status: "available" },
      { title: "캐릭터컨셉기획서", path: "assets/pdf/gucheon/character-concept.pdf", status: "available" },
      { title: "배경컨셉기획서", path: "assets/pdf/gucheon/background-concept.pdf", status: "available" },
      { title: "게임메카닉스기획서", path: "assets/pdf/gucheon/game-mechanics.pdf", status: "available" },
      { title: "게임콘텐츠시스템기획서", path: "assets/pdf/gucheon/contents-system.pdf", status: "available" },
      { title: "레벨디자인기획서", path: "assets/pdf/gucheon/level-design.pdf", status: "available" },
      { title: "게임UI디자인기획서", path: "assets/pdf/gucheon/ui-design.pdf", status: "available" },
      { title: "게임서비스기획서", path: "assets/pdf/gucheon/service-plan.pdf", status: "available" }
    ],
    highlights: [
      { title: "핵심 콘셉트", text: "승천, 회귀, 검은 용의 저주, 순례길을 하나의 반복 구조로 연결한다." },
      { title: "레벨 방향", text: "챕터별 테마와 룸 규칙을 기반으로 로그라이트 진행감을 설계한다." },
      { title: "비주얼 정체성", text: "비 내리는 탈피골, 검은 비늘, 산사 폐허, 붉은 용언 문양을 중심으로 구성한다." },
      { title: "문서화 포인트", text: "스토리, 캐릭터, 배경, 레벨 디자인 문서를 포트폴리오용 PDF로 정리한다." }
    ]
  },
  {
    id: "the-flood",
    title: "The Flood",
    type: "Personal Project",
    genre: "좀비 아포칼립스 타워디펜스",
    engine: "Unreal Engine",
    platform: "PC",
    period: "2026.04~",
    role: "게임기획",
    fontClass: "project-theme-the-flood",
    color: "#e3b634",
    summary: "운석우 이후 폐허가 된 서울에서 생존자들이 방어선을 구축하는 좀비 아포칼립스 타워디펜스.",
    keywords: ["Tower Defense", "Zombie Apocalypse", "Survival", "Character Collection"],
    images: {
      hero: "assets/images/the-flood/the-flood-hero.webp",
      titleBg: "assets/images/the-flood/the-flood-title-bg.webp",
      logo: "assets/images/the-flood/the-flood-logo-symbol.svg",
      og: "assets/images/the-flood/the-flood-og-image.png",
      search: "assets/images/the-flood/the-flood-search-image.webp",
      favicon: "assets/images/the-flood/the-flood-favicon.svg"
    },
    videoId: "qC5KtatMcUw", // 임시 YouTube 영상 ID: 실제 프로토타입 영상 업로드 후 이 값만 교체
    documents: [
      { title: "개발제안서", path: "assets/pdf/the-flood/proposal.pdf", status: "available" },
      { title: "게임스토리&게임시나리오", path: "assets/pdf/the-flood/story-scenario.pdf", status: "available" },
      { title: "캐릭터컨셉기획서", path: "assets/pdf/the-flood/character-concept.pdf", status: "available" },
      { title: "배경컨셉기획서", path: "assets/pdf/the-flood/background-concept.pdf", status: "available" },
      { title: "게임메카닉스기획서", path: "assets/pdf/the-flood/game-mechanics.pdf", status: "available" },
      { title: "게임콘텐츠시스템기획서", path: "assets/pdf/the-flood/contents-system.pdf", status: "available" },
      { title: "레벨디자인기획서", path: "assets/pdf/the-flood/level-design.pdf", status: "available" },
      { title: "게임UI디자인기획서", path: "assets/pdf/the-flood/ui-design.pdf", status: "available" },
      { title: "게임서비스기획서", path: "assets/pdf/the-flood/service-plan.pdf", status: "available" }
    ],
    highlights: [
      { title: "핵심 콘셉트", text: "노란 운석우, 좀비화, 생존자 방어선, 폐허가 된 서울을 중심으로 전개한다." },
      { title: "스테이지 구조", text: "스테이지 선택, 스토리 컷신, 게임플레이로 이어지는 진행 흐름을 설계한다." },
      { title: "장르 표현", text: "바리케이드, 방어 시설, 좀비 무리 실루엣으로 타워디펜스 정체성을 강화한다." },
      { title: "문서화 포인트", text: "스토리, 캐릭터, 배경 컨셉 문서를 프로젝트 상세 페이지에서 확인할 수 있게 한다." }
    ]
  },
  {
    id: "naiadel",
    title: "NAIADEL",
    type: "Personal Project",
    genre: "중세 하이판타지 양대 진영 MMORPG",
    engine: "Unreal Engine",
    platform: "PC",
    period: "2026.05~",
    role: "게임기획",
    fontClass: "project-theme-naiadel",
    color: "#31d0bd",
    summary: "뉴 상투스 인간 진영과 나이아델 엘프 왕국의 대립을 중심으로 하는 중세 하이판타지 MMORPG.",
    keywords: ["MMORPG", "High Fantasy", "Two Factions", "RvR"],
    images: {
      hero: "assets/images/naiadel/naiadel-hero.webp",
      titleBg: "assets/images/naiadel/naiadel-title-bg.webp",
      logo: "assets/images/naiadel/naiadel-logo-symbol.svg",
      og: "assets/images/naiadel/naiadel-og-image.png",
      search: "assets/images/naiadel/naiadel-search-image.webp",
      favicon: "assets/images/naiadel/naiadel-favicon.svg"
    },
    videoId: "qC5KtatMcUw", // 임시 YouTube 영상 ID: 실제 프로토타입 영상 업로드 후 이 값만 교체
    documents: [
      { title: "개발제안서", path: "assets/pdf/naiadel/proposal.pdf", status: "available" },
      { title: "게임스토리&게임시나리오", path: "assets/pdf/naiadel/story-scenario.pdf", status: "available" },
      { title: "캐릭터컨셉기획서", path: "assets/pdf/naiadel/character-concept.pdf", status: "available" },
      { title: "배경컨셉기획서", path: "assets/pdf/naiadel/background-concept.pdf", status: "available" },
      { title: "게임메카닉스기획서", path: "assets/pdf/naiadel/game-mechanics.pdf", status: "available" },
      { title: "게임콘텐츠시스템기획서", path: "assets/pdf/naiadel/contents-system.pdf", status: "available" },
      { title: "레벨디자인기획서", path: "assets/pdf/naiadel/level-design.pdf", status: "available" },
      { title: "게임UI디자인기획서", path: "assets/pdf/naiadel/ui-design.pdf", status: "available" },
      { title: "게임서비스기획서", path: "assets/pdf/naiadel/service-plan.pdf", status: "available" }
    ],
    highlights: [
      { title: "핵심 콘셉트", text: "세계수, 태양신 권능, 인간과 엘프의 양대 진영 갈등을 MMORPG 구조로 확장한다." },
      { title: "클래스 구조", text: "뉴 상투스와 나이아델 왕국을 기준으로 클래스와 2차 전직을 분리한다." },
      { title: "콘텐츠 루프", text: "스토리, 성장, 원정대, 전장, 균열로 이어지는 장기 플레이 루프를 설계한다." },
      { title: "문서화 포인트", text: "스토리, 클래스 컨셉, 메카닉스 문서를 통해 대규모 RPG 기획 역량을 보여준다." }
    ]
  }
];

function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id);
}

function resolvePath(path) {
  const isProjectPage = window.location.pathname.includes('/projects/');
  return `${isProjectPage ? '../' : './'}${path}`;
}
