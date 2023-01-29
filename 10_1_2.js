/*
    중요도 별 5개
    'try..catch'와 에러 핸들링
        - try..catch는 오직 런타임 에러에만 동작합니다. : 컴파일타임에는 에러캐치 불가
        - try..catch는 동기적으로 동작합니다.
*/

// 스케줄 된 함수 내부의 예외를 잡으려면, try..catch를 반드시 함수 내부에 구현해야 합니다. setTimeout에 넘겨진 익명
// 함수는 엔진이 try..catch를 떠난 다음에서야 실행되기 때문입니다.
setTimeout(function () {
    try {
        noSuchVariable; // 이제 try..catch에서 에러를 핸들링 할 수 있습니다!
    } catch  {
        console.log("에러를 잡았습니다!");
    }
}, 100);

let json = "{ bad json }";

try {

    let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
    console.log(user.name); // 이 코드는 동작하지 않습니다.

} catch (e) {
    // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
    console.log("데이터에 에러가 있어 재요청을 시도합니다.");
    console.log(e.name);
    console.log(e.message);
}

//‘throw’ 연산자
let json2 = '{ "age": 30 }'; // 불완전한 데이터

try {

    let user = JSON.parse(json2); // <-- 에러 없음

    if (!user.name) {
        throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
    }

    console.log(user.name);

} catch (e) {
    console.log("JSON Error: " + e.message); // JSON Error: 불완전한 데이터: 이름 없음
}

//에러 다시 던지기
function readData() {
    let json = '{ "age": 30 }';

    try {
        // ...
        blabla(); // 에러!
    } catch (e) {
        // ...
        if (!(e instanceof SyntaxError)) {
            throw e; // 알 수 없는 에러 다시 던지기 -> 에러가 있음에도 다음 실행단계로 넘어간다.
        }
    }
}

try {
    readData();
} catch (e) {
    console.log("External catch got: " + e); // 에러를 잡음
}

// finally finally 절은 try..catch 절을 빠져나가는 어떤 경우에도 실행됩니다. return을 사용해 명시적으로
// 빠져나가려는 경우도 마찬가지입니다.

function func() {

    try {
        return 1;

    } catch (e) {
        /* ... */
    } finally {
        console.log('finally');
    }
}

console.log(func()); // finally 안의 alert가 실행되고 난 후, 실행됨

/*
    커스텀 에러와 에러 확장
        - Error는 js 내장함수 
  */

        
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// 사용법
function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationError("No field: age");
    }
    if (!user.name) {
        throw new ValidationError("No field: name");
    }

    return user;
}

// try..catch와 readUser를 함께 사용한 예시

try {
    let user = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) { // (*)
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err; // 알려지지 않은 에러는 재던지기 합니다. (**)
    }
}