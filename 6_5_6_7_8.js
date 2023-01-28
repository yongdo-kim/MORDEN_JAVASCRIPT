/*
    전역객체
        - 브라우저 환경에선 전역 객체를 window, Node.js 환경에선 global
        - let으로 선언한 변수는 전역 객체의 프로퍼티가 되지 않음. window.let -> error 
        - 전역 변수는 되도록 사용하지 않는 것이 좋음. 
*/

// 모든 스크립트에서 현재 사용자(current user)에 접근할 수 있게 이를 전역 객체에 추가함
global.currentUser = { 
    name: "John"
  };
console.log(global.currentUser.name); //John
  

  /* 
    객체로서의 함수와 기명 함수 표현식
        - 자바스크립트에서 함수는 값으로 취급
        - 함수는 객체
  */

function yongdo(a,b,c,d) {
    console.log("배고파");
}
console.log(yongdo.name); //함수이름 추출 
console.log(yongdo.length);//매개변수갯수 추출 a b c d => 4 

/* 객체로서의 함수와 기명 함수 표현식 name, length PASS */

/* 
    new Function 
        - 잘 사용하는 방법은 아님.
        - 런타임에 받은 문자열을 사용해 함수를 만들 수 있다는 점.
        - 서버에서 코드를 받거나 템플릿을 사용해 함수를 동적으로 컴파일해야 하는 경우, 
*/
let sum = new Function('a', 'b', 'return a + b');
console.log(sum(1,2));


/*
    setTimeout과 setInterval을 이용한 호출 스케줄링
        - 호출 스케줄링 : 일정 시간이 지난 후에 원하는 함수를 예약 실행(호출)할 수 있게 하는 것
        - setTimeout을 이용해 일정 시간이 지난 후에 함수를 실행하는 방법
        - setInterval을 이용해 일정 시간 간격을 두고 함수를 실행하는 방법
        - 초보 개발자는 setTimeout에 함수를 넘길 때, 함수 뒤에 () 을 붙이는 실수를 하곤 합니다. 
        - 대기 시간을 최소 4밀리초 이상으로 강제해야 한다."라는 제약이 명시
*/
function sayHi(who, phrase) {
    console.log(who + ' 님, ' + phrase);
}
setTimeout(sayHi, 1000,"yongdo",'안녕하세요');
//setTimeout(sayHi(), 1000); : 함수참조값이 아닌, 함수호출하면, return이 없으므로, 에러발생

//clearTimeout으로 스케줄링 취소하기
let clearTimeOutId = setTimeout(() => console.log("아무런 일도 일어나지 않습니다."), 1000);
console.log(clearTimeOutId);//nothing;

//setInterval 메서드는 setTimeout과 동일한 문법을 사용합니다.
//동일함. 





