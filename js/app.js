// 매초 표시되게 -> setinterval함수 -> 남은 시간 표시하기에 각각 표시
function 남은시간() {
    // 남은시간계산

    // 현재 시간을 나타내는 Date 객체 생성
    const currentDate = new Date();

    // 목표 날짜(2023년 12월 30일 오후 4시)를 나타내는 Date 객체 생성
    const targetDate = new Date(2023, 11, 30, 16, 0, 0);

    // 두 날짜의 차이를 계산
    const timeDiff = targetDate - currentDate;

    // 밀리초(ms)를 날짜, 시간, 분으로 변환
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((timeDiff % (1000 * 60)) / 1000);

    console.log(`남은 시간: ${days}일 ${hours}시간 ${minutes}분 ${sec}초`);
    // HTML에 표시
    let d = document.querySelector('.time-info .day');
    let h = document.querySelector('.time-info .hour');
    let m = document.querySelector('.time-info .min');
    let s = document.querySelector('.time-info .sec');
    let d_day = document.querySelector('.day-text');

    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = sec;
    d_day.innerHTML = days;
}
setInterval(남은시간, 1000);

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  // 글자 복사 기능
  function copyToClipBoard() {
    // 복사할 글자 요소명
    var content = document.querySelector('.bank-number1');
    
    // 텍스트 내용에 대한 범위 생성
    var range = document.createRange();
    range.selectNode(content);
    
    // 텍스트 내용 선택
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    // 선택된 텍스트 복사
    document.execCommand('copy');
    
    // 선택 해제
    window.getSelection().removeAllRanges();
  }

  // 글자 복사 기능
  function copyToClipBoard2() {
    // 복사할 글자 요소명
    var content = document.querySelector('.bank-number2');
    
    // 텍스트 내용에 대한 범위 생성
    var range = document.createRange();
    range.selectNode(content);
    
    // 텍스트 내용 선택
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    // 선택된 텍스트 복사
    document.execCommand('copy');
    
    // 선택 해제
    window.getSelection().removeAllRanges();
  }
  