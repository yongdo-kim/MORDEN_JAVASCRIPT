/*
    객체 : let obj = {"key":"value"}
*/
console.log("------- 객체 START --------");

let user = {
  // 객체
  name: "John", // 키 & 값,
  age: 30,
};
user.isAdmin = true; //user에 isAdmin이 없음에도 바로 추가가 가능함. (이런식으로 사용하면 실수가 많을 것 같음. )
delete user.age; // 파라미터 값 삭제
console.log(user); //{ name: 'John', isAdmin: true }
console.log(user.name);
console.log(user["name"]);

const constUser = { name: "Pete" };
constUser.name = "Jone"; //const로 만들어서 대입 안될 줄 알았지만, constUser 이게 const고 { name: "Pete" };는 변경가능
//constUser = 다른거대입시 에러발생
console.log("------- 객체 END --------");

console.log("------- 계산된 프로퍼티 START --------");
/*
    계산된 프로퍼티
      - 객체의 키값을 "동적"으로 받는 프로퍼티 
      - {[변수명]:value}
*/
let keyDynamic = "apple";
let bag = { [keyDynamic]: 5 };
console.log(bag.apple); //5
console.log("------- 계산된 프로퍼티 END --------");

console.log("------- 단축 프로퍼티 START --------");
/*
  단축 프로퍼티
    - key와 value 네이밍이 같은 경우 객체 return 시 하나만 써도 가능
    - return {name:name, age:age} == return {name,age}
*/
function shortProperty(name, age) {
  return {
    name,
    age,
  };
}
console.log(shortProperty("hi", 30)); //{ name: 'hi', age: 30 }
console.log("------- 단축 프로퍼티 END --------");

console.log("------- 객체 자동형 변환 START --------");

//문자형이나 심볼형에 속하지 않은 값은 문자열로 자동형 변환됩니다.
let keyUser = {
  name: "John",
  age: 30,
  isAdmin: true,
};

//키가 숫자라면 자동정렬됨.
for (let key in keyUser) {
  console.log(key);
}
console.log("------- 객체 자동형 변환 END --------");

console.log("------- 참조에 의한 객체복사 START --------");
/*
    참조에 의한 객체복사
      - 깊은 복사를 js로 구현하려면 loop을 돌려야한다. -> 라이브러리 : loadsh을 쓰자.
*/

//객체 복사
let deepUser = {
  name: "John",
  age: 30,
};

let deepClone = Object.assign({}, deepUser); //{}를 기준으로 deepUser를 복사해서 넣는 방식.
//js로 복잡한 객체를 깊은 복사 하기 위해서는 키 값을 loop 돌려서 객체인지 찾고, 그 객체마다 assign을 해야함.

console.log("------- 참조에 의한 객체복사 END --------");

console.log("------- 가비지 컬렉션 START --------");
/*
  가비지 컬렉션
  메모리삭제 : 도달가능성 기준으로 메모리 관리 
  도달할 수 없는 섬 : 접근이 불가능하다면, 그 안에서 객체끼리 순환참조여도, 메모리에서 제거됨
*/
let garbageUser = {
  name: "John",
};
garbageUser = null; //{name:"John"}에 더 이상 접근 불가
console.log("------- 가비지 컬렉션 END --------");
