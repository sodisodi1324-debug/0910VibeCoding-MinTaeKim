# 개인 소개 페이지 (Personal Intro Page)

## 개요
개인 소개를 위한 한 페이지짜리 웹사이트. 소개 글(Bio), 관심사(Interests), 링크(Links) 섹션으로 구성한다.

> 현재 이 디렉토리는 아직 스캐폴딩되지 않은 빈 프로젝트다. 이 문서는 앞으로 `create-next-app` 등으로 프로젝트를 생성하고 개발을 시작할 때 따를 가이드 역할을 한다.

## 기술 스택
- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**

## 범위 (Scope)
- 단일 페이지(One page)로 구성 — 별도 라우팅 없음
- 섹션: 소개 글(Intro/Bio), 관심사(Interests), 링크(Links)
- 데이터는 로컬 JSON 파일에서 읽어와 렌더링 (`data/profile.json`)

### 지금은 하지 않는 것 (Out of scope)
- 배포 (Vercel 등)
- DB 연동
- 인증(Auth), CMS, 백엔드 API

이 항목들은 이후 단계에서 별도로 다룬다. 지금 단계에서 관련 코드/설정을 추가하지 않는다.

## 예상 디렉토리 구조
스캐폴딩 시 아래 구조를 기준으로 한다 (아직 생성되지 않음):

```
/app
  page.tsx        # 단일 페이지, JSON 데이터를 읽어 섹션 렌더링
  layout.tsx
  globals.css     # Tailwind 진입점
/data
  profile.json    # 소개 글 / 관심사 / 링크 데이터
```

## 데이터 형태 (`data/profile.json`)
```json
{
  "name": "...",
  "bio": "...",
  "interests": ["...", "..."],
  "links": [{ "label": "...", "url": "..." }]
}
```

TypeScript로 이 구조에 대응하는 타입을 정의해 사용한다 (예: `Profile` 인터페이스).

## 작업 원칙
- Tailwind 유틸리티 클래스 위주로 스타일링, 별도 CSS 프레임워크 추가하지 않음
- 데이터는 JSON 파일을 서버 컴포넌트에서 직접 import하거나 읽어 사용 (fetch/DB 불필요)
- 배포, DB, 인증 관련 패키지나 설정 파일을 추가하지 않는다
