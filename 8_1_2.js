/*
    프로토타입 상속
        - 자바스크립트의 객체는 명세서에서 명명한 [[Prototype]]이라는 숨김 프로퍼티를 갖음.
        - 숨김 프로퍼티 값은 null이거나 다른 객체에 대한 참조
        - 다른 객체를 참조하는 경우 참조 대상을 '프로토타입(prototype)'이라 부름 (부모)
        - [[Prototype]] 프로퍼티는 내부 프로퍼티이면서 숨김 프로퍼티이지만 다양한 방법을 사용해 개발자가 값을 설정가능
        - 프로토타입 체인 : 해당 객체에 프로퍼티를 찾고 없으면 그 상위를 계속해서 찾는 행위
            - 순환 참조(circular reference)는 허용되지 않음
            - __proto__의 값은 객체나 null만 가능합니다. 다른 자료형은 무시됨.
        - hasOwnProperty로 확인가능.
        */

// this는 프로토타입에 영향을 받지 않습니다. 메서드를 객체에서 호출했든 프로토타입에서 호출했든 상관없이 this는 언제나 . 앞에 있는
// 객체입니다.
let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log(`동물이 걸어갑니다.`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "하얀 토끼",
    __proto__: animal //부모타입 연결
};

// rabbit에 새로운 프로퍼티 isSleeping을 추가하고 그 값을 true로 변경합니다.
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (프로토타입에는 isSleeping이라는 프로퍼티가 없습니다.)

/*
    함수의 prototype 프로퍼티
        -모든 함수는 기본적으로 "prototype" 프로퍼티를 가진다.
        - F.prototype은 new F를 호출할 때만 사용됩니다.
        - 생성자 함수에 기본으로 세팅되는 프로퍼티(F.prototype)는 [[Prototype]]과 다릅니다.
        -  F.prototype은 new F()를 호출할 때 만들어지는 새로운 객체의 [[Prototype]]을 설정합니다.
  */
let newAnimal = {
    eats: true
};

function Rabbit(name) { //생성자함수
    this.name = name;
}

Rabbit.prototype = newAnimal; //new에서 사용하기 위해 prototype를 사용 
let newAnimal2 = new Rabbit("흰 토끼"); //  rabbit.__proto__ == animal
console.log(newAnimal2.eats); // true

//함수의 디폴트 프로퍼티 prototype과 constructor 프로퍼티
//자바스크립트는 알맞은 "constructor" 값을 보장하지 않는다는 점입니다. 
function newRabbit() {}
newRabbit.prototype = { //prototype을 조작하면 constructor는 바뀜
  jumps: true
};

let rabbit33 = new newRabbit();
console.log(rabbit33.constructor === newRabbit); // false