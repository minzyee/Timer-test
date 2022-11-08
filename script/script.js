

const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resetBtn = document.querySelector('.resetBtn');
const timeInput = document.querySelector('.timer-func li input');



timeInput.addEventListener('click', () => {
	startBtn.classList.add('on');
	resetBtn.classList.add('on');
});

startBtn.addEventListener('click', () => {
	if(타이머셋팅 시) {
		// 타이머 실행
	} else {
		alert('시간을 입력해주세요.');
	}
});