# 육아템 월드컵

유모차 취향 월드컵 프로토타입입니다.

## 배포 전 준비

1. Supabase SQL Editor에서 `supabase-schema.sql`을 실행합니다.
2. Vercel 프로젝트의 환경 변수에 `SUPABASE_URL`과 `SUPABASE_SECRET_KEY`를 등록합니다.
3. `index.html`, `api`, `package.json`, `vercel.json`을 GitHub 저장소에 올립니다.
4. Vercel에서 GitHub 저장소를 Import하고 Deploy합니다.

`SUPABASE_SECRET_KEY`는 브라우저 코드나 GitHub에 넣지 않습니다.
