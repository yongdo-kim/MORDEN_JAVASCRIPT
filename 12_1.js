/*
    모던 자바스크립트를 사용하지 않고, 우선 코딩앙마 코드로 대체합니다.

    제너레이터
    함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
- next(), return(), throw()
- Iterable (반복가능)
- Symbol.iterator 메소드가 있다. 
- value, done 속성을 가진다. 
- 값을 미리 만들어두지 않음. 
*/

function* fn() {
  yield 1;
  yield 2;
  yield 3;
  return "finish";
}

const a = fn(); //제너레이터면 호출했다고 값이 바로 나오지 않음
a.next(); //{value:1, done:false};
a.next(); //{value:2, done:false};
a.next(); //{value:3, done:false};
a.next(); //{value:undified, done:true};
a.return(); //을 쓰는 경우 그 즉시 중단.

function* fn() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const b = fn(); //while문이지만 값을 미리 만들지 않으므로, next를 값이 하나씩 호출됨

// [yield*]
function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield "Hello";
  yield* gen1(); // 다른 제너레이터 함수 호출
}
