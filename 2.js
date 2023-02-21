/*
    외부 스크립트
        - 과거 : <script type="text/javascript"></script>
        - 현재 : <script src="/path/to/script.js"></script> : type="text/javascript"가 사라짐 
            - 스크립트를 별도의 파일에 작성하면 브라우저가 스크립트를 다운받아 캐시(cache)에 저장
        - use strict : ES5 이후 코드 활성화 , '클래스’와 '모듈’ 사용시 자동적용

*/

/* 
    변수와 상수 
    - let은 여러번 할당 할 수 있다.
    - const는 한 번 할당하면 더 이상 할당 불가능    
*/
console.log("-------변수와 상수 START--------");


let message;
message = "A";
message = "B";
console.log(message);
const myBirthday = "18.04.1982";
//myBirthday = '01.01.2001';   : error! const 초기화 이후 할당 불가능
console.log("-------변수와 상수 END--------");
 
/* 
  형변환 
    - typeof : 타입체크
    - Number(value), String(value).. 타입변환
*/
console.log("-------형변환 START--------");
let value = true;
console.log(typeof value); //typeof으로 체크하기 boolean
value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
console.log(typeof value); //string
let str = "123";
let num = Number(str);
console.log(typeof num); //number
console.log(Boolean("hello")); //true
console.log(Boolean("")); //false : 빈칸이면
console.log(Boolean(" ")); //true : 띄어쓰기라도 존재한다면 true
//Boolean : 0, null, undefined, NaN, ""  => false, 그 이외는 true
console.log("-------형변환 END--------");

/* 기본 연산자와 수학 : PASS */

console.log("------- 비교 연산자 START --------");
/* 비교 연산자 */
console.log("2" > 1); //'2'가 2로 형변환후 비교
console.log(true == 1); //true
console.log(false == 0); //true
//동등 연산자(equality operator) ==은 0과 false를 구별하지 못함
console.log(0 == false); //true : 비교시 자동변환이 이루어기 때문 false 가 0으로 변환
console.log(0 === false); //false : 타입, 값을 비교하는 === 연산자 사용
console.log(null == undefined); //true : 규칙에 의해 true를 반환
console.log(null === undefined); //false 타입은 다름
//undefined나 null이 될 가능성이 있는 변수가 <, >, <=, >=의 피연산자가 되지 않도록 주의
console.log("------- 비교 연산자 END --------");

/* if와 '?'를 사용한 조건 처리 : PASS : dart에서도 이미 사용되고 있는 내용*/

/* 논리연산자 */
console.log(1 && 5); //5 첫번째가 true면 두번째 5 반환, 첫번째가 null이면 바로 반환

/* nullish 병합 연산자 '??' */
//// height가 null이나 undefined인 경우, 100을 할당
//height = height ?? 100;

/* while과 for 반복문 : PASS */

/* switch문 : PASS */

console.log("------- 함수 START --------");
/* 
  함수 
    - 함수 표현식
    - 함수 선언식
*/
function showMessage(name) {
  //매개변수 == 인자
  //name을 넣지 않더라도 에러가 나지 않고, undefined라는 문자열이 출력된다.
  if (name === undefined) {
    console.log(name);
  } else {
    console.log(name); //kim
  }
}
showMessage(); //undefined
showMessage("kim"); //kim

function doNothing() {
  /* empty */
} //아무것도 없다면 undefined를 반환
console.log(doNothing() === undefined); //true
console.log("------- 함수 END --------");

console.log("------- 함수 표현식 & 함수 선언식 START --------");
/* 함수 표현식 */
function sayHi() {
  //함수 선언문
  console.log("say hi");
}
sayHi(); //say hi;
let sayHiByExpression = function () {
  //함수 선언식
  console.log("say sayHiByExpression");
};
sayHiByExpression(); //say sayHiByExpression

function ask(question, yes, no) {
  if (question === "yes") {
    yes("callback say yes");
  } else {
    no("callback say No");
  }
}

function showOk(answer) {
  console.log(answer); //callback say yes
}

function showCancel(answer) {
  console.log(answer); //callback say No
}
ask("yes", showOk, showCancel); //callback, 인자로 funcion을 넣어서 발생
console.log("------- 함수 표현식 & 함수 선언식 END --------");


console.log("------- 함수선언문 vs 함수표현식 START --------");
//함수선언문 vs 함수표현식
//1. 표현식이 다르다.  let test = function(){}, or function test(){}
//2. 호출 시기

/*
    함수 선언문
        - 스크립트 실행 준비단계에서 미리 생성
        - 인스턴스 생성 후, 선언을 하는 식으로 짜도 인지함.  
        - 함수선언문은 블록 내부 {} 에서만 가능 
*/
functionlet("John"); 
function functionlet(name) {
  console.log(`Hello, ${name}`); //Hello, John
}

let age = 10;
if (age < 18) {
  welcome(); //이 블록에서는 생성전에 호출해도 인식 .
  function welcome() {
    console.log("18 이상 ");
  }
  //이 블록 안에서는 가능
} else {
  function welcome() {
    console.log("18 이하 ");
  }
}
//함수를 나중에 호출합니다.
//welcome(); error

//화살표 함수 기본
let sum = (a, b) => a + b; //한 줄
console.log(sum(1, 2)); //3
let sumMultiple = (a, b) => {
  //여러줄 =>는 여전히 사용
  let result = a + b;
  return result;
};
console.log(sumMultiple(2, 3));
