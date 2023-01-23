/*
    외부 스크립트
        - 과거 : <script type="text/javascript"></script>
        - 현재 : <script src="/path/to/script.js"></script> : type="text/javascript"가 사라짐 
            - 스크립트를 별도의 파일에 작성하면 브라우저가 스크립트를 다운받아 캐시(cache)에 저장
        - use strict : ES5 이후 코드 활성화 , '클래스’와 '모듈’ 사용시 자동적용

*/

/* 변수와 상수 */ 
let message;
message = "A";
message = "B";
console.log(message);
//let message = "C";  : let message가 이미 있으므로 다시 선언은 불가능 
const myBirthday = '18.04.1982';
//myBirthday = '01.01.2001';   : error! const 초기화 이후 할당 불가능 

/* 형변환 */
let value = true;
console.log(typeof value); //boolean
value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
console.log(typeof value); //string
let str = "123";
let num = Number(str); 
console.log(typeof num); //number
console.log(Boolean("hello"));  //true
console.log(Boolean("")); //false
console.log(Boolean(" "));  //true
//Boolean : 0, null, undefined, NaN, ""  => false, 그 이외는 true 

/* 기본 연산자와 수학 : PASS */

/* 비교 연산자 */
console.log('2' > 1); //'2'가 2로 형변환후 비교  
console.log(true == 1); //true
console.log(false == 0); //true
//동등 연산자(equality operator) ==은 0과 false를 구별하지 못함
console.log(0 == false);//true : 비교시 자동변환이 이루어기 때문 false 가 0으로 변환
console.log(0 === false);//false : 타입, 값을 비교하는 === 연산자 사용 
console.log(null == undefined); //true : 규칙에 의해 true를 반환 
console.log(null === undefined);//false 타입은 다름
//undefined나 null이 될 가능성이 있는 변수가 <, >, <=, >=의 피연산자가 되지 않도록 주의

/* if와 '?'를 사용한 조건 처리 : PASS : dart에서도 이미 사용되고 있는 내용*/

/* 논리연산자 */
console.log(1 && 5);//5 첫번째가 true면 두번째 5 반환, 첫번째가 null이면 바로 반환

/* nullish 병합 연산자 '??' */
//// height가 null이나 undefined인 경우, 100을 할당
//height = height ?? 100;


/* while과 for 반복문 : PASS */

/* switch문 : PASS */

/* 함수 */
function showMessage(name) { //매개변수 == 인자 
    if(name === undefined){
        //에러처리
    }else{
        console.log(name);
    }
    
}
showMessage(); //undefined
showMessage('kim');//kim

function doNothing() { /* empty */ } //아무것도 없다면 undefined를 반환 
console.log(doNothing() === undefined); //true

/* 함수 표현식 */
function sayHi() { //함수 선언문
    console.log("say hi");
}
sayHi(); //say hi;
let sayHiByExpression = function() { //함수 선언식
    console.log("say sayHiByExpression");
  };
sayHiByExpression(); //say sayHiByExpression

function ask(question, yes, no) {
    if(question === "yes"){
        yes("callback say yes");
    }else{
        no("callback say No");
    }
}

function showOk(answer) {
    console.log(answer);
}

function showCancel(answer) {
    console.log(answer);
}
ask("yes",showOk, showCancel); //callback, 인자로 funcion을 넣어서 발생 

//함수선언문 vs 함수표현식
//1. 표현식이 다르다.  let test = function(){}, or function test(){}
//2. 호출 시기
functionlet("John"); //함수선언문은 스크립트 실행 준비단계에서 미리 생성 
function functionlet(name) {
  console.log( `Hello, ${name}`);
}
functionExpression("John"); //함수표현식은 실행흐름 진행 중에 생성 
function functionExpression(name) {
  console.log( `Hello, ${name}`);
}
//3. 함수선언문은 블록 내부에서만 가능

let age = 10;
if (age < 18) {
    welcome();  //이 블록에서는 생성전에 호출해도 인식 . 
    function welcome() {
      console.log("18 이상 ");
    }
     //이 블록 안에서는 가능
  } else {
    function welcome() {
        console.log("18 이하 ");
    }
  }
  // 함수를 나중에 호출합니다.
  //welcome(); error 

  //화살표 함수 기본 
  let sum = (a,b) => a+b; //한 줄
  console.log(sum(1,2)); //3
  let sumMultiple = (a,b)=>{ //여러줄 =>는 여전히 사용 
    let result = a+b;
    return result;
  }
  console.log(sumMultiple(2,3));