/*
    call/apply와 데코레이터, 포워딩
        - this를 명시적으로 고정해 함수를 호출할 수 있게 해주는 특별한 내장 함수 메서드를 의미
        - 데코레이터(decorator) : 인수로 받은 함수의 행동을 변경시켜주는 함수
        - 캐싱작업시 사용, 본 객체를 건드리지 않고 기능 추가하는 방식이 가능
*/

//call : 모든 함수에서 사용 가능, this를 특정값으로 지정 가능.
const mike = {
    name: "Mike"
};

const tom = {
    name: "Tom"
};

function showThisName() {
    console.log(this.name); //undefined : this가 없음.
}

showThisName(); //window.name == "";
showThisName.call(mike); // "Mike": this -> mike를 의미함

function Update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

Update.call(mike, 1999, "singer"); //this,매개변수,매개변수

// [apply] apply는 매개변수를 배열로 받고, 나머지는 call과 동일함
Update.apply(mike, [1999, "singer"]); //this,[매개변수,매개변수]

const nums = [3, 10, 1, 6, 4]
const minNum = Math
    .min
    .apply(null, nums); //this, 배열을 대입할때 유용, null은 this가 필요없는 경우 사용

// [bind] 함수의 this값을 영구히 바꿀 수 있습니다.

const user = {
    name: 'Mike',
    showName: function () {
        console.log(`hello ${this.name}`);
    }
}

user.showName(); // hello mike;

/* - 이쪽에러가남

let fn = user.showName();
fn; //hello, 이 상태에서는 fn()만 썼기 때문에 this.를 잃어버린 상태 this == 메소드 앞 네이밍
fn.call(user); //hello mike
fn.apply(user); // hello mike;

let boundFn = fn.bind(user);
boundFn(); // hello, mike로 나옴. this를 잃어버리지 않음. */

/*
    함수바인딩
    사라진 this
        - 객체 메서드가 객체 내부가 아닌 다른 곳에 전달되어 호출되면 this가 사라짐.
*/

let disapperUser = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

//undefined는 disapperUser에서 분리된 sayHi만을 전달하기 때문임. sayHi 자체의 this는 없는 상태
setTimeout(disapperUser.sayHi, 100); // Hello, undefined!
setTimeout(function () {
    disapperUser.sayHi()
}, 100); //Hello, John! : 외부 렉시컬 환경에서 user를 받아서 보통 때처럼 메서드를 호출

//문제점 setTimeout 종료 전 disapperUser를 변경한다면 값도 변경됨.
disapperUser = {
    sayHi() {
        console.log(`difffff, ${this.firstName}!`);
    }
}

// bind 함수처럼 호출 가능한 '특수 객체(exotic object)'를 반환 객체를 호출하면 this가 context로 고정된 함수
// func가 반환
let bindUser = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

let bindSayHi = bindUser
    .sayHi
    .bind(bindUser); // (*)

// 이제 객체 없이도 객체 메서드를 호출할 수 있습니다.
bindSayHi(); // Hello, John!

setTimeout(bindSayHi, 100); // Hello, John!

// 1초 이내에 user 값이 변화해도 sayHi는 기존 값을 사용합니다.
bindUser = {
    bindSayHi() {
        console.log("또 다른 사용자!");
    } //Hello, John!
};

/*
    화살표 함수 다시 살펴보기
        - 화살표 함수에는 'this’가 없습니다
        - 화살표 함수 본문에서 this에 접근하면, 외부에서 값을 가져옵니다.
        - 객체의 메서드(showList()) 안에서 동일 객체의 프로퍼티(students)를 대상으로 순회를 하는 데 사용
        - 화살표 함수는 new와 함께 실행할 수 없습니다. : this가 없기 때문에 화살표 함수는 생성자 함수로 사용할 수 없다는 제약
        - 화살표 함수엔 'arguments’가 없습니다
        - 화살표 함수는 컨텍스트가 있는 긴 코드보다는 자체 '컨텍스트’가 없는 짧은 코드를 담을 용도로 만들어졌습니다.
        */

let group = {
    title: "1모둠",
    students: [
        "보라", "호진", "지민"
    ],

    //forEach에서 화살표 함수를 사용 :  this는 group을 의미함.
    showListByArrowFunction() {
        this
            .students
            .forEach(student => console.log(this.title + ': ' + student));
    },

    //일반함수 사용시, this는 내부안에서만 작용, undefined 호출.
    showListByNormalFunction() {
        this
            .students
            .forEach(function (student) {
                console.log(this.title + ': ' + student)
            });
    }
};

group.showListByArrowFunction();
group.showListByNormalFunction();

function defer(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}

function deferSayHi(who) {
    console.log('안녕, ' + who);
}

let sayHiDeferred = defer(deferSayHi, 100);
sayHiDeferred("철수"); // 2초 후 "안녕, 철수"가 출력됩니다.