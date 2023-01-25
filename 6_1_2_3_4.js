/* 재귀와 스택 : PASS */

/*
    나머지 매개변수와 스프레드 문법
    ...는 "남아있는 매개변수들을 한데 모아 배열에 집어넣어라."는 것을 의미
    나머지 매개변수는 항상 마지막에 있어야 합니다. function f(arg1, ...rest, arg2){}
    화살표 함수는 arguments 객체를 지원하지 않습니다.
*/

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2, 3, 4, 5)); //2까지만 들어가고 3 4 5는 무시

//...을 사용하여 들어가는 인수를 동적으로 받음.
function sumAll(...args) { // args는 배열의 이름입니다.
    let sum = 0;

    for (let arg of args) 
        sum += arg;
    
    return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6

//arguments 활용 : 이터러블 객체
function showName() {
    console.log(arguments.length); //2
    console.log(arguments[0]); //Bora
}
showName("Bora", "Lee");

//스프레드 문법 Object.assign() 말고도 스프레드 문법을 사용하면 배열과 객체를 복사 가능
let arr = [3, 5, 1];
console.log(Math.max(...arr)); //[]를 풀어서 3 4 5 만듬

/*
    변수의 유효범위와 클로저
    코드 블록 {...}, 스크립트 전체는 렉시컬 환경을 가진다.
    렉시컬 환경 객체는 두 부분으로 구성
        - 내부 숨김 연관 객체
        - 환경 레코드 : 모든 지역 변수를 프로퍼티로 저장하고 있는 객체, this도 포함
            - 변수는 특수 내부 객체인 환경 레코드의 프로퍼티
            - 변수를 가져오거나 변경’하는 것은 '환경 레코드의 프로퍼티를 가져오거나 변경’함을 의미
        - 외부 렉시컬 환경에 대한 참조

    전역 렉시컬 환경 : 스크립트 전체의 렉시컬 환경
        - 스크립트가 시작 -> 스크립트 내에서 선언한 변수 전체 -> 렉시컬 환경에 올라감
        - 초기값은 uninitialized
        - let을 만나면 undefined
        - let에 값이 할당되면 "해당 값"

    함수 선언문
        - 스크립트 시작시 바로 사용 가능 (그래서 함수 생성 시점과 함수 사용시점이 달라도 인지함)
        - 렉시컬 환경이 자동생성
        - 내부에서 참조하지 못하면 외부로 이동

    클로저 :
        - 외부 변수를 기억하고 이 외부 변수에 접근할 수 있는 함수를 의미
        - 모든 함수는 함수가 생성된 곳의 렉시컬 환경을 기억한다는 점
        - 함수는 [[Environment]]라 불리는 숨김 프로퍼티를 가짐, 여기에 함수가 만들어진 곳의 렉시컬 환경에 대한 참조가 저장됩니다.
        - counter.[[Environment]]엔 {count: 0}이 있는 렉시컬 환경에 대한 참조가 저장
        - counter.[[Environment]]에 저장된 렉시컬 환경을 외부 렉시컬 환경으로서 참조
*/

function makeCounter() {
    let count = 0;

    return function () { //클로저 함수(중첩함수에서 발생)
        return count++; //function 렉시컬 환경에서 count를 모르니, 외부 렉시컬  makeCounter의 count를 참조
    }; //이 중첩함수의 [[Environment]] 프로퍼티에 외부 함수 렉시컬 환경에 대한 정보가 저장됩니다. 도달 가능한 상태가 되는 것이죠.

}

let counter = makeCounter();
console.log(counter()); //0
console.log(counter()); //1

function f() {
    let value = 123;

    return function () {
        alert(value);
    }
}
let g = f(); // g가 살아있는 동안엔 연관 렉시컬 환경도 메모리에 살아있습니다.
g = null; // 도달할 수 없는 상태가 되었으므로 메모리에서 삭제됩니다.


/* 
    오래된 var
        - var는 블록 스코프가 없습니다. 
        - 선언을 나중에 해도 됨
        - 중복대입이 가능 

    호이스팅 : 함수선언, let var 가 js 스크립트 실행 시점에 최상위로 올라가는 기능 

*/

if (true) {
    var varValue = true; 
    let letValue = true;
  }
  console.log(oldVar); // {}을 지나서도 영향 
  //console.log(letValue);  error {}에 영향 

  var testValue = "A";
  var testValue = "B"; //중복대입이 가능 

  preValue = "A";
  var preValue //나중에 선언해도 ok 
