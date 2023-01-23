/*
    객체 : 중괄호 이용 키, 값 쌍 
*/
let user = {     // 객체
    name: "John",  // 키 & 값,
    age: 30        
  };
  user.isAdmin = true; //키, 값 추가
  delete user.age // 삭제
console.log(user); //{ name: 'John', isAdmin: true }
console.log(user.name);
console.log(user['name']);

const constUser = {name:"Pete"};
constUser.name ="Jone" //수정가능
//constUser = 다른거대입시 에러발생 

//계산된 프로퍼티 
let keyDynamic = "apple"
let bag = {[keyDynamic]:5};//[]을 사용하여 키 값을 고정이 아닌 다이나믹으로 받음. 
console.log(bag.apple); //5 

//단축 프로퍼티
function shortProperty(name,age) {
    return {
        name,
        age
    }
}
console.log(shortProperty("hi",30)); //{ name: 'hi', age: 30 }

//문자형이나 심볼형에 속하지 않은 값은 문자열로 자동 형 변환됩니다.
let autoObject = {
    0: "test" // "0": "test"와 동일합니다.
  };

  let keyUser = {
    name: "John",
    age: 30,
    isAdmin: true
  };

  //키가 숫자라면 자동정렬됨. 
  for(let key in keyUser){
    console.log(key);
  }

  /*
    참조에 의한 객체복사
  */

//객체 복사
let deepUser = {
    name: "John",
    age: 30
  };
  
let deepClone = Object.assign({}, deepUser); //{} + deepUser를 병합 
//객체 안에 객체가 있고, 이를 복사하기 위해서는 자바스크립트 라이브러리 loadsh메서드인 cloneDepp(obj)를 쓰자
//그게 아니라면, 키 값을 loop 돌려서 객체인지 찾고, 그 객체마다 assign을 해야함.


/*
  가비지 컬렉션
  메모리삭제 : 도달가능성 기준으로 메모리 관리 
  도달할 수 없는 섬 : 접근이 불가능하다면, 그 안에서 객체끼리 순환참조여도, 메모리에서 제거됨
*/
let garbageUser = {
  name: "John"
};
garbageUser = null //{name:"John"}에 더 이상 접근 불가 
