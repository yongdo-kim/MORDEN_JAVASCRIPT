/* Object.keys, values, entries : PASS */

/*
    구조 분해 할당
        - 객체나 배열을 변수로 '분해’할 수 있게 해줌
        - 쉼표를 사용하면 필요하지 않은 배열 요소를 버릴 수 있습니다.

*/

let arr = ["Bora", "Lee"];
let [firstName, surname] = arr;
console.log(firstName); //Bora
console.log(surname); //Lee

let [a,, b] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(b); //Consul, 두번째인 Caesar은 무시

//...연산자
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(rest.length); //2

//객체분해
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let {title, width, height} = options;

/* Date 객체와 날짜 : PASS */

/*
    JSON과 메서드
        -  네트워크를 통해 객체를 어딘가에 보내기 : 문자열로 전환
        - toString()으로 매번 문자열 변환 작업은 번거로운 작업
        - JSON.stringify을 사용
            - 메서드, 심볼형, undefined는 무시함.
        - JSON.stringify – 객체를 JSON으로 바꿔줍니다.
        - JSON.parse – JSON을 객체로 바꿔줍니다.
        - 순환참조가 있다면 에러발생
*/

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: [
        'html', 'css', 'js'
    ],
    wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); // 문자열이네요!
console.log(json);

// SON으로 인코딩된(JSON-encoded), 직렬화 처리된(serialized), 문자열로 변환된(stringified),
// 결집된(marshalled) 객체

/* JSON으로 인코딩된 객체:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "wife": null
  }
  */

//json parse let value = JSON.parse(str, [reviver]);
let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;

//Date 문자열을 다시 Date()함수로 전환하기 위해서는 reviver 에서 변환 필요  
schedule = JSON.parse(schedule, function (key, value) {
    if (key == 'date') 
        return new Date(value);
    return value;
});

 console.log(schedule.meetups[1].date.getDate()); // 잘 동작합니다!