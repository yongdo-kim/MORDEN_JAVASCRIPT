/*
    private, protected 프로퍼티와 메서드
        - 내부 인터페이스(internal interface) – 동일한 클래스 내의 다른 메서드에선 접근할 수 있지만, 클래스 밖에선 접근할 수 없는 프로퍼티와 메서드
        - 외부 인터페이스(external interface) – 클래스 밖에서도 접근 가능한 프로퍼티와 메서드
        - public: 어디서든지 접근할 수 있으며 외부 인터페이스를 구성합니다.
        - protected : 클래스 자신과 자손 클래스에서만 접근을 허용 : JS에서 필드 지원 안함 -> 모방
            - 변수명 앞에 _를 붙여야함.
        - private: 클래스 내부에서만 접근할 수 있으며 내부 인터페이스를 구성할 때 쓰입니다.
            - private 프로퍼티와 메서드는 #으로 시작
        - //get, set문법을 사용하기보다 함수로 만드는게 가독성 높임.
*/

class CoffeeMachine {

    //protected
    _waterAmount = 0;

    //private CoffeeMachine을 상속받는 클래스에선 #waterAmount에 직접 접근할 수 없습니다.
    #waterLimit = 200;

    constructor(power) {
        this.power = power;
    }

    setWaterAmount(value) {
        if (value < 0) 
            throw new Error("물의 양은 음수가 될 수 없습니다.");
        
        this._waterAmount = value;
    }

    getWaterAmount() {
        return this._waterAmount;
    }
}

let coffee = new CoffeeMachine(100);
coffee.setWaterAmount(10);
console.log(coffee._waterAmount);

/*
    내장 클래스 확장하기 : PASS
  */

/*
        'instanceof'로 클래스 확인하기
            - 객체가 특정 클래스에 속하는지 아닌지를 확인
            - [Symbol.hasInstance](obj)이 구현되어있다면, instanceof 호출시 여기로 이동
            - 없다면 obj.__proto__ === Class.prototype? 으로 비교 
            - prototype을 수정한다면 다른 결과를 초래함. 
    */

class Rabbit {}
let rabbit = new Rabbit();

// rabbit이 클래스 Rabbit의 객체인가요?
console.log(rabbit instanceof Rabbit); // true

// 프로토타입이 변경됨
let changedRabbit = Rabbit.prototype = {};
console.log( changedRabbit instanceof Rabbit ); // false

/*
    믹스인
        - 자바스크립트는 단일상속만을 허용하는 언어 :  객체엔 단 하나의 [[Prototype]]만 존재
        -  다른 클래스를 상속받을 필요 없이 이들 클래스에 구현되어있는 메서드를 담고 있는 클래스라
        - 아직 경험치 부족으로 여기는 넘어가도록 하겠습니다.
*/