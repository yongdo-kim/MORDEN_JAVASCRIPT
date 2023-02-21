console.log("------- 메서드와 This START --------");

/*
    메서드와 this
      - this는 런타임에 결정됩니다. this.value의 value는 this가 어떤 객체를 가리키고 있냐에 따라 달라짐.
      - this는 함수 내에서 사용될 때, 해당 함수가 속한 객체를 참조하는 키워드임. 
      - 자바스크립트에선 모든 함수에 this를 사용할 수 있습니다.
      - 화살표 함수는 this가 없다. 화살표 함수 안에서 this를 사용하면 외부 this를 사용한다. (외부 : 화살표 함수를 감싸는 함수) 
      - 일반 함수는 this가 있다. 프로퍼티가 없는 상태로 this를 호출하면 undifined가 나온다. 
*/

let user = {
  name: "yongdo",
  // "sayHi: function(){console.log()}"과 동일합니다.
  sayHi() {
    console.log(`${this.name}`); //이 this는 user를 의미함.
  },
};
user.sayHi(); //yongdo

//아무것도 없다면 this는 undefined 반환
function showThisByNothing() {
  console.log(this.name); //undefined
}
showThisByNothing();

//자유로운 this
let freeThis = {
  name: "보라",
  sayHiArrow() {
    let arrow = () => console.log(this.name); //화살표 함수는 this가 없음 화살표 함수 위의 함수를 this로 판단.
    arrow();
  },
  sayHiLet() {
    function hihi() {
      console.log(this.name); //hihi()내부 함수에 있는 this를 호출
    }
    hihi();
  },
};

freeThis.sayHiArrow(); // 보라
freeThis.sayHiLet(); // undefined
console.log("------- 메서드와 This END --------");

console.log("------- new 연산자와 생성자 함수 START --------");
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

console.log("------- new 연산자와 생성자 함수 END --------");

console.log("-------  옵셔널 체이닝  START --------");
/* 
    옵셔널 체이닝 
    ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.
*/
let optionalUser = {}; // 주소 정보가 없는 사용자
console.log(optionalUser?.address?.street);
console.log("-------  옵셔널 체이닝  END --------");
