/*
    메서드와 this
    this 값은 런타임에 결정됩니다. 컨텍스트에 따라 달라지죠. (객체가 누구냐에 따라 값 반환이 달라짐)
    obj.f()를 호출했다면 this는 f를 호출하는 동안의 obj입니다.
    자바스크립트에선 모든 함수에 this를 사용할 수 있습니다.
    화살표 함수는 일반 함수와는 달리 ‘고유한’ this를 가지지 않습니다. 
    화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 ‘평범한’ 외부 함수에서 this 값을 가져옵니다.
*/

let user = {
// "sayHi: function(){console.log()}"과 동일합니다.
    name:"yongdo",
    sayHi() { 
      console.log(`${this.name}`); // 객체 프로퍼티에 할당된 함수를 메서드(method) 라고 부릅니다.
    }
  };
user.sayHi(); //this는 user로 동적변경 

//아무것도 없다면 this는 undefined 반환 
function showThisByNothing() {
    console.log(this.name); 
}
showThisByNothing();

//자유로운 this
let freeThis = {
  name: "보라",
  sayHiArrow() {
    let arrow = () => console.log(this.name); //화살표 함수는 this가 없음 외부 this를 사용
    arrow();
  },
  sayHiLet() {
    function hihi() {
        console.log(this.name); //hihi()내부 함수에 있는 this를 호출 
    }
    hihi();
  }
};

freeThis.sayHiArrow(); // 보라
freeThis.sayHiLet(); // undefined


/*
    new 연산자와 생성자 함수
    함수 이름의 첫 글자는 대문자로 시작합니다.
    반드시 'new' 연산자를 붙여 실행합니다.
    new를 쓰면 알고리즘이 실행됩니다.
        - 자동으로 return this이 생기기 때문에 명시적인 return이 없음. 

*/


function ConstructorUser(name) {
    // this = {};  (빈 객체가 암시적으로 만들어짐) -(1) 작동원리

    // 새로운 프로퍼티를 this에 추가함 - (2) 작동원리
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (this가 암시적으로 반환됨) - (3) 작동원리
  }

let constructorUserser = new ConstructorUser("보라");
console.log(constructorUserser.name); //보라


/* 
    옵셔널 체이닝 
    ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.
*/
let optionalUser = {}; // 주소 정보가 없는 사용자
console.log(optionalUser?.address?.street);
