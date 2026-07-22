// 1. 초기상태- 오답박스 팝업 숨기기
// 2. 정답 확인하기 버튼 클릭 시 위 1번 대상 보이기
// 3. x 버튼 클릭 시 위 1번 대상 숨기기
// 변수대상(오답박스 팝업, X버튼, 정답확인버튼)
const answer_popup_bg = document.querySelector('.answer_popup_bg');
const answer_close_btn = document.querySelector('#answer_close_btn');
const quiz_btn = document.querySelector('#quiz_btn');
console.log(answer_popup_bg,answer_close_btn,quiz_btn);

answer_popup_bg.style.display = 'none';

// addEventListener 이벤트를 호출하는 함수
// addEventListener('이벤트종류',실행함수)
quiz_btn.addEventListener('click',popup_open())

function popup_open() {
    answer_popup_bg.style.display = 'block';
}

answer_close_btn.addEventListener('click',popup_close())
function popup_close() {
    answer_popup_bg.style.display = 'none';
}

