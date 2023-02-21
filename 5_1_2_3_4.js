console.log("-------  객체를 원시형으로 변환하기 START --------");

/*
    원시값의 메서드 : ex) str.toUpperCase () 
    원시값 메서드가 만들어지는 방법
        - String,Number,Boolean, Symbol 래퍼 객체 사용
        - 원시값 -> 객체 생성 -> 메서드 호출 -> 객체 소멸 -> 원시값 반환 
*/

//e
let billion = 1e9; 
console.log(billion); //1000000000
let ms = 1e-6; 
console.log(ms); //0.000001

console.log("-------  객체를 원시형으로 변환하기 END --------");


console.log("-------  십진법. 이진법  START --------");
//십진법. 이진법 
//십진법 체계에서는 1/10, 2/10은 0.1, 0.2로 나눠질 수 있지만, 1/3이 무한소수로 됨.
//이진법 체계에서는 0.1 또는 0.2를 정확하게 저장하는 방법은 없음 => 어림수 이용 => toFixed(n)

let sum = 0.1+0.2
console.log(sum == 0.3); //0.30000000000000004 : false 
console.log(sum.toFixed(3) == 0.3); //true 


console.log("-------  십진법. 이진법  END --------");

console.log("-------  isNaN. isFinite  START --------");
//isNaN
//NaN은 NaN 자기 자신을 포함하여 그 어떤 값과도 같지 않다는 점에서 독특, 
console.log(NaN === NaN); //false
console.log(isNaN(NaN)) //true : 비교는 ===가 아닌 isNaN으로 한다. 

// isFinite
//인수를 숫자로 변환하고 변환한 숫자가 NaN/Infinity/-Infinity가 아닌 일반 숫자인 경우 true를 반환함
console.log(isFinite("15")); //true
console.log(isFinite("str")); //false

console.log("-------  isNaN. isFinite  END --------");

/*
    문자열 : 문자열은 작은따옴표나 큰따옴표, 백틱으로 감쌀 수 있습니다. 
*/


/*
    배열 
*/
let arr1 = new Array();
let arr2 = [];