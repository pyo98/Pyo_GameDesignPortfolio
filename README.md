# Game Planning Portfolio

HTML, 순수 CSS, 순수 Vanilla JavaScript만 사용한 게임기획 포트폴리오 사이트다.

## 1차 수정 완료 사항

- `index.html` 상단 대표 이미지 3장을 각각 프로젝트 상세 페이지로 연결했다.
- 메인 프로젝트 카드 전체와 카드 내부 `상세 보기` 영역을 프로젝트 상세 HTML로 연결했다.
- 프로젝트 카드 클릭 방해 요소가 생기지 않도록 CSS `pointer-events`와 앵커 영역을 정리했다.
- 메인 페이지 `언리얼엔진 프로토타입 영상` 섹션에 임시 YouTube iframe을 연결했다.
- 상세 페이지 영상 영역도 `assets/js/project-data.js`의 `videoId` 값을 사용해 표시되도록 유지했다.
- `Gameplay Coming Soon` 문구는 현재 표시되지 않도록 수정했다.
- 부족한 PDF는 임시 PDF placeholder 파일을 제작해 모든 문서 버튼이 연결되도록 했다.
- 총 27개 PDF 경로가 연결되어 있으며, 최종 PDF는 같은 파일명으로 교체하면 된다.

## 구성

- `index.html`: 메인 포트폴리오 페이지
- `projects/gucheon.html`: 팀 프로젝트 「구천을 기는 용」 상세 페이지
- `projects/the-flood.html`: 개인 프로젝트 「The Flood」 상세 페이지
- `projects/naiadel.html`: 개인 프로젝트 「NAIADEL」 상세 페이지
- `assets/images/`: 프로젝트별 이미지 자산
- `assets/pdf/`: 프로젝트별 PDF 기획서 및 임시 PDF placeholder
- `assets/js/project-data.js`: 프로젝트 데이터, PDF 경로, YouTube 영상 ID 관리

## 수정 방법

1. PDF 교체
   - `assets/pdf/{project}/` 폴더의 같은 파일명으로 최종 PDF를 덮어쓴다.
   - 현재 모든 문서 `status`는 `available` 상태라서 HTML 수정 없이 바로 연결된다.

2. YouTube 영상 교체
   - `assets/js/project-data.js`에서 각 프로젝트의 `videoId` 값을 교체한다.
   - 예시: `videoId: "qC5KtatMcUw"`
   - YouTube URL 전체가 아니라 영상 ID만 입력한다.

3. 이미지 교체
   - `assets/images/{project}/` 폴더의 같은 파일명으로 교체한다.
   - 대형 이미지는 `webp/png`, 로고와 favicon은 `svg/png/ico` 기준으로 관리한다.

4. 프로젝트 문구 수정
   - `assets/js/project-data.js`에서 `summary`, `role`, `keywords`, `highlights`를 수정한다.

## 폰트 기준

- 본문/UI: Pretendard, Noto Sans KR fallback
- 구천을 기는 용: Noto Serif KR
- The Flood: Impact / Arial Black
- NAIADEL: Cinzel
- 파일명/경로/메타 정보: monospace 계열

## 실행

VS Code Live Server 또는 로컬 정적 서버에서 `index.html`을 열어 확인한다.

권장 실행:

```bash
python -m http.server 8000
```

그 후 브라우저에서 `http://localhost:8000` 접속.
