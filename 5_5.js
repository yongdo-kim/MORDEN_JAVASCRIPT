/*
    iterable 객체 : 반복 가능한(iterable, 이터러블) 객체
    Symbol.iterator을 이용해서 이터러블 객체를 만들 수 있다.

    목표 : 
        - let ragne {from :1, to :5}에서 for (let num of range) 기능을 써보자. 
        - 작동순서 : 
            for (let num of range)    
            [Symbol.iterator]를 호출   
            Symbol.iterator가 없다면 호출 (원래라면 let range는 에러발생)   
            다음 값이 필요하면 for (let num of range) 기준 next 함수 호출 (이름이 다르면 에러)    
            반환 값은 {done: Boolean, value: any}와 같은 형태
*/

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() { //이 코드와
        this.current = this.from;
        return this;
    },

    next() { //이 코드가 필요하다
        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++
            };
        } else {
            return {done: true};
        }
    }
};

for (let num of range) {
    console.log(num);
}

/*
    맵과 셋
    맵 vs 객체
        - 공통점 : 키가 있는 데이터를 저장
        - 차이점 : 객체는 키를 문자형으로 변환 후 저장, 맵은 그대로 저장
        - key값 1, '1'을 맵은 구별
    map[key]는 Map을 쓰는 바른 방법이 아님 => 이렇게 사용하면 map을 객체취급함
    map을 사용할 땐 map전용 메서드 set, get 등을 사용해야만 합니다.
  */

let map = new Map();

map.set('1', 'str1'); //'1'
map.set(1, 'num1'); // 1
map.set(true, 'bool1'); // true, 문자형으로 변환하지 않고 그대로 저장.
console.log(map); //Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }

let john = {
    name: "John"
};
let visitsCountObj = {}; // 객체를 하나 만듭니다.
visitsCountObj[john] = 123; // 객체(john)를 키로 해서 객체에 값(123)을 저장해봅시다.
// 원하는 값(123)을 얻으려면 아래와 같이 키가 들어갈 자리에 `object Object`를 써줘야합니다.
console.log(visitsCountObj["[object Object]"]); // 123

/*
    위크맵과 위크셋
    위크맵
        - 키가 반드시 객체여야 한다는 점입니다. 원시값은 위크맵의 키가 될 수 없습니다
        - 반복 작업과 keys(), values(), entries() 메서드를 지원하지 않는다
        - 부차적인 데이터를 저장할 곳이 필요할 때 그 진가를 발휘
        - 위크맵은 캐싱(caching)이 필요할 때 유용


*/

//Map을 사용하는 경우
let johnByMap = {
    name: "John"
};
let array = [johnByMap];
johnByMap = null; // 참조를 null로 덮어씀
// john을 나타내는 객체는 배열의 요소이기 때문에 가비지 컬렉터의 대상이 되지 않습니다. array[0]을 이용하면 해당 객체를 얻는 것도
// 가능합니다.
console.log(JSON.stringify(array[0])); //{"name":"John"}

let johnByWeakMap = {
    name: "John"
};
let weakMap = new WeakMap();
weakMap.set(johnByWeakMap, "...");
johnByWeakMap = null; // 참조를 덮어씀
// john을 나타내는 객체는 이제 메모리에서 지워집니다!
let test = weakMap.get(johnByWeakMap);
console.log(test);

//캐시로 이용 📁 cache.js
let cache = new WeakMap();

// 연산을 수행하고 그 결과를 위크맵에 저장합니다.
function process(obj) {
    if (!cache.has(obj)) {
        let result =/* 연산 수행 */
        obj;

        cache.set(obj, result);
    }

    return cache.get(obj);
}

// 📁 main.js
let obj = {/* ... 객체 ... */
};

let result1 = process(obj);
let result2 = process(obj);

// 객체가 쓸모없어지면 아래와 같이 null로 덮어씁니다.
obj = null;

// 이 예시에선 맵을 사용한 예시처럼 cache.size를 사용할 수 없습니다. 하지만 obj가 가비지 컬렉션의 대상이 되므로, 캐싱된 데이터
// 역시 메모리에서 삭제될 겁니다. 삭제가 진행되면 cache엔 그 어떤 요소도 남아있지 않을겁니다.