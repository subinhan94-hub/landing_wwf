# 랜딩페이지-WWF 북극곰 후원하기
* 2026-07-20 ~
* 반응형웹 breakpoints : mobile(440) tablet(1024) pc(1920)
* 사용스킬 : figma, html, css, javascript
## 페이지 구성 & 주의사항 & 공부 기록
1. landing_wwf/index.html `.intro`
    * background-image와 background-color는 한 요소에 들어갔을 때 순서를 변경할 수 없다. -> 배경 이미지와 색상이 들어가는 각각의 요소를 별도로 생성해야함. -> 배경 이미지가 태그에 들어간다면 배경 색상은 가상 요소(after, before) 활용하기
    * 배경 색상(단색)이 아닌 배경색(그라데이션)이라면 -> background-color가 아닌 background 통합 속성 사용해야한다는 점 주의하기
