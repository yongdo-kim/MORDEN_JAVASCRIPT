/*
    1!!!!!!!!!!!!!!!!!!!!!!!!!!!!워닝!!!!!!
    11강은 사실, Promise를 많이 배우지만, async await을 이용하기 때문에
    코딩앙마에서 배운 내용으로 대체하도록 하겠습니다. 어쩌면 마음이 급해서 그럴지도.. 
    히스토리 : 비동기 :  callback(지옥) -> Promise -> async await(분리&가독성)
     1!!!!!!!!!!!!!!!!!!!!!!!!!!!!워닝!!!!!!
      1!!!!!!!!!!!!!!!!!!!!!!!!!!!!워닝!!!!!!
       1!!!!!!!!!!!!!!!!!!!!!!!!!!!!워닝!!!!!!
*/
const pr = new Promise((resolve, reject) =>{
	setTimeout(()=>{
		resolve('OK');
	},3000);
});

//Promise 상태 : pending -> fulfilled or rejected

pr.then(
	function(result){}//성공
).catch(
	function(error){}//실패는 catch문으로 잡는게 좋다
).finally(
	function(){} //성공 or 실패든 여기서 종료, loading 종료시 좋음
)


// [콜백지옥]
const f1  = (callback) => { //(2) 이동 
	setTimeout(function(){
		console.log("1번 주문 완료");
		callback();// (1) 담아서 
	},100);
}

const f2  = (callback) => {
	setTimeout(function(){
		console.log("2번 주문 완료");
		callback();
	},100);
}

const f3  = (callback) => {
	setTimeout(function(){
		console.log("3번 주문 완료");
		callback();
	},100);
}

//각 해당함수를 모듈화 불가능. 
f1(function(){
	f2(function(){
		f3(function(){
				console.log("콜백 종료");
			});
	});
});


// [promise를 사용하는 경우]
const f4 = () =>{
	return new Promise((res,rej)=>{
		setTimeout(function(){
			res("1번 주문 완료");
	},100);
	});
}

const f5 = (message) =>{
	return new Promise((res,rej)=>{
		setTimeout(function(){
			res("2번 주문 완료");
	},100);
	});
}


const f6 = (message) =>{
	return new Promise((res,rej)=>{
		setTimeout(function(){
			res("3번 주문 완료");
	},100);
	});
}


// [프로미스 체이닝]
f4()
.then((res)=> f5(res))
.then((res)=> console.log(res))
.catch(console.log)
.finally(()=>console.log);


// [Promise.all]
console.time("x");
Promise.all([f4(), f5(), f6()]).then((res) => {console.timeEnd("x");});
//이 방법은 제일 오래 걸리는 시간을 기준으로 모두 호출, 실패시 모두 실패 
