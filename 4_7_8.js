console.log("------- 심볼형 START --------");
/*
    심볼형
      - 객체 프로퍼티 키로 오직 문자형과 심볼형만을 허용,숫자형, 불린형 모두 불가능
      - 심볼(symbol)은 유일한 식별자(unique identifier)를 만들고 싶을 때 사용
      - 심볼은 리터럴, for..in에서는 호출되지 않음
      - 심볼 이름은 디버깅 시 아주 유용
*/

let id = Symbol("id");
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2); // false : Symbol()은 유일객체,

//숨김 프로퍼티
let user = {
  // 서드파티 코드에서 가져온 객체
  name: "John",
};
let id3 = Symbol("id");
user[id3] = 1; //심볼의 id를 key로 사용해서 접근 가능
console.log(user[id3]); //1
console.log("------- 심볼형 END --------");

//전역 심볼
//Symbol.for("key");

console.log("-------  객체를 원시형으로 변환하기 START --------");
/*
  객체를 원시형으로 변환하기
  - 객체 형 변환은 세 종류로 구분되는데, 'hint’라 불리는 값이 구분 기준 (목표로 하는 자료형)
  - hint는 "string", "number", "default" 중 하나가 될 수 있습니다.
*/

//Symbol.toPrimitive
//toString과 valueOf는 심볼이 생기기 이전부터 존재해 왔던 ‘평범한’ 메서드
let usertoPrimitive = {
  name: "John",
  money: 1000,

  toString() {
    return `{name: "${this.name}"}`;
  },
  valueOf() {
    return this.money;
  },
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

console.log(usertoPrimitive.toString()); //{name: "John"}
console.log(usertoPrimitive.valueOf()); //1000

console.log("-------  객체를 원시형으로 변환하기 END --------");
